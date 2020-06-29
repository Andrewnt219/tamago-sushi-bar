import React from 'react';
import Order from './components/Order';
import styled from 'styled-components/macro';

interface OrdersPageProps {}

const OrdersPage: React.FC<OrdersPageProps> = () => {
  return (
    <Container>
      <Header>Past Orders (20)</Header>

      <Orders>
        <Order orderId="1" type="inStore" price={2.5} date="July 2nd, 2020" />
        <Order orderId="2" type="inStore" price={2.5} date="July 2nd, 2020" />
        <Order orderId="3" type="online" price={10.21} date="July 12th, 2020" />
        <Order
          orderId="4"
          type="inStore"
          price={99.121}
          date="July 2nd, 2020"
        />
        <Order orderId="5" type="online" price={0.2} date="July 31st, 2020" />
      </Orders>
    </Container>
  );
};

type ContainerProps = {};
const Container = styled.section<ContainerProps>``;

type HeaderProps = {};
const Header = styled.h2<HeaderProps>``;

type OrdersProps = {};
const Orders = styled.div<OrdersProps>`
  width: 90%;
  margin: 0 auto;
  display: grid;
  row-gap: 2rem;
`;

export default OrdersPage;
