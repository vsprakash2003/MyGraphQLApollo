import React from 'react';
import { apolloClient } from './apolloClient/apolloClient';
import { Loading } from "bonsai-components-react";
import { get } from 'lodash';

export const randomKeyGenerator = () => {
    const date = new Date();
    return date.getTime() * Math.random(1, 1000);
  };


export const readFromApolloStore = (query, variables) => {
  try {
    return apolloClient.readQuery({ query: query, variables: variables });
  } catch (er) {
    return null;
  }
};

export const updateApolloStore = (query, variables, data) => {
  apolloClient.writeQuery({
    query: query, variables: variables,
    data: data,
  });
};

export const showLoader = () => {
  apolloClient.writeData({
    data: {
      loader: {
        show: true,
        __typename: 'loader',
      },
    },
  });
};

export const hideLoader = () => {
  apolloClient.writeData({
    data: {
      loader: {
        show: false,
        __typename: 'loader',
      },
    },
  });
};

export const loaderComponent = () => {
  return (<Loading small={true} withOverlay={true} />);
};

export const showToast = (message) => {
  const kind = get(message, 'kind', 'success');
  const title = get(message, 'title', '');
  const subtitle = get(message, 'subtitle', '');
  const caption = get(message, 'caption', '');
  const show = get(message, 'show', false);
  const id = randomKeyGenerator();
  apolloClient.writeData({
    data: {
      flashMessage: {
        id: id,
        show: show,
        renderMode: 'toast',
        title: title,
        subtitle: subtitle,
        caption: caption,
        kind: kind,
        timeout: 3000,
        __typename: 'flashMessage',
      },
    },
  });
};

export const handleGraphQlError = (errorResponse) => {
  const error = { error: '' };
  if (errorResponse.graphQLErrors && errorResponse.graphQLErrors.length > 0) {
    error.error = errorResponse.graphQLErrors[0].message;
  } else if (errorResponse.message) {
    error.error = errorResponse.message;
  }
  return error;
};

export const showErrorPopup = (text) => {
  apolloClient.writeData({
    data: {
      errorHandler: {
        show: true,
        errorText: text,
        __typename: 'errorHandler',
      },
    },
  });
};
