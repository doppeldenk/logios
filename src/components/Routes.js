import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './Dashboard';
import Users from '../containers/UsersContainer';

const Routes = () => (
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/users" component={Users} />
    <Route path="/" component={Dashboard} />
  </Switch>
);

export default Routes;
