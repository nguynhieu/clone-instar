import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

import Login from './components/pages/Login/Login'

function App() {
  return (
    <Router >
      <div className="App">
        <Switch>
          <PublicRoute exact path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
