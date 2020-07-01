export type CartItem = {
  id: string;
  sku: string;
  name: string;
  quantity: number;
  price: number;
};

export type Cart = {
  id: string | null;
  subtotal: number;
  total: number;
  userEmail: string;
  tip: number;
  shipping: number;
  items: Record<
    string,
    CartItem & { isLoading: boolean; error: string | null }
  >;
};

export type DatabaseCart = Omit<Cart, 'subtotal' | 'total'>;

export type CartState = Cart & {
  isLoading: boolean;
  error: string | null;
};

export type UpdateCartItemPayload = {
  itemId: string;
  amount: number;
};
