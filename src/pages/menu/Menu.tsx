import React from 'react';
import {
  CategoryDrink,
  CategorySalad,
  CategoryRice,
  CategorySushi,
} from './components';
import { useScroll } from '../../hook/useScroll';

interface MenuProps {}

/**
 * @description renders the Menu Page for the app
 */
export const Menu: React.FC<MenuProps> = () => {
  useScroll();

  return (
    <>
      <CategorySalad />
      <CategorySushi />
      <CategoryRice />
      <CategoryDrink />
    </>
  );
};
