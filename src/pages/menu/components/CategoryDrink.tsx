import React from 'react';
import { MenuCategory } from './MenuCategory';
import { menus } from '../../../data/menu';

interface CategoryDrinkProps {}

/**
 * @description renders the Desserts and Drinks section menu
 */
export const CategoryDrink: React.FC<CategoryDrinkProps> = () => {
  return (
    <MenuCategory
      menuId="dessertsAndDrinks"
      categoryName="Desserts & Drinks"
      menuItems={menus.drinks.concat(menus.desserts)}
    />
  );
};
