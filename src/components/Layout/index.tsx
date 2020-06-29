import React, { ReactNode, useState, useEffect } from 'react';
import styled from 'styled-components';
import { GRAY_900, RED_500 } from 'store-library/src/styles';
import { useTranslation } from 'react-i18next';

import Footer from './components/Footer';
import Header from './components/Header';
import CustomHead from './components/CustomHead';

const CURRENT_LANG_KEY = 'i18nextLng';

interface Props {
  className?: string;
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;
  const [isOnline, setOnline] = useState(true);
  const { i18n } = useTranslation();

  i18n.on('languageChanged', lang => {
    localStorage.setItem(CURRENT_LANG_KEY, lang);
  });

  useEffect(() => {
    setOnline(navigator.onLine);

    const currentLang = localStorage.getItem(CURRENT_LANG_KEY);

    if (currentLang) {
      i18n.changeLanguage(currentLang);
    }
  }, []);

  const offlineMessage = (
    <OfflineMessage>
      You are offline!
    </OfflineMessage>
  );

  return (
    <Wrapper>
      <CustomHead />
      <Header />
      <Main>
        {isOnline ? children : offlineMessage}
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
`;

const Main = styled.main`
  flex-grow: 1;
  background-color: ${GRAY_900};
  padding-top: 48px;
  overflow-x: hidden;
`;

const OfflineMessage = styled.h2`
  color: ${RED_500};
  padding-top: 36px;
  text-align: center;
`;
