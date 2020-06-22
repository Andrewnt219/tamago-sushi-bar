import React from 'react';
import { MenuCategory } from './MenuCategory';
import { menus } from '../../../data/menu';

interface CategorySaladProps {}
export const CategorySalad: React.FC<CategorySaladProps> = () => {
  return (
    <MenuCategory
      categoryName="Appetizers &amp; Salad"
      menuItems={menus.salads.concat(menus.appetizers)}
    />
  );
};
