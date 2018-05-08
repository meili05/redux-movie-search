/* global window, document */

// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import MovieListApp from './components/MovieListApp';
import reducer from './reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const middleware = applyMiddleware(promise(), thunk);

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__(),
  middleware
);


ReactDOM.render(
	<Provider store={store}>
	  <MovieListApp />
	</Provider>,
  document.getElementById('root')
);
