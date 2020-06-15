import React from 'react';
import styled from 'styled-components/macro';
import { Logo } from '../ui/Logo';
import { NavigationItems } from './NavigationItems';
import { NavigationItem } from './NavigationItem';

interface AppBarProps {
  height: string;
}

interface FixedBarProps {
  height: string;
}

export const AppBar: React.FC<AppBarProps> = ({ height }) => {
  return (
    <FixedBar height={height} id="AppBar">
      <Logo />
      <NavigationItems>
        <NavigationItem to="/" exact>
          Home
        </NavigationItem>
        <NavigationItem to="/about">About</NavigationItem>
        <NavigationItem to="/contact">Contact</NavigationItem>
        <NavigationItem to="/menu">Menu</NavigationItem>
        <NavigationItem to="/reservation">Reservation</NavigationItem>
      </NavigationItems>
    </FixedBar>
  );
};

const FixedBar = styled.nav<FixedBarProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${(p) => p.height};

  font-size: calc(${(p) => p.height} / 8);

  display: flex;
`;
