import React from 'react';
import styled from 'styled-components/macro';
import { MenuItem, MenuItemProps } from './MenuItem';

interface MenuCategoryProps {
  categoryName: string;
  children?: never;
  menuItems: MenuItemProps[];
}
export const MenuCategory: React.FC<MenuCategoryProps> = ({
  categoryName,
  menuItems,
}) => {
  return (
    <Container>
      <Header>{categoryName}</Header>

      <MenuItems>
        {menuItems.map((menuItem, index) => (
          <MenuItem key={index} {...menuItem} />
        ))}
      </MenuItems>
    </Container>
  );
};

interface ContainerProps {}
const Container = styled.div<ContainerProps>``;

const Header = styled.h2`
  text-transform: uppercase;
  color: ${(p) => p.theme.primary};
`;
const MenuItems = styled.ul``;
