import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { concatPagination } from '@apollo/client/utilities';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';

import { GRAPHQL_URL_offer } from 'constants/env';
import { parseAuthorization } from './parse';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

// let apolloClient: any; // eslint-disable-line
let apolloClientOffers: any; // eslint-disable-line

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

// const httpLink = new HttpLink({
//   uri: GRAPHQL_URL, // Server URL (must be absolute)
//   credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
//   headers: {
//     authorization: parseAuthorization(process.env.API_TOKEN_CONTACT ?? ``),
//   },
// });

const httpLink_offer = new HttpLink({
  uri: GRAPHQL_URL_offer, // Server URL (must be absolute)
  credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  headers: {
    authorization: parseAuthorization(process.env.API_TOKEN_CONTACT ?? ``),
  },
});

// function createApolloClient() {
//   return new ApolloClient({
//     ssrMode: typeof window === 'undefined',
//     link: from([errorLink, httpLink]),
//     cache: new InMemoryCache({
//       typePolicies: {
//         Query: {
//           fields: {
//             allPosts: concatPagination(),
//           },
//         },
//       },
//     }),
//   });
// }

function createApolloClient_offer() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([errorLink, httpLink_offer]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allPosts: concatPagination(),
          },
        },
      },
    }),
  });
}

// export function initializeApollo(initialState = null) {
//   const _apolloClient: ReturnType<typeof createApolloClient> =
//     apolloClient ?? createApolloClient();
//
//   // If your page has Next.js data fetching methods that use Apollo Client, the initial state
//   // gets hydrated here
//   if (initialState) {
//     // Get existing cache, loaded during client side data fetching
//
//     const existingCache = _apolloClient.extract();
//
//     // Merge the initialState from getStaticProps/getServerSideProps in the existing cache
//
//     const data = merge(existingCache, initialState, {
//       // combine arrays using object equality (like in sets)
//       arrayMerge: (destinationArray, sourceArray) => [
//         ...sourceArray,
//
//         ...destinationArray.filter((d) =>
//           sourceArray.every((s) => !isEqual(d, s))
//         ),
//       ],
//     });
//
//     // Restore the cache with the merged data
//     _apolloClient.cache.restore(data);
//   }
//   // For SSG and SSR always create a new Apollo Client
//   if (typeof window === 'undefined') return _apolloClient;
//   // Create the Apollo Client once in the client
//   if (!apolloClient) apolloClient = _apolloClient;
//
//   return _apolloClient;
// }

export function initializeApollo_offer(initialState = null) {
  const _apolloClientOffers: ReturnType<typeof createApolloClient_offer> =
    apolloClientOffers ?? createApolloClient_offer();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching

    const existingCache = _apolloClientOffers.extract();

    // Merge the initialState from getStaticProps/getServerSideProps in the existing cache

    const data = merge(existingCache, initialState, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,

        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });

    // Restore the cache with the merged data
    _apolloClientOffers.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClientOffers;
  // Create the Apollo Client once in the client
  if (!apolloClientOffers) apolloClientOffers = _apolloClientOffers;

  return _apolloClientOffers;
}

export function addApolloState(client, pageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

// export function useApollo(pageProps) {
//   const state = pageProps[APOLLO_STATE_PROP_NAME];
//   const store = useMemo(() => initializeApollo(state), [state]);
//   return store;
// }

export function useApollo_offer(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo_offer(state), [state]);
  return store;
}
