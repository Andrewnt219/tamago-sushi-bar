import { Cart } from './cartSliceTypes';
import { UiState } from '../uiTypes';

export type Order = Omit<Cart, 'id' | 'userEmail'> & {
  address: string;
};

export type OrderState = UiState & {
  orders: Record<string, Order>;
};
