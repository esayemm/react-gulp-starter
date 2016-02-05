'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Link, IndexRedirect, Redirect } from 'react-router';
import { store, history } from 'root/redux/store.js';
import config from 'config';

// Containers
import StyleGuideContainer from 'containers/style-guide/style-guide.container.js'

function debugRoutes() {
  if (!config.DEBUG) return;
  return (
    <Route path='/style_guide'
      component={ StyleGuideContainer }
    />
  );
}

function initRouter() {
  return (
    <Provider store={store}>
      <Router history={history}>
        { debugRoutes() }
      </Router>
    </Provider>
  );
}

export default initRouter();
