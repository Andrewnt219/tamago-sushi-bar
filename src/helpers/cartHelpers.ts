import {
  CartItem,
  Cart,
  CartState,
  CartItems,
} from '../features/cartSliceType';
import _ from 'lodash';

/* ------------------------------ CART HELPERS ------------------------------ */
export const sumOfCartItems = (items: CartItems): number => {
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

/* mutating ON PURPOSE, utilize Immer in RTK */
export const calculateCartOnSuccess = (cartState: CartState): void => {
  cartState.isLoading = false;
  cartState.error = null;
  cartState.subtotal = sumOfCartItems(cartState.items);

  cartState.shipping = cartState.subtotal > 35 ? 0 : 5;

  cartState.total = cartState.shipping + cartState.subtotal + cartState.tip;
};

export const getCartItemIdByKey = (
  cart: Cart,
  key: keyof CartItem,
  value: string
): string | undefined => {
  return _.findKey(cart.items, (obj: CartItem) => {
    return obj[key] === value;
  });
};

export const getCartItemById = (cart: Cart, itemId: string): CartItem => {
  return cart.items[itemId];
};
