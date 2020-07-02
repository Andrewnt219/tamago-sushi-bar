import React from 'react';
import styled from 'styled-components/macro';
import { DesktopNavigationItem } from './DesktopNavigationItem';

interface DesktopNavigationItemsProps {}
export const DesktopNavigationItems: React.FC<DesktopNavigationItemsProps> = () => {
  return (
    <StyledNavigationItems>
      <DesktopNavigationItem to="/" exact>
        Home
      </DesktopNavigationItem>

      <DesktopNavigationItem to="/menu">Menu</DesktopNavigationItem>

      <DesktopNavigationItem to="/reservation">
        Reservation
      </DesktopNavigationItem>

      <DesktopNavigationItem to="/cart">Cart</DesktopNavigationItem>

      <DesktopNavigationItem to="/me">Dashboard</DesktopNavigationItem>
    </StyledNavigationItems>
  );
};

interface StyledNavigationItemsProps {}
const StyledNavigationItems = styled.ul<StyledNavigationItemsProps>`
  position: relative;

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 60%;
  height: 100%;
`;
