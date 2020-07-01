import { MenuItemProps } from '../pages/menu/components/MenuItem';

type menuNames =
  | 'desserts'
  | 'drinks'
  | 'sashimi'
  | 'rice'
  | 'noodles'
  | 'salads'
  | 'appetizers';

type Menus = {
  [menuName in menuNames]: MenuItemProps[];
};

export type menuIds =
  | 'appetizersAndSalads'
  | 'riceAndNoodles'
  | 'sushiAndSashimi'
  | 'dessertsAndDrinks';
