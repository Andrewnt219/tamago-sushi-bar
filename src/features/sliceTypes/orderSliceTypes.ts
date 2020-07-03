import { CartState } from './cartSliceTypes';

export type OrderState = Omit<CartState, 'id'> & {
  address: string;
};
