import React from 'react';
import styled from 'styled-components';
import { Container, PageModule, screenSize } from 'store-library';

import modules from '~/mainPageModules';

interface Props {
  className?: string;
}

const Home = (props: Props) => {
  const { className } = props;

  return (
    <Wrapper className={className}>
      <Container>
        <Content>
          {modules.map(({ component, ...rest }) => {
            const Component = PageModule[component];
            return (
              <React.Fragment key={component}>
                <Component key={component} {...rest} />
                <Devider />
              </React.Fragment>
            );
          })}
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

export const Devider = styled.div`
  height: 40px;

  @media only screen and (min-width: ${screenSize.TABLET}) {
    height: 48px;
  }

  @media only screen and (min-width: ${screenSize.LAPTOP}) {
    height: 50px;
  }
`;
