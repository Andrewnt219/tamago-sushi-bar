import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import Order from './Order';

type Props = {};

function Orders(props: Props): ReactElement {
  return (
    <Container>
      <Order orderId="1" type="inStore" price={2.5} date="July 2nd, 2020" />
      <Order orderId="2" type="inStore" price={2.5} date="July 2nd, 2020" />
      <Order orderId="3" type="online" price={10.21} date="July 12th, 2020" />
      <Order orderId="4" type="inStore" price={99.121} date="July 2nd, 2020" />
      <Order orderId="5" type="online" price={0.2} date="July 31st, 2020" />
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  width: 90%;
  margin: 0 auto;
  display: grid;
  row-gap: 2rem;
`;

export { Orders };
