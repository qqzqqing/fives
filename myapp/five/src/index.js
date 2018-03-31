import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from '@/components/App';

import Detail from '@/components/Detail';
import Register from '@/components/Register';
import Login from '@/components/Login';

import registerServiceWorker from '@/registerServiceWorker';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
ReactDOM.render(
  <Router>
    <Switch>
    <Route path = "/register" component = { Register } />
    <Route path = "/login" component = { Login } />
      <Route path = "/detail/:goodsID" component = { Detail } />
      <Route path = "/" component = { App } />
    </Switch>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
