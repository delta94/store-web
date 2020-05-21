import React from 'react';
import styled from 'styled-components';
import { Container, PageModule, GET_STORE_FRONT } from 'store-library';
import { PageModule as PageModuleProps } from 'store-library/src/types';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

interface Props {
  className?: string;
}

const Home = (props: Props) => {
  const { className } = props;
  const { data } = useQuery(GET_STORE_FRONT);
  const router = useRouter();

  const handleCardClick = (slug: string) => {
    router.push(
      `/game?slug=${slug}`,
      `/game/${slug}`,
      { shallow: true },
    );
  };

  const { blocks = [] } = data?.store?.storefront || {};

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
