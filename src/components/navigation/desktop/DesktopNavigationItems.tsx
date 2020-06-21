import React from 'react';
import styled from 'styled-components/macro';
import { DesktopNavigationItem } from './DesktopNavigationItem';
import { BaseLogo } from '../../ui/BaseLogo';
import { appBarIsFixedSelector } from '../../../features/uiSlice';
import { useSelector } from 'react-redux';

interface DesktopNavigationItemsProps {}
export const DesktopNavigationItems: React.FC<DesktopNavigationItemsProps> = () => {
  const appbarIsFixed = useSelector(appBarIsFixedSelector);

  return (
    <StyledNavigationItems>
      {!appbarIsFixed && <BaseLogo />}

      <DesktopNavigationItem to="/" exact>
        Home
      </DesktopNavigationItem>

      <DesktopNavigationItem to="/menu">Menu</DesktopNavigationItem>

      <DesktopNavigationItem to="/reservation">
        Reservation
      </DesktopNavigationItem>

      <DesktopNavigationItem to="/order">Order</DesktopNavigationItem>
    </StyledNavigationItems>
  );
};

interface StyledNavigationItemsProps {}
const StyledNavigationItems = styled.ul<StyledNavigationItemsProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 100%;
`;
