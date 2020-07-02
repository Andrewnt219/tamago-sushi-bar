import React, { ReactElement } from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from '../../features/userSlice';

type Props = RouteProps & {
  children: ReactElement;
};

function ProtectedRoute({ children, ...routeProps }: Props): ReactElement {
  const { email } = useSelector(userSelector);
  const isAuthenticated = !!email;

  return (
    <Route
      {...routeProps}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
}

export default ProtectedRoute;
