import React from 'react';
import { MenuCategory } from './MenuCategory';
import { firebaseApi } from '../../../apis/firebase';
import _ from 'lodash';
import { MenuItemProps } from './MenuItem';
import { useApiGet } from '../../../hook/useApiGet';
interface CategoryDrinkProps {}

/**
 * @description renders the Desserts and Drinks section menu
 */
export const CategoryDrink: React.FC<CategoryDrinkProps> = () => {
  const [drinks, drinksIsLoading] = useApiGet<MenuItemProps[]>(
    firebaseApi,
    '/menus/drinks.json'
  );
  const [desserts, dessertsIsLoading] = useApiGet<MenuItemProps[]>(
    firebaseApi,
    '/menus/desserts.json'
  );

  return (
    drinks &&
    desserts && (
      <MenuCategory
        menuId="dessertsAndDrinks"
        categoryName="Desserts & Drinks"
        menuItems={_.concat(drinks, desserts)}
        isFetching={drinksIsLoading || dessertsIsLoading}
      />
    )
  );
};
