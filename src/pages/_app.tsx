import React from 'react';
import App from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import { logout, login } from '~/auth';
import Layout from '~/components/Layout';
import { UserContext } from '~/contexts';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { i18n, apolloClient, QUERIES } from 'store-library';
import { I18nextProvider } from 'react-i18next';

const { GET_USER } = QUERIES;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ApolloProvider client={apolloClient}>
        <I18nextProvider i18n={i18n}>
          <AppWithContext>
            <Layout>
              <Component {...pageProps} />
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
  const { loading, data } = useQuery(GET_USER, { fetchPolicy: 'network-only' });
  const user = (data && data.auth) || null;

  const onLogout = () => {
    logout();
  };

  const onLogin = () => {
    login();
  };

  const userContextValue = {
    user,
    loading,
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
