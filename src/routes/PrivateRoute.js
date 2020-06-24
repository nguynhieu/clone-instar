import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom';

import { UserContext } from '../contexts/User';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLogined } = useContext(UserContext);

  if (isLogined === false) {
    return <Redirect to='/login' />
  }

  return (
    <Route
      {...rest}
      render={props => {
        return <Component {...props} />
      }}
    />
  )

}

export default PrivateRoute;