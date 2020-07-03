import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderState, Order } from './sliceTypes';
import { AppThunk, RootState } from '../app/store';
import { firebaseApi } from '../apis/firebase';
import _ from 'lodash';
import { asyncDispatchWrapper } from '../helpers';
import { clearCart } from './cartSlice';
import { CheckoutFormValues } from '../pages/cart/components/Checkout';

const initialState: OrderState = {
  error: null,
  isLoading: false,
  orders: {},
};
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    generateOrderRequest: (state) => {
      state.isLoading = false;
      state.error = null;
    },
    generateOrderSuccess: (state) => {
      state.isLoading = false;
    },
    generateOrderFailure: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default orderSlice.reducer;
export const orderSelector = (state: RootState) => state.orders;
const {
  generateOrderFailure,
  generateOrderRequest,
  generateOrderSuccess,
} = orderSlice.actions;

export const generateOrder = (payload: CheckoutFormValues): AppThunk => async (
  dispatch,
  getState
) => {
  asyncDispatchWrapper(postNewOrder, dispatch, generateOrderFailure);

  async function postNewOrder() {
    dispatch(generateOrderRequest());
    const cart = getState().cart;
    const newOrder: Order = {
      ..._.omit(cart, 'isLoading', 'error', 'id'),
      ...payload,
    };

    await firebaseApi.post('/orders.json', newOrder);

    dispatch(generateOrderSuccess());
    if (cart.id) {
      dispatch(clearCart({ cartId: cart.id }));
    } else {
      throw new Error('Cart Id not found!');
    }
  }
};
