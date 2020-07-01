import { CartItem, Cart, CartState } from '../features/cartSliceType';
import _ from 'lodash';

/* ------------------------------ CART HELPERS ------------------------------ */
export const sumOfCartItems = (items: Record<string, CartItem>): number => {
  return Object.values(items).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
};

export const calculateCart = (cart: Cart): Cart => {
  const calculatedCart = { ...cart };
  calculatedCart.subtotal = sumOfCartItems(calculatedCart.items);
  calculatedCart.total =
    calculatedCart.shipping + calculatedCart.subtotal + calculatedCart.tip;

  return calculatedCart;
};

export const calculateCartOnSuccess = (cartState: CartState): CartState => {
  return { ...calculateCart(cartState), isLoading: false, error: null };
};

export const searchItemInCart = (
  cart: Cart,
  key: keyof CartItem,
  value: string
): string | undefined => {
  return _.findKey(cart.items, (obj: CartItem) => {
    return obj[key] === value;
  });
};
