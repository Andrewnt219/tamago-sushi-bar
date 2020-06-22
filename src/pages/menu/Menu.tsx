import React from 'react';
import {
  CategoryDrink,
  CategorySalad,
  CategoryRice,
  CategorySushi,
} from './components';

interface MenuProps {}
export const Menu: React.FC<MenuProps> = () => {
  return (
    <>
      <CategoryDrink />
      <CategorySushi />
      <CategoryRice />
      <CategorySalad />
    </>
  );
};
