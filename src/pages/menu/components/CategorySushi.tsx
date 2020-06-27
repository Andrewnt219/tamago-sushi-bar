import React from 'react';
import { MenuCategory } from './MenuCategory';
import { menus } from '../../../data/menu';

interface CategorySushiProps {}

/**
 * @description renders the Sushi and Sashimi section menu
 */
export const CategorySushi: React.FC<CategorySushiProps> = () => {
  return (
    <MenuCategory
      menuId="sushiAndSashimi"
      categoryName="Sushi & Sashimi"
      menuItems={menus.sashimi}
    />
  );
};
