import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './Dashboard';
import Login from './Login';
import Products from '../containers/ProductsContainer';

const Routes = () => (
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/login" component={Login} />
    <Route path="/products" component={Products} />
    <Route path="/" component={Dashboard} />
  </Switch>
);

export default Routes;
