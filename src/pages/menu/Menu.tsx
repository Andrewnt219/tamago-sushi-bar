import React from 'react';
import {
  CategoryDrink,
  CategorySalad,
  CategoryRice,
  CategorySushi,
} from './components';

interface MenuProps {}

/**
 * @description renders the Menu Page for the app
 */
export const Menu: React.FC<MenuProps> = () => {
  return (
    <>
      <CategorySalad />
      <CategorySushi />
      <CategoryRice />
      <CategoryDrink />
    </>
  );
};
