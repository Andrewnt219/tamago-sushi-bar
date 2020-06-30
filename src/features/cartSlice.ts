import { firebaseApi } from '../apis/firebase';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { checkIfLoading, actionStart } from './loadingSlice';
import { AppThunk, RootState } from '../app/store';
import { asyncDispatchWrapper } from '../helpers/redux-helpers';
import { AxiosResponse } from 'axios';
import { keyObjectToObjectWithKey } from '../helpers/helpers';

export type CartItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

type Cart = {
  id: string | null;
  userEmail: string;
  items: Record<string, CartItem & { isLoading: boolean }>;
  subtotal: number;
  total: number;
};

type CartState = Cart & {
  isLoading: boolean;
  error: string | null;
};

const state: CartState = {
  id: null,
  isLoading: false,
  userEmail: '',
  items: {},
  subtotal: 0,
  total: 0,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: state,
  reducers: {
    /* createCart */
    createCartRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    createCartSuccess: (_, { payload }: PayloadAction<Cart>) => {
      return { ...payload, items: {}, isLoading: false, error: null };
    },
    createCartFailure: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
    },
    /* fetchCart */
    fetchCartRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchCartSuccess: (_, { payload }: PayloadAction<Cart>) => {
      const items = payload.items ? payload.items : {};
      return { ...payload, items, isLoading: false, error: null };
    },
    fetchCartFailure: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = true;
      state.error = payload;
    },
    /* updateItemQuantity */
    updateItemQuantityRequest: (
      state,
      { payload }: PayloadAction<UpdateCartItemPayload>
    ) => {
      const updatingItem = state.items[payload.itemId];

      if (updatingItem) {
        updatingItem.isLoading = true;
        updatingItem.quantity = payload.amount;
      }
    },
    updateItemQuantitySuccess: (
      state,
      { payload: itemId }: PayloadAction<string>
    ) => {
      const updatingItem = state.items[itemId];

      if (updatingItem) {
        updatingItem.isLoading = false;
      }
    },
  },
});

export default cartSlice.reducer;
export const itemIsLoadingSelector = (itemId: string) => (
  state: RootState
): boolean | undefined => state.cart.items[itemId]?.isLoading;
export const cartItemsSelector = (state: RootState) => state.cart.items;
export const cartIsLoadingSelector = checkIfLoading('cart');
export const {
  updateItemQuantityRequest,
  updateItemQuantitySuccess,
  createCartSuccess,
  createCartRequest,
  createCartFailure,
  fetchCartFailure,
  fetchCartRequest,
  fetchCartSuccess,
} = cartSlice.actions;

type LocalStorageCart = {
  id: string;
  expiry: Date;
};

export const initCart = (): AppThunk => async (dispatch) => {
  const cartId = localStorage.getItem('cartId');
  const userEmail = localStorage.getItem('userEmail');
  if (cartId) {
    asyncDispatchWrapper(cartWithIdGetRequest, dispatch, fetchCartFailure);
  } else if (userEmail) {
    asyncDispatchWrapper(cartWithEmailGetRequest, dispatch, fetchCartFailure);
  } else {
    asyncDispatchWrapper(cartPostRequest, dispatch, createCartFailure);
  }

  async function cartWithIdGetRequest() {
    dispatch(fetchCartRequest());

    const { data } = await firebaseApi.get<Cart | null>(`/cart/${cartId}.json`);

    if (data) {
      dispatch(fetchCartSuccess(data));
    } else {
      dispatch(fetchCartFailure('Invalid request'));
    }
  }

  async function cartWithEmailGetRequest() {
    dispatch(fetchCartRequest());

    const { data } = await firebaseApi.get<Cart | null>(`/cart.json`, {
      params: {
        orderBy: '"userEmail"',
        equalTo: `"${userEmail}"`,
      },
    });

    if (data) {
      dispatch(fetchCartSuccess(keyObjectToObjectWithKey(data)));
    } else {
      dispatch(fetchCartFailure('Invalid request'));
    }
  }

  async function cartPostRequest() {
    dispatch(createCartRequest());

    const { data: initialData } = await firebaseApi.post<{ name: string }>(
      '/cart.json',
      {
        userEmail: '',
      }
    );

    const newCart: Cart = {
      id: initialData.name,
      userEmail: '',
      items: {},
      subtotal: 0,
      total: 0,
    };

    await firebaseApi.patch<Cart>(`/cart/${newCart.id}.json`, newCart);

    newCart.id && localStorage.setItem('cartId', newCart.id);

    dispatch(createCartSuccess(newCart));
  }
};

type UpdateCartItemPayload = {
  itemId: string;
  amount: number;
};
export const updateCartItem = ({
  itemId,
  amount,
}: UpdateCartItemPayload): AppThunk => (dispatch) => {
  dispatch(updateItemQuantityRequest({ itemId, amount }));
  dispatch(updateItemQuantitySuccess(itemId));
};
