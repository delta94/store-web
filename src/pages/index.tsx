import React from 'react';
import styled from 'styled-components';
import { Container, PageModule } from 'store-library';
import homePageModules from 'store-library/src/mock/homePageModules';

interface Props {
  className?: string;
}

const Home = (props: Props) => {
  const { className } = props;

  return (
    <Wrapper className={className}>
      <Container>
        <Content>
          {homePageModules.map(({ type, items, title }, i) => (
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

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Home, areEqual);

const Wrapper = styled.div`
  color: white;
`;

const Content = styled.div`
  padding-top: 30px;
`;
