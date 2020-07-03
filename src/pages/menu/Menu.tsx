import React from 'react';
import {
  CategoryDrink,
  CategorySalad,
  CategoryRice,
  CategorySushi,
} from './components';

import { useTitle, useScroll } from '../../hook';

interface MenuProps {}

/**
 * @description renders the Menu Page for the app
 */
const Menu: React.FC<MenuProps> = () => {
  useScroll();
  useTitle('Menu');

  return (
    <>
      <CategorySalad />
      <CategorySushi />
      <CategoryRice />
      <CategoryDrink />
    </>
  );
};

export default Menu;
