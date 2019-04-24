// NOTE: we can store data in browser storage
// example:
  localStorage.setItem('token', 'Json Web Token');
  // now: we can get the token by calling
    localStorage.token // or
    localStorage.getItem('token');


// to make use of this browser feature inside react, in redux action creator run the following
localStorage.setItem('token', response.data.token);

    // example:
    import { AUTH_USER, AUTH_ERROR } from './types';
    import axios from 'axios';

    export const signup = (formValues, callback) => async dispatch => {
      try {
        const response = await axios.post('http://localhost:3010/signup', formValues);
        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token);
        callback();
      } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: 'Email is in use'});
      }
    };

  // and then inside main index, get the token from browser's localStorage
  import React from 'react';
  import ReactDOM from 'react-dom';
  import 'bootstrap/dist/css/bootstrap.css';
  import { createStore, applyMiddleware, compose } from 'redux';
  import { Provider } from 'react-redux';
  import reduxThunk from 'redux-thunk';

  import reducers from './reducers';
  import App from './components/App';

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    // inside the initial state call it
    { auth: { authenticated: localStorage.getItem('token') } },
    composeEnhancers(applyMiddleware(reduxThunk))
  )

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#root')
  );


// and to clear it out, just call localStorage.removeItem('token');
// example:
export const signout = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_USER,
    payload: ''
  }
}
