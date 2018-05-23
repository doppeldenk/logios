import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../Dashboard';
import Login from '../Login';

const App = () => (
  <div className="container-fluid">
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={Dashboard} />
    </Switch>
  </div>
);

export default App;
