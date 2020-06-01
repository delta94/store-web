import { ApolloClient } from 'apollo-client';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import { restoreAuthSession } from './auth';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [],
    },
  },
});

const customFetch = async (uri: Request | string, options: RequestInit | undefined) => {
  const response = await fetch(uri, options);
  if (response.status === 474) {
    await restoreAuthSession();
  }

  return response;
};

const cache = new InMemoryCache({ fragmentMatcher });
const link = new HttpLink({
  fetch: customFetch,
  uri: `${process.env.API_URL}/v1/graphql`,
  credentials: 'include',
});

const client = new ApolloClient({
  cache: cache,
  link: link,
});

export default client;
