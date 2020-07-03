import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import Order from './Order';
import { Order as OrderObject } from '../../../features/sliceTypes';

type Props = {
  orders: OrderObject[];
};

function Orders({ orders }: Props): ReactElement {
  debugger;
  return (
    <Container>
      {orders.map(({ id, createdDate, total }) => (
        <Order
          key={id}
          orderId={id}
          type={Math.round(Math.random()) === 1 ? 'inStore' : 'online'}
          date={createdDate}
          price={total}
        />
      ))}
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  display: grid;
  row-gap: 2rem;
`;

export { Orders };
