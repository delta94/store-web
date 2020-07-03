import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useLazyQuery } from '@apollo/react-hooks';
import { Container, PageModule } from 'store-library';
import { GET_STORE_FRONT, apolloClient } from 'store-library/src/api';
import { PageModule as PageModuleProps } from 'store-library/src/types';
import { detectBot } from '~/helpers';
import SearchFilter from '~/components/SearchFilter';

interface Props {
  className?: string;
  blocks: PageModuleProps[] | null;
  isError: boolean;
}

const Home = (props: Props) => {
  const { className, isError } = props;
  const [blocks, setBlocks] = useState(props.blocks);
  const [loadBlocks, { called, error, loading, data }] = useLazyQuery(GET_STORE_FRONT);
  const router = useRouter();

  useEffect(() => {
    if (blocks) return;

    if (!called) {
      loadBlocks();
      return;
    }

    if (loading) return;

    const newBlocks = data?.storefront.blocks || [];
    setBlocks(newBlocks);
  }, [called, loading]);

  useEffect(() => {
    if (isError) {
      router.push('/_error');
    }
  }, []);

  const handleCardClick = (slug: string) => {
    router.push(
      `/game/${slug}`,
    );
  };

  if (error) {
    router.push('/_error');
    return null;
  }

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
  let isError = false;

  if (isBot) {
    try {
      const { data, errors } = await apolloClient.query({
        query: GET_STORE_FRONT,
      });

      if (errors) {
        isError = true;
      }

      blocks = data?.storefront?.blocks;
    } catch (error) {
      isError = true;
    }
  }

  return { props: { blocks, isError } };
};
