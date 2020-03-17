import React, { ReactNode } from 'react';
import { BACKGROUND_LIGHT } from '~/styles/colors';

import Footer from './components/Footer';
import Header from './components/Header';
import styled from 'styled-components';

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
`;

const Main = styled.main`
  flex-grow: 1;
  background-color: ${BACKGROUND_LIGHT};
`;
