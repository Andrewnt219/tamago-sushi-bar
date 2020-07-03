import { Cart } from './cartSliceTypes';
import { UiState } from '../uiTypes';

export type Order = Omit<Cart, 'id' | 'userEmail'> & {
  id: string;
  address: string;
  createdDate: string;
};

export type OrderState = UiState & {
  orders: Record<string, Order> | null;
};

export type DatabaseOrder = Order;
