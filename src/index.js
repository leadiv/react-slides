import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const store = {};

ReactDOM.render(<App {...store} />, document.getElementById('root'));
