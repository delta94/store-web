import { ApolloClient } from 'apollo-client';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [],
    },
  },
});

const cache = new InMemoryCache({ fragmentMatcher });
const link = new HttpLink({
  fetch,
  uri: `${process.env.REACT_APP_API_URL}/v1/graphql`,
  credentials: 'include', // only develop mode
});

const client = new ApolloClient({
  cache: cache,
  link: link,
});

export default client;
