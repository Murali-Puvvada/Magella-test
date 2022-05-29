import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import history from 'Services/history';

import AppComponent from './app';

import './styles/normalize.css';
import './styles/variables.css';
import './styles/base.css';

const wrapApp = () => (
  <Router history={history}>
    <AppComponent />
  </Router>
);

ReactDOM.render(wrapApp(AppComponent), document.getElementById('root'));
