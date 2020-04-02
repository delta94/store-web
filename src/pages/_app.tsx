import React from 'react';
import App from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import '~/i18n';
import client from '~/api/apolloClient';
import { GET_USER } from '~/api/queries';
import { logout, login } from '~/auth';
import Layout from '~/components/Layout';
import { UserContext } from '~/contexts';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    
    return (
      <ApolloProvider client={client}>
        <AppWithContext>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <GlobalStyle />
        </AppWithContext>
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
  html, body {
    border: 0;
    min-height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
`;
