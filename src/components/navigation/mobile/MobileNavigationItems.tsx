import React from 'react';
import styled from 'styled-components/macro';
import { MobileNavigationItem } from './MobileNavigationItem';
import {
  MdHome,
  MdRestaurantMenu,
  MdBook,
  MdPhone,
  MdInfo,
} from 'react-icons/md';

interface MobileNavigationItemsProps {}
export const MobileNavigationItems: React.FC<MobileNavigationItemsProps> = () => {
  return (
    <StyledMobileNavigationItems>
      <MobileNavigationItem to="/" exact Icon={MdHome}>
        Home
      </MobileNavigationItem>

      <MobileNavigationItem to="/menu" Icon={MdRestaurantMenu}>
        Menu
      </MobileNavigationItem>

      <MobileNavigationItem to="/reservation" Icon={MdBook}>
        Reservation
      </MobileNavigationItem>

      <MobileNavigationItem to="/contact" Icon={MdPhone}>
        Contact
      </MobileNavigationItem>

      <MobileNavigationItem to="/about" Icon={MdInfo}>
        About
      </MobileNavigationItem>
    </StyledMobileNavigationItems>
  );
};

interface StyledMobileNavigationItemsProps {}
const StyledMobileNavigationItems = styled.ul<StyledMobileNavigationItemsProps>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: flex-start;
  gap: 1rem;

  width: 100%;
  padding: 1rem 1.5rem;
`;
