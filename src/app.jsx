import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch } from 'react-router';
import { Route, Redirect } from 'react-router-dom';

import { SESSION_PAGE_ROUTE } from 'Services/routes';

import SessionPage from 'Views/Session';

// Setting variable for actual page height
// (https://css-tricks.com/the-trick-to-viewport-units-on-mobile/)
const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const App = () => (
  <main>
    <Switch>
      <Route path={`${SESSION_PAGE_ROUTE}/:insuranceId?`} component={SessionPage} />
      <Route exact path="/" render={() => <Redirect to={SESSION_PAGE_ROUTE} />} />
    </Switch>
  </main>
);

export default hot(App);
