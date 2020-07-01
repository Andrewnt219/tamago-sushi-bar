import { UiState } from './uiTypes';

export type CartItem = {
  id: string;
  sku: string;
  name: string;
  quantity: number;
  price: number;
  imgSrc: string;
};
export type CartItemState = CartItem & UiState;

export type CartItems = Record<string, CartItem>;
export type CartItemsState = Record<string, CartItemState>;

export type Cart = {
  id: string | null;
  subtotal: number;
  total: number;
  userEmail: string;
  tip: number;
  shipping: number;
  items: Record<string, CartItemState>;
};

export type DatabaseCart = Omit<Cart, 'subtotal' | 'total'>;

export type CartState = Cart & UiState;

export type IncreaseItemQuantityPayload = {
  itemId: string;
  increaseAmount: number;
};
export type UpdateCartItemPayload = {
  itemId: string;
  newQuantity: number;
};
