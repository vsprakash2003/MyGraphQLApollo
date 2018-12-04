// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'babel-polyfill';
// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';

// import { unregister } from './registerServiceWorker';
// import App from './App';
// import configureStore from './store/configureStore';
// import history from './history';


// const store = configureStore(history);


// const render = Component => {
//   ReactDOM.render(
//     <Provider store={store}>
//       <ConnectedRouter history={history}>
//         <Component />
//       </ConnectedRouter>
//     </Provider>,
//     document.getElementById('root')
//   );
// };

// render(App);

// // In development, hot module replacement (HMR) updates the application
// // when changes are made, without having to refresh.
// /* eslint-disable no-undef */
// if (module.hot) {
//   module.hot.accept('./App', () => {
//     const NextApp = require('./App').default;
//     render(NextApp);
//   });
// }
// /* eslint-enable no-undef */

// unregister();


import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker'

import './assets/stylesheets/index.scss';

const render = Component => {
      ReactDOM.render(
        <BrowserRouter>
          <Component />
        </BrowserRouter>,
        document.getElementById('root')
      ); 
};

render(App);
serviceWorker.unregister()