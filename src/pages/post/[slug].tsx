import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { Post as PostType } from 'store-library/src/types';
import { apolloClient, GET_POST } from 'store-library/src/api';
import { detectBot } from '~/helpers';
import { Post } from 'store-library';
import SearchFilter from '~/components/SearchFilter';
import { ErrorContext } from '~/components/ErrorBoundary';

const ERROR_MESSAGE = 'Get Post Error by Slug';

interface Props {
  post: PostType | null;
  error: boolean;
}

const PostPage = (props: Props) => {
  const { post, error } = props;
  const router = useRouter();
  const { throwAsyncError } = useContext(ErrorContext);
  const slug = router.query.slug;

  useEffect(() => {
    if (post) return;

    if (!slug) {
      router.push('/404');
      return;
    }

    if (error) {
      throwAsyncError(new Error(`${ERROR_MESSAGE}: ${slug}`));
      return;
    }

    router.push(`/post?slug=${slug}`, `/post/${slug}`);
  }, []);

  if (!post) return null;

  return (
    <>
      <SearchFilter />
      <Post post={post} />
    </>
  );
};

export default React.memo(PostPage);

export const getServerSideProps: GetServerSideProps = async context => {
  const slug = context.params?.slug;
  const userAgent = context.req.headers['user-agent'];
  const isBot = detectBot(userAgent);
  let error = false;

  let post: PostType | null = null;

  if (isBot) {
    const { data, errors } = await apolloClient.query({
      query: GET_POST,
      variables: { slug },
      errorPolicy: 'all',
    });

    if (errors) {
      error = true;
    }

    post = data?.postBySlug || null;
  }

  return { props: { post, error } };
};
