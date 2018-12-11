export const clientState = {
    defaults: {
      loader: {
        __typename: 'loader',
        show: false,
      },
      flashMessage: {
        __typename: 'flashMessage',
        id: 1,
        timeout: 3000,
        show: false,
        renderMode: 'toast',
        title: '',
        subtitle: '',
        caption: '',
        kind: 'success',
      },
      errorHandler: {
        __typename: 'errorHandler',
        errorText: '',
        show: false,
      },
    },
  };