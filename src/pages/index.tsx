import React from 'react';
import styled from 'styled-components';
import { Container, apolloClient, PageModule, GET_STORE_FRONT } from 'store-library';
import { PageModule as PageModuleProps } from 'store-library/src/types';

interface Props {
  className?: string;
  blocks: PageModuleProps[];
}

const Home = (props: Props) => {
  const { className, blocks } = props;

  return (
    <Wrapper className={className}>
      <Container>
        <Content>
          {blocks.map(({ type, items, title }, i) => (
            <PageModule
              key={`${i}_${type}`}
              type={type}
              items={items}
              title={title}
            />
          ))}
        </Content>
      </Container>
    </Wrapper>
  );
};

export async function getServerSideProps() {
  const { data } = await apolloClient.query({ query: GET_STORE_FRONT });

  const { blocks = [] } = data?.store?.storefront || {};

  return { props: { blocks } };
}

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Home, areEqual);

const Wrapper = styled.div`
  color: white;
`;

const Content = styled.div`
  padding-top: 30px;
`;
