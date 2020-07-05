import { Cart } from './cartSliceTypes';
import { UiState } from '../uiTypes';

export type DatabaseOrder = Omit<Cart, 'id' | 'userEmail'> & {
  address: string;
  createdDate: string;
};

export type OrderState = UiState & {
  orders: Record<string, Order> | null;
  displayedOrder: Order | null;
  orderIsCreated: boolean | null;
};

export type Order = DatabaseOrder & { id: string };
