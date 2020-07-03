import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import Order from './Order';
import { useSelector } from 'react-redux';
import { orderSelector } from '../../../features/orderSlice';

type Props = {};

function Orders(props: Props): ReactElement {
  const { orders } = useSelector(orderSelector);

  return (
    <Container>
      {orders &&
        Object.values(orders).map(({ id, createdDate, total }) => (
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
