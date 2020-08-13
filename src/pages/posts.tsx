import React from 'react';
import { Posts, Container } from 'store-library';
import SearchFilter from '~/components/SearchFilter';
import apolloClient from '~/apolloClient';
import { useRouter } from 'next/router';

const PostsPage = () => {
  const router = useRouter();

  const handlePostClick = (slug: string) => {
    router.push(
      `/post?slug=${slug}`,
      `/post/${slug}`,
      { shallow: true },
    );
  };

  return (
    <>
      <Container>
        <SearchFilter />
      </Container>
      <Posts client={apolloClient} onPostClick={handlePostClick} />
    </>
  );
};

export default PostsPage;
