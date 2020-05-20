import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { GRAY_900 } from 'store-library';

import Footer from './components/Footer';
import Header from './components/Header';

interface Props {
  className?: string;
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <Wrapper>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Main = styled.main`
  flex-grow: 1;
  background-color: ${GRAY_900};
  padding-top: 48px;
`;
