import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducers from './reducers';

const logger = createLogger();
const store = createStore(rootReducers, applyMiddleware(thunk, logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
