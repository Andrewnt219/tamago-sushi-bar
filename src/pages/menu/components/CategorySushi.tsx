import React from 'react';
import { MenuCategory } from './MenuCategory';
import { useApiGet } from '../../../hook/useApiGet';
import { firebaseApi } from '../../../apis/firebase';
import { MenuItemProps } from './MenuItem';

interface CategorySushiProps {}

/**
 * @description renders the Sushi and Sashimi section menu
 */
export const CategorySushi: React.FC<CategorySushiProps> = () => {
  const [sashimi, sashimiIsLoading] = useApiGet<MenuItemProps[]>(
    firebaseApi,
    '/menus/sashimi.json'
  );

  return (
    <MenuCategory
      menuId="sushiAndSashimi"
      categoryName="Sushi & Sashimi"
      menuItems={sashimi}
      isFetching={sashimiIsLoading}
    />
  );
};
