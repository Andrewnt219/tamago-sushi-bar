import React from 'react';
import { MenuCategory } from './MenuCategory';
import { menus } from '../../../data/menu';

interface CategorySushiProps {}
export const CategorySushi: React.FC<CategorySushiProps> = () => {
  return (
    <MenuCategory
      categoryName="Sushi &amp; Sashimi"
      menuItems={menus.sashimi}
    />
  );
};
