import React from 'react';
import styled from 'styled-components/macro';
import { MenuItem, MenuItemProps } from './MenuItem';
import { menuIds } from '../../../data/menu';
import Spinner from '../../../components/ui/LoadingScreen/Spinner/Spinner';

interface MenuCategoryProps {
  categoryName: string;
  children?: never;
  menuItems: (MenuItemProps | null)[] | null;
  menuId: menuIds;
  isFetching: boolean;
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
  isFetching,
}) => {
  let renderedMenuItems = (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );

  if (!isFetching) {
    if (!menuItems) {
      renderedMenuItems = (
        <Error>
          Fail to get menu
          <span role="img" aria-label="crying-emoji">
            😢
          </span>
        </Error>
      );
    } else {
      renderedMenuItems = <MenuItems>{renderMenuItems(menuItems)}</MenuItems>;
    }
  }

  return (
    <Container>
      <Header id={menuId}>{categoryName}</Header>
      {renderedMenuItems}
    </Container>
  );
};

function renderMenuItems(menuItems: (MenuItemProps | null)[]) {
  return menuItems.map((menuItem, index) =>
    menuItem ? (
      <MenuItem key={index} {...menuItem} />
    ) : (
      <Error key={index}>
        Fail to get item
        <span role="img" aria-label="crying-emoji">
          😢
        </span>
      </Error>
    )
  );
}

interface ContainerProps {}
const Container = styled.div<ContainerProps>`
  width: 80%;
  margin: 3rem auto;
  /* For intial loading */
  min-height: 30rem;
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

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Error = styled.p``;
