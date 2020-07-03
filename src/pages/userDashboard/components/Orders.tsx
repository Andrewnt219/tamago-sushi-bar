import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import Order from './Order';
import { Order as OrderObject } from '../../../features/sliceTypes';

type Props = {
  orders: OrderObject[];
};

function Orders({ orders }: Props): ReactElement {
  return (
    <Container>
      {orders.map((order) => (
        <Order
          key={order.id}
          order={order}
          type={Math.round(Math.random()) === 1 ? 'inStore' : 'online'}
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
