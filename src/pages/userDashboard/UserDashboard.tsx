import React, { useEffect } from 'react';

import styled from 'styled-components/macro';
import { Orders } from './components/Orders';
import { UserProfile } from './components/UserProfile';
import { useDispatch, useSelector } from 'react-redux';
import { logout, userSelector } from '../../features/userSlice';
import { initCart } from '../../features/cartSlice';
import { ordersSelector, fetchOrders } from '../../features/orderSlice';
import { Order as OrderObject } from '../../features/sliceTypes';
import { useTitle, useScrollToTop } from '../../hook';
import { formatDistanceToNowStrict } from 'date-fns';
import { BaseButton } from '../../components/ui/BaseButton';

interface UserDashboardProps {}

const UserDashboard: React.FC<UserDashboardProps> = () => {
  useTitle('Your Profile');
  useScrollToTop();

  const dispatch = useDispatch();
  const { orders } = useSelector(ordersSelector);
  const { email, preferredName, joinDate } = useSelector(userSelector);
  const ordersArray: OrderObject[] = orders ? Object.values(orders) : [];

  useEffect(() => {
    if (email) {
      dispatch(fetchOrders({ userEmail: email }));
    }
  }, [dispatch, email]);

  const onLogoutButtonClicked = () => {
    dispatch(logout());
    dispatch(initCart());
  };

  const calcTotalTip = (orders: OrderObject[]) => {
    return orders.reduce((acc, order) => acc + order.tip, 0);
  };

  return (
    <Container>
      <UserProfile
        totalOrders={ordersArray.length}
        totalTip={calcTotalTip(ordersArray)}
        email={email}
        fullName={preferredName}
        loyaltyYear={parseInt(
          formatDistanceToNowStrict(new Date(joinDate), {
            unit: 'year',
          })
        )}
      />
      <LogoutButton text onClick={onLogoutButtonClicked}>
        Logout
      </LogoutButton>
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

type LogoutButtonProps = {};
const LogoutButton = styled(BaseButton)<LogoutButtonProps>`
  justify-self: flex-end;
`;

export default UserDashboard;
