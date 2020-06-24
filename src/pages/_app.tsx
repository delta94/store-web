import React, { useEffect } from 'react';
import App from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { ApolloProvider, useLazyQuery } from '@apollo/react-hooks';
import { I18nextProvider } from 'react-i18next';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { GET_USER } from 'store-library/src/api';
import i18n from 'store-library/src/i18n';
import ErrorBoundary from '~/components/ErrorBoundary';
import { logout, login, HAS_SESSION, restoreSessionOnEnter } from '~/auth';
import apolloClient from '~/apolloClient';
import { UserContext } from '~/contexts';
import Layout from '~/components/Layout';
import { getCookie } from '~/helpers';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ApolloProvider client={apolloClient}>
        <I18nextProvider i18n={i18n as any}>
          <AppWithContext>
            <Layout>
              <ErrorBoundary>
                <Component {...pageProps} />
              </ErrorBoundary>
            </Layout>
            <GlobalStyle />
          </AppWithContext>
        </I18nextProvider>
      </ApolloProvider>
    );
  }
}

const AppWithContext = (props: any) => {
  const { children } = props;
  const [getUser, { loading, data, called }] = useLazyQuery(GET_USER, { fetchPolicy: 'network-only' });
  const user = data?.profile || null;
  const hasSession = getCookie(HAS_SESSION);

  if (!hasSession) {
    restoreSessionOnEnter();
  }

  if (typeof window !== 'undefined') {
    const isIframe = window.parent !== window;

    if (!isIframe && !called) {
      getUser();
    }
  }

  const onLogout = () => {
    logout();
  };

  const onLogin = () => {
    login();
  };

  const userContextValue = {
    user,
    loading: !called || loading,
    onLogin,
    onLogout,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default MyApp;

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Arial, sans-serif;
    overflow-x: hidden;
  }

  html, body {
    border: 0;
    min-height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
