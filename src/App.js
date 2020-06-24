import React, { useContext } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import { UserProvider, UserContext } from './contexts/User'

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

import Home from './components/pages/Home/Home'
import Login from './components/pages/Login/Login'
import Signup from './components/pages/Signup/Signup'
import Navbar from './components/Navbar/Navbar'
import { PostProvider } from './contexts/Post';

function AppWrapper() {
  return (
    <PostProvider>
      <UserProvider>
        <App />
      </UserProvider >
    </PostProvider >
  )
}

function App() {
  const { isLogined } = useContext(UserContext)

  return (
    <Router >
      <div className="App">
        {isLogined && <Navbar />}
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <PublicRoute path='/login' component={Login} />
          <PublicRoute path='/signup' component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppWrapper;
