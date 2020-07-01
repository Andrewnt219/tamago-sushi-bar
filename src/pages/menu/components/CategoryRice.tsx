import React from 'react';
import { MenuCategory } from './MenuCategory';
import _ from 'lodash';
import { useApiGet } from '../../../hook/useApiGet';
import { firebaseApi } from '../../../apis/firebase';
import { MenuItemProps } from './MenuItem';

interface CategoryRiceProps {}

/**
 * @description renders the Rice and Noodles menu
 */

export const CategoryRice: React.FC<CategoryRiceProps> = () => {
  const [noodles, noodlesIsLoading] = useApiGet<MenuItemProps[]>(
    firebaseApi,
    '/menus/noodles.json'
  );
  const [rice, riceIsLoading] = useApiGet<MenuItemProps[]>(
    firebaseApi,
    '/menus/rice.json'
  );

  return (
    <MenuCategory
      menuId="riceAndNoodles"
      categoryName="Rice & Noodles"
      menuItems={_.concat(noodles, rice)}
      isFetching={noodlesIsLoading || riceIsLoading}
    />
  );
};
