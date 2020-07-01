import _ from 'lodash';
import { firebaseApi } from '../apis/firebase';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { checkIfLoading } from './loadingSlice';
import { AppThunk, RootState } from '../app/store';
import { asyncDispatchWrapper } from '../helpers/redux-helpers';
import {
  keyObjectToObjectWithKey,
  calculateCartOnSuccess,
  getCartItemById,
} from '../helpers';
import {
  Cart,
  CartItem,
  IncreaseItemQuantityPayload,
  DatabaseCart,
  CartState,
} from './cartSliceType';

const initialState: CartState = {
  id: null,
  userEmail: '',
  items: {},
  tip: 0,
  shipping: 5,
  error: null,
  isLoading: false,
  subtotal: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    /* createCart */
    createCartRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    createCartSuccess: (state, { payload }: PayloadAction<string>) => {
      state.id = payload;
      calculateCartOnSuccess(state);
    },
    createCartFailure: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
    },
    /* fettchCar */
    fetchCartRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchCartSuccess: (state, { payload }: PayloadAction<DatabaseCart>) => {
      state.items = payload.items ? payload.items : {};
      state.id = payload.id;
      calculateCartOnSuccess(state);
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
    syncCartSuccess: (state, { payload }: PayloadAction<DatabaseCart>) => {
      state.userEmail = payload.userEmail;
      state.items = { ...payload.items, ...state.items };
      calculateCartOnSuccess(state);
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
      calculateCartOnSuccess(state);
    },
    addItemFailure: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
    },
    /* removeItem */
    removeItemRequest: (state, { payload: itemId }: PayloadAction<string>) => {
      state.isLoading = true;
      state.error = null;
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
        calculateCartOnSuccess(state);
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
    /* increaseItemQuantity */
    updateItemQuantityRequest: (
      state,
      { payload: itemId }: PayloadAction<string>
    ) => {
      state.isLoading = true;
      state.error = null;
      const updatingItem = state.items[itemId];

      if (updatingItem) {
        updatingItem.isLoading = true;
        updatingItem.error = null;
      }
    },
    updateItemQuantitySuccess: (
      state,
      { payload }: PayloadAction<IncreaseItemQuantityPayload>
    ) => {
      const updatingItem = state.items[payload.itemId];

      if (updatingItem) {
        updatingItem.isLoading = false;
        updatingItem.error = null;
        updatingItem.quantity += payload.increaseAmount;

        calculateCartOnSuccess(state);
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

    const { data } = await firebaseApi.get<DatabaseCart | null>(
      `/cart/${cartId}.json`
    );

    if (data) {
      dispatch(fetchCartSuccess(data));
    } else {
      dispatch(fetchCartFailure('Invalid request'));
      localStorage.removeItem('cartId');

      asyncDispatchWrapper(postNewCart, dispatch, createCartFailure);
    }
  }

  async function getWithEmail() {
    dispatch(fetchCartRequest());

    const { data } = await firebaseApi.get<DatabaseCart | null>(`/cart.json`, {
      params: {
        orderBy: '"userEmail"',
        equalTo: `"${userEmail}"`,
      },
    });

    if (data) {
      dispatch(fetchCartSuccess(keyObjectToObjectWithKey(data)));
    } else {
      dispatch(fetchCartFailure('Invalid request'));
      localStorage.removeItem('email');

      asyncDispatchWrapper(postNewCart, dispatch, createCartFailure);
    }
  }

  async function postNewCart() {
    dispatch(createCartRequest());

    const { data } = await firebaseApi.post<{ name: string }>(
      '/cart.json',
      _.omit(initialState, 'isLoading', 'error', 'subtotal', 'total')
    );

    const cartId = data.name;
    await firebaseApi.patch<DatabaseCart>(`/cart/${cartId}.json`, {
      id: cartId,
    });

    localStorage.setItem('cartId', cartId);
    dispatch(createCartSuccess(cartId));
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

export const increaseItemQuantity = ({
  itemId,
  increaseAmount,
}: IncreaseItemQuantityPayload): AppThunk => async (dispatch, getState) => {
  const cart = getState().cart;
  if (cart.id) {
    dispatch(updateItemQuantityRequest(itemId));

    const item = getCartItemById(cart, itemId);
    const newQuantity = item.quantity + increaseAmount;

    if (item) {
      try {
        await firebaseApi.patch(`/cart/${cart.id}/items/${itemId}.json`, {
          quantity: newQuantity,
        });

        dispatch(updateItemQuantitySuccess({ itemId, increaseAmount }));
      } catch (error) {
        dispatch(
          updateItemQuantityFailure({
            itemId,
            errorMessage:
              error?.response?.data?.error ?? 'Something went wrong',
          })
        );
      }
    } else throw new Error('Item not found!');
  } else throw new Error('Cart ID not found!');
};

export const addItemToCart = (item: Omit<CartItem, 'id'>): AppThunk => async (
  dispatch,
  getState
) => {
  const cartId = getState().cart.id;
  if (cartId) {
    dispatch(addItemRequest());
    asyncDispatchWrapper(postNewItemToCart, dispatch, addItemFailure);
  } else throw new Error('Cart ID not found!');

  async function postNewItemToCart() {
    const { data } = await firebaseApi.post<{ name: string }>(
      `/cart/${cartId}/items.json`,
      item
    );

    const cartItemId = data.name;
    await firebaseApi.patch(`/cart/${cartId}/items/${cartItemId}.json`, {
      id: cartItemId,
    });
    dispatch(addItemSucces({ ...item, id: cartItemId }));
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
      await firebaseApi.delete(`/cart/${cartId}/items/${itemId}.json`);
      dispatch(removeItemSucces(itemId));
    } catch (error) {
      dispatch(
        removeItemFailure({
          itemId,
          errorMessage: error?.response?.data?.error ?? 'Something went wrong',
        })
      );
    }
  } else throw new Error('Cart ID not found!');
};
