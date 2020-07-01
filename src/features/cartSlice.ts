import _ from 'lodash';
import { firebaseApi } from '../apis/firebase';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { checkIfLoading } from './loadingSlice';
import { AppThunk, RootState } from '../app/store';
import { asyncDispatchWrapper } from '../helpers/redux-helpers';
import { keyObjectToObjectWithKey, calculateCartOnSuccess } from '../helpers';

export type CartItem = {
  id: string;
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

export type CartState = Cart & {
  isLoading: boolean;
  error: string | null;
};

const state: CartState = {
  id: null,
  isLoading: false,
  userEmail: '',
  items: {},
  error: null,
  subtotal: 0,
  total: 0,
  tip: 0,
  shipping: 0,
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
    /* -------------------------------- syncCart -------------------------------- */
    syncCartRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    syncCartSuccess: (state, { payload }: PayloadAction<Cart>) => {
      state.userEmail = payload.userEmail;
      state.items = { ...payload.items, ...state.items };
      state = calculateCartOnSuccess(state);
    },
    syncCartFailure: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
    },
    /* addItem */
    addItemRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    addItemSucces: (state, { payload }: PayloadAction<CartItem>) => {
      state.isLoading = false;
      state.error = null;
      state.items[payload.id] = { ...payload, isLoading: false, error: null };
      state = calculateCartOnSuccess(state);
    },
    addItemFailure: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
    },
    /* removeItem */
    removeItemRequest: (state, { payload: itemId }: PayloadAction<string>) => {
      const requestingItem = state.items[itemId];

      if (requestingItem) {
        requestingItem.isLoading = true;
        requestingItem.error = null;
      }
    },
    removeItemSucces: (state, { payload: itemId }: PayloadAction<string>) => {
      const requestingItem = state.items[itemId];

      if (requestingItem) {
        requestingItem.isLoading = false;
        requestingItem.error = null;

        state.items = _.omit(state.items, itemId);
        state = calculateCartOnSuccess(state);
      }
    },
    removeItemFailure: (
      state,
      { payload }: PayloadAction<{ itemId: string; errorMessage: string }>
    ) => {
      const requestingItem = state.items[payload.itemId];

      if (requestingItem) {
        requestingItem.isLoading = false;
        requestingItem.error = payload.errorMessage;
      }
    },
    /* updateItemQuantity */
    updateItemQuantityRequest: (
      state,
      { payload: itemId }: PayloadAction<string>
    ) => {
      const updatingItem = state.items[itemId];

      if (updatingItem) {
        updatingItem.isLoading = true;
        updatingItem.error = null;
      }
    },
    updateItemQuantitySuccess: (
      state,
      { payload }: PayloadAction<UpdateCartItemPayload>
    ) => {
      const updatingItem = state.items[payload.itemId];

      if (updatingItem) {
        updatingItem.isLoading = false;
        updatingItem.error = null;
        updatingItem.quantity = payload.amount;

        state = calculateCartOnSuccess(state);
      }
    },
    updateItemQuantityFailure: (
      state,
      { payload }: PayloadAction<{ itemId: string; errorMessage: string }>
    ) => {
      const updatingItem = state.items[payload.itemId];

      if (updatingItem) {
        updatingItem.isLoading = false;
        updatingItem.error = payload.errorMessage;
      }
    },
  },
});

export default cartSlice.reducer;
export const cartSelector = (state: RootState) => state.cart;
export const itemIsLoadingSelector = (itemId: string) => (
  state: RootState
): boolean | undefined => state.cart.items[itemId]?.isLoading;
export const cartItemsSelector = (state: RootState) => state.cart.items;
export const cartIsLoadingSelector = checkIfLoading('cart');
export const {
  updateItemQuantityRequest,
  updateItemQuantitySuccess,
  updateItemQuantityFailure,
  addItemFailure,
  addItemRequest,
  addItemSucces,
  removeItemFailure,
  removeItemRequest,
  removeItemSucces,
  createCartSuccess,
  createCartRequest,
  createCartFailure,
  fetchCartFailure,
  fetchCartRequest,
  fetchCartSuccess,
  syncCartFailure,
  syncCartRequest,
  syncCartSuccess,
} = cartSlice.actions;

export const initCart = (): AppThunk => async (dispatch) => {
  const cartId = localStorage.getItem('cartId');
  const userEmail = localStorage.getItem('userEmail');
  if (cartId) {
    asyncDispatchWrapper(getWithId, dispatch, fetchCartFailure);
  } else if (userEmail) {
    asyncDispatchWrapper(getWithEmail, dispatch, fetchCartFailure);
  } else {
    asyncDispatchWrapper(postNewCart, dispatch, createCartFailure);
  }

  async function getWithId() {
    dispatch(fetchCartRequest());

    const { data } = await firebaseApi.get<Cart | null>(`/cart/${cartId}.json`);

    if (data) {
      dispatch(fetchCartSuccess(data));
    } else {
      dispatch(fetchCartFailure('Invalid request'));
    }
  }

  async function getWithEmail() {
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

  async function postNewCart() {
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
      tip: 0,
      shipping: 0,
    };

    await firebaseApi.patch<Cart>(`/cart/${newCart.id}.json`, newCart);

    newCart.id && localStorage.setItem('cartId', newCart.id);

    dispatch(createCartSuccess(newCart));
  }
};

export const syncCart = (): AppThunk => async (dispatch, getState) => {
  asyncDispatchWrapper(getWithId, dispatch, syncCartFailure);

  async function getWithId() {
    dispatch(syncCartRequest());

    const { data } = await firebaseApi.get<Cart>(`/cart.json`, {
      params: {
        orderBy: '"userEmail"',
        equalTo: `"${getState().user.email}"`,
      },
    });

    dispatch(syncCartSuccess(keyObjectToObjectWithKey(data)));
  }
};

type UpdateCartItemPayload = {
  itemId: string;
  amount: number;
};
export const updateCartItem = ({
  itemId,
  amount,
}: UpdateCartItemPayload): AppThunk => async (dispatch, getState) => {
  const cartId = getState().cart.id;
  if (cartId) {
    dispatch(updateItemQuantityRequest(itemId));

    try {
      await firebaseApi.patch(`/cart/${cartId}/${itemId}.json`, {
        quantity: amount,
      });

      dispatch(updateItemQuantitySuccess({ itemId, amount }));
    } catch (error) {
      dispatch(
        updateItemQuantityFailure({
          itemId,
          errorMessage: error?.response?.data?.error ?? 'Something went wrong',
        })
      );
    }
  }
};

export const addItemToCart = (item: CartItem): AppThunk => async (
  dispatch,
  getState
) => {
  const cartId = getState().cart.id;
  if (cartId) {
    dispatch(addItemRequest());
    asyncDispatchWrapper(postNewItemToCart, dispatch, addItemFailure);
  }

  async function postNewItemToCart() {
    const { data } = await firebaseApi.post<{ name: string }>(
      `/cart/${cartId}/items.json`,
      item
    );
    dispatch(addItemSucces({ ...item, id: data.name }));
  }
};

export const removeItemFromCart = (itemId: string): AppThunk => async (
  dispatch,
  getState
) => {
  const cartId = getState().cart.id;
  if (cartId) {
    dispatch(removeItemRequest(itemId));

    try {
      await firebaseApi.delete(`/cart/${cartId}/${itemId}.json`);
      dispatch(removeItemSucces(itemId));
    } catch (error) {
      dispatch(
        removeItemFailure({
          itemId,
          errorMessage: error?.response?.data?.error ?? 'Something went wrong',
        })
      );
    }
  }
};
