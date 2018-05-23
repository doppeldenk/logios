import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './Navbar';
import Routes from './Routes';

const App = () => (
  <BrowserRouter>
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <Navbar />
        </div>
        <div className="col">
          <Routes />
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
