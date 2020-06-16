import React from 'react';
import styled from 'styled-components/macro';
import { NavigationItem } from './DesktopNavigationItem';
import {
  MdHome,
  MdRestaurantMenu,
  MdBook,
  MdPhone,
  MdInfo,
} from 'react-icons/md';

interface DesktopNavigationItemsProps {}
export const DesktopNavigationItems: React.FC<DesktopNavigationItemsProps> = () => {
  return (
    <StyledNavigationItems>
      <NavigationItem to="/" exact Icon={MdHome}>
        Home
      </NavigationItem>
      <NavigationItem to="/menu" Icon={MdRestaurantMenu}>
        Menu
      </NavigationItem>
      <NavigationItem to="/reservation" Icon={MdBook}>
        Reservation
      </NavigationItem>
      <NavigationItem to="/contact" Icon={MdPhone}>
        Contact
      </NavigationItem>
      <NavigationItem to="/about" Icon={MdInfo}>
        About
      </NavigationItem>
    </StyledNavigationItems>
  );
};

interface StyledNavigationItemsProps {}
const StyledNavigationItems = styled.ul<StyledNavigationItemsProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;
