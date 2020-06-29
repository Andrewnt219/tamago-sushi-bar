import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import { useLocation, RouteComponentProps, useHistory } from 'react-router-dom';

type Props = {};

function Login(props: Props): ReactElement {
  // note the undefined
  const { state } = useLocation<
    { from?: RouteComponentProps['location'] } | undefined
  >();
  const history = useHistory();
  let pathname = state?.from?.pathname ?? '/';

  return (
    <Container>
      <button onClick={() => history.push(pathname)}>Login</button>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

export default Login;
