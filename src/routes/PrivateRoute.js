import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Redirect to="/login" />
  }

  return <Route />
}

export default PrivateRoute;