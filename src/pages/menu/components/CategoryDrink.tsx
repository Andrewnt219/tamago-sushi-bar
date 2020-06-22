import React from 'react';
import { MenuCategory } from './MenuCategory';
import { menus } from '../../../data/menu';

interface CategoryDrinkProps {}
export const CategoryDrink: React.FC<CategoryDrinkProps> = () => {
  return (
    <MenuCategory
      menuId="dessertsAndDrinks"
      categoryName="Desserts &amp; Drinks"
      menuItems={menus.drinks.concat(menus.desserts)}
    />
  );
};
