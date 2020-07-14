import React from 'react';
import { GET_POST } from 'store-library/src/api';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { Post as PostType } from 'store-library/src/types';
import { PageLoading, Post } from 'store-library';
import SearchFilter from '~/components/SearchFilter';

const PostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data, error, loading } = useQuery(GET_POST, { variables: { slug }, errorPolicy: 'all' });
  const post: PostType = data?.postBySlug;

  if (loading) return <PageLoading />;

  if (error?.graphQLErrors.map(({ message }) => message).includes('ST-1006 errors.qilin.store.not_found')) {
    router.push('/404');
    return null;
  }

  if (error?.graphQLErrors && !post) {
    router.push('/_error');
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