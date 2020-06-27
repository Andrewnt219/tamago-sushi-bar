import React from 'react';
import { MenuCategory } from './MenuCategory';
import { menus } from '../../../data/menu';

interface CategoryRiceProps {}

/**
 * @description renders the Rice and Noodles menu
 */

export const CategoryRice: React.FC<CategoryRiceProps> = () => {
  return (
    <MenuCategory
      menuId="riceAndNoodles"
      categoryName="Rice & Noodles"
      menuItems={menus.rice.concat(menus.noodles)}
    />
  );
};
