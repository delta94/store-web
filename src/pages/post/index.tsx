import React, { useContext, useEffect } from 'react';
import { GET_POST } from 'store-library/src/api';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { Post as PostType } from 'store-library/src/types';
import { PageLoading, Post } from 'store-library';
import SearchFilter from '~/components/SearchFilter';
import { ErrorContext } from '~/components/ErrorBoundary';
import { useTranslation } from 'react-i18next';

const ERROR_MESSAGE = 'Get Post Error by Slug';

const PostPage = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const { slug } = router.query;
  const { data, error, loading, refetch } = useQuery(GET_POST, {
    variables: { slug },
    errorPolicy: 'all',
    fetchPolicy: 'no-cache',
  });
  const { throwAsyncError } = useContext(ErrorContext);
  const post: PostType = data?.postBySlug;

  useEffect(() => {
    i18n.on('languageChanged', refetch);

    return () => {
      i18n.off('languageChanged', refetch);
    };
  }, []);

  if (loading) return <PageLoading />;

  if (error?.graphQLErrors.map(({ message }) => message).includes('ST-1006 errors.qilin.store.not_found')) {
    router.push('/404');
    return null;
  }

  if (error?.graphQLErrors && !post) {
    throwAsyncError(new Error(`${ERROR_MESSAGE}: ${slug}`));
    return null;
  }

  if (!post) return null;

  return (
    <>
      <SearchFilter />
      <Post post={post} />
    </>
  );
};

export default React.memo(PostPage);
