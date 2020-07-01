import React from 'react';
import { MenuCategory } from './MenuCategory';
import _ from 'lodash';
import { useApiGet } from '../../../hook/useApiGet';
import { firebaseApi } from '../../../apis/firebase';
import { MenuItemProps } from './MenuItem';

interface CategorySaladProps {}

/**
 * @description renders the Appetizers and Salads section menu
 */

export const CategorySalad: React.FC<CategorySaladProps> = () => {
  const [appetizers, appetizersIsLoading] = useApiGet<MenuItemProps[]>(
    firebaseApi,
    '/menus/appetizers.json'
  );
  const [salads, saladsIsLoading] = useApiGet<MenuItemProps[]>(
    firebaseApi,
    '/menus/salads.json'
  );

  console.log(appetizersIsLoading, saladsIsLoading);

  return (
    <MenuCategory
      menuId="appetizersAndSalads"
      categoryName="Appetizers & Salad"
      menuItems={_.concat(appetizers, salads)}
      isFetching={appetizersIsLoading || saladsIsLoading}
    />
  );
};
