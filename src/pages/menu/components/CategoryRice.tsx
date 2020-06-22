import React from 'react';
import { MenuCategory } from './MenuCategory';
import { menus } from '../../../data/menu';

interface CategoryRiceProps {}
export const CategoryRice: React.FC<CategoryRiceProps> = () => {
  return (
    <MenuCategory
      menuId="riceAndNoodles"
      categoryName="Rice &amp; Noodles"
      menuItems={menus.rice.concat(menus.noodles)}
    />
  );
};
