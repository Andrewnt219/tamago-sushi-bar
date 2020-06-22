import React from 'react';
import { MenuCategory } from './MenuCategory';
import { menus } from '../../../data/menu';

interface CategorySushiProps {}
export const CategorySushi: React.FC<CategorySushiProps> = () => {
  return (
    <MenuCategory
      menuId="sushiAndSashimi"
      categoryName="Sushi &amp; Sashimi"
      menuItems={menus.sashimi}
    />
  );
};
