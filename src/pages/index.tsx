import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useLazyQuery } from '@apollo/react-hooks';
import { Container, PageModule } from 'store-library';
import { GET_STORE_FRONT, apolloClient } from 'store-library/src/api';
import { PageModule as PageModuleProps } from 'store-library/src/types';
import { detectBot } from '~/helpers';

interface Props {
  className?: string;
  blocks: PageModuleProps[] | null;
}

const Home = (props: Props) => {
  const { className } = props;
  const [blocks, setBlocks] = useState(props.blocks);
  const [loadBlocks, { called, loading, data }] = useLazyQuery(GET_STORE_FRONT);
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
      <Container>
        <Content>
          {(blocks as PageModuleProps[]).map(({ type, items, title }, i) => (
            <PageModule
              key={`${i}_${type}`}
              type={type}
              items={items}
              title={title}
              onCardClick={handleCardClick}
            />
          ))}
        </Content>
      </Container>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Home, areEqual);

const Wrapper = styled.div`
  color: white;
`;

const Content = styled.div`
  padding-top: 30px;
`;

export const getServerSideProps: GetServerSideProps = async context => {
  const userAgent = context.req.headers['user-agent'];
  const isBot = detectBot(userAgent);

  let blocks: PageModuleProps[] | null = null;

  if (isBot) {
    try {
      const { data } = await apolloClient.query({
        query: GET_STORE_FRONT,
      });

      blocks = data?.storefront?.blocks;
    } catch (error) {
      console.error(error);
    }
  }

  return { props: { blocks } };
};
