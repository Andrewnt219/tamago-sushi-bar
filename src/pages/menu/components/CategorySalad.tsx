import React from 'react';
import { MenuCategory } from './MenuCategory';
import { menus } from '../../../data/menu';

interface CategorySaladProps {}

/**
 * @description renders the Appetizers and Salads section menu
 */

export const CategorySalad: React.FC<CategorySaladProps> = () => {
  return (
    <MenuCategory
      menuId="appetizersAndSalads"
      categoryName="Appetizers & Salad"
      menuItems={menus.salads.concat(menus.appetizers)}
    />
  );
};
