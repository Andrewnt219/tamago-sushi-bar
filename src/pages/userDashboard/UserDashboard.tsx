import React from 'react';

import styled from 'styled-components/macro';
import { Orders } from './components/Orders';
import { UserProfile } from './components/UserProfile';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/userSlice';
import { initCart } from '../../features/cartSlice';
import { ordersSelector } from '../../features/orderSlice';
import { Order as OrderObject } from '../../features/sliceTypes';
import { useTitle, useScrollToTop } from '../../hook';

interface UserDashboardProps {}

const UserDashboard: React.FC<UserDashboardProps> = () => {
  useTitle('Your Profile');
  useScrollToTop();

  const dispatch = useDispatch();
  const { orders } = useSelector(ordersSelector);
  const ordersArray: OrderObject[] = orders ? Object.values(orders) : [];

  const onLogoutButtonClicked = () => {
    dispatch(logout());
    dispatch(initCart());
  };

  return (
    <Container>
      <UserProfile />
      <button onClick={onLogoutButtonClicked}>Logout</button>
      <Header>
        Past Orders (
        {ordersArray.length < 10
          ? '0' + ordersArray.length
          : ordersArray.length}
        )
      </Header>
      <Orders orders={ordersArray} />
    </Container>
  );
};

type ContainerProps = {};
const Container = styled.section<ContainerProps>`
  display: grid;
  row-gap: 2rem;
  margin: 2rem;
`;

type HeaderProps = {};
const Header = styled.h2<HeaderProps>``;

export default UserDashboard;
