import React, { ReactElement } from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';

type Props = RouteProps & {
  children: ReactElement;
};
const isAuthenticated = true;
function ProtectedRoute({ children, ...routeProps }: Props): ReactElement {
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
