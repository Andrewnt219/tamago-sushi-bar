import React from 'react';

import styled from 'styled-components/macro';
import { Orders } from './components/Orders';
import { UserProfile } from './components/UserProfile';

interface UserDashboardProps {}

const UserDashboard: React.FC<UserDashboardProps> = () => {
  return (
    <Container>
      <UserProfile />
      <Header>Past Orders (20)</Header>
      <Orders />
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
