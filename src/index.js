import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';

import search  from './reducers/Reducer';
import rootSaga from './sagas/Saga';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  search,
  compose( 
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension({maxAge: 500}) : f => f
  )
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

