import React from 'react';
import styled from 'styled-components/macro';
import { Logo } from '../ui/Logo';
import { NavigationItems } from './NavigationItems';
import { NavigationItem } from './NavigationItem';
import {
  MdHome,
  MdRestaurantMenu,
  MdBook,
  MdPhone,
  MdInfo,
} from 'react-icons/md';

interface AppBarProps {
  height?: string;
}

interface FixedBarProps {
  height?: string;
}

export const AppBar: React.FC<AppBarProps> = ({ height }) => {
  return (
    <FixedBar height={height} id="AppBar">
      <Logo />
      <NavigationItems>
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
      </NavigationItems>
    </FixedBar>
  );
};

const FixedBar = styled.nav<FixedBarProps>`
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 10vw;

  width: 100vw;
  height: ${(p) => p.height};

  font-size: calc(${(p) => p.height} / 8);

  display: flex;
`;
