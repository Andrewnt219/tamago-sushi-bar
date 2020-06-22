import React from 'react';
import { CategoryDrink } from './components/CategoryDrink';
import { CategorySushi } from './components/CategorySushi';
import { CategoryRice } from './components/CategoryRice';
import { CategorySalad } from './components/CategorySalad';

interface MenuProps {}

export const Menu: React.FC<MenuProps> = () => {
  return (
    <div>
      <CategoryDrink />
      <CategorySushi />
      <CategoryRice />
      <CategorySalad />
    </div>
  );
};
