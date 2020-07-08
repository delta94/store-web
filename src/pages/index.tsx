import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Container, PageModule } from 'store-library';
import { GET_STORE_FRONT, apolloClient } from 'store-library/src/api';
import { PageModule as PageModuleProps } from 'store-library/src/types';
import { detectBot } from '~/helpers';
import SearchFilter from '~/components/SearchFilter';

interface Props {
  className?: string;
  blocks: PageModuleProps[] | null;
  error: boolean;
}

const Home = (props: Props) => {
  const { className, error } = props;
  const [blocks, setBlocks] = useState(props.blocks);
  const router = useRouter();

  const loadBlocks = async () => {
    const { data, errors } = await apolloClient.query({
      query: GET_STORE_FRONT,
      errorPolicy: 'all',
    });

    if (errors && !data?.storefront?.blocks) {
      router.push('/_error');
      return;
    }

    setBlocks(data?.storefront?.blocks || []);
  };

  useEffect(() => {
    if (error) {
      router.push('/_error');
      return;
    }

    if (!blocks) {
      loadBlocks();
    }
  }, []);

  const handleCardClick = (slug: string) => {
    router.push(
      `/game?slug=${slug}`,
      `/game/${slug}`,
      { shallow: true },
    );
  };

  if (!blocks) return null;

  return (
    <Wrapper className={className}>
      <SearchFilter />
      <Container>
        {(blocks as PageModuleProps[]).map(({ type, items, title }, i) => (
          <PageModule
            key={`${i}_${type}`}
            type={type}
            items={items}
            title={title}
            onCardClick={handleCardClick}
          />
        ))}
      </Container>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Home, areEqual);

const Wrapper = styled.div`
  color: white;
`;

export const getServerSideProps: GetServerSideProps = async context => {
  const userAgent = context.req.headers['user-agent'];
  const isBot = detectBot(userAgent);

  let blocks: PageModuleProps[] | null = null;
  let error = false;

  if (isBot) {
    const { data, errors } = await apolloClient.query({
      query: GET_STORE_FRONT,
      errorPolicy: 'all',
    });

    if (errors) {
      error = true;
    }

    blocks = data?.storefront?.blocks;
  }

  return { props: { blocks, error } };
};
