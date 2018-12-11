import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, concat } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { withClientState } from 'apollo-link-state';
import {API_URL} from '../../config/apiConfig';
import { clientState } from './../../config/clientState';
import { showErrorPopup } from './../helper';


const clientStateDefaults = withClientState({
    defaults: clientState.defaults,
    resolvers: {},
  });

const httpLink = new HttpLink({uri:`${API_URL}/graphql`})

const logoutLink = onError(({ networkError }) => {
    if (networkError && networkError.statusCode === 401) {
      showErrorPopup('');
    }
  });

const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      },
      onError: ({ networkError, graphQLErrors }) => {
            console.log('graphQLErrors', graphQLErrors)
            console.log('networkError', networkError)
    }
});
    return forward(operation);
  });
  
  const defaultOptions = {
    query: {
      fetchPolicy: 'cache-and-network',
    },
  };
  
  export const apolloClient = new ApolloClient({
    link: concat(authMiddleware, logoutLink.concat(clientStateDefaults.concat(httpLink))),
    cache: new InMemoryCache(),
    connectToDevTools: true, 
    defaultOptions: defaultOptions,
  });
  