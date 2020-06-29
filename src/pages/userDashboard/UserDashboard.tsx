import React from 'react';

import styled from 'styled-components/macro';
import { Orders } from './components/Orders';

interface UserDashboardProps {}

const UserDashboard: React.FC<UserDashboardProps> = () => {
  return (
    <Container>
      <Header>Past Orders (20)</Header>

      <Orders />
    </Container>
  );
};

type ContainerProps = {};
const Container = styled.section<ContainerProps>``;

type HeaderProps = {};
const Header = styled.h2<HeaderProps>``;

export default UserDashboard;
