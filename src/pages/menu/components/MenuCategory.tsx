import React from 'react';
import styled from 'styled-components/macro';
import { MenuItem, MenuItemProps } from './MenuItem';
import { menuIds } from '../../../data/menu';

interface MenuCategoryProps {
  categoryName: string;
  children?: never;
  menuItems: MenuItemProps[];
  menuId: menuIds;
}

/**
 * @description render a container with heading for many MenuItem
 * @param categoryName the header of this category
 * @param menuItems an array of MenuItem
 * @param menuId the id that matches with links from the Landing PAge
 */
export const MenuCategory: React.FC<MenuCategoryProps> = ({
  categoryName,
  menuItems,
  menuId,
}) => {
  return (
    <Container>
      <Header id={menuId}>{categoryName}</Header>

      <MenuItems>
        {menuItems.map((menuItem, index) => (
          <MenuItem key={index} {...menuItem} />
        ))}
      </MenuItems>
    </Container>
  );
};

interface ContainerProps {}
const Container = styled.div<ContainerProps>`
  width: 80%;
  margin: 3rem auto;
`;

const Header = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-size: 4rem;
  margin-bottom: 2rem;

  color: ${(p) => p.theme.primary};
`;
const MenuItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 5rem;
`;
