import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderState, Order, DatabaseOrder } from './sliceTypes';
import { AppThunk, RootState } from '../app/store';
import { firebaseApi } from '../apis/firebase';
import _ from 'lodash';
import {
  asyncDispatchWrapper,
  recursiveKeyObjectToObjectWithKey,
} from '../helpers';
import { clearCart } from './cartSlice';
import { CheckoutFormValues } from '../pages/cart/components/Checkout';

const initialState: OrderState = {
  error: null,
  isLoading: false,
  orders: null,
  displayedOrder: null,
  orderIsCreated: null,
};
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    /* fetchOrders */
    fetchOrdersRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchOrdersSuccess: (
      state,
      { payload }: PayloadAction<Record<string, DatabaseOrder>>
    ) => {
      state.isLoading = false;
      state.error = null;
      state.orders = recursiveKeyObjectToObjectWithKey(payload);
    },
    fetchOrdersFailure: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
    },
    /* fetchOrder */
    fetchOrderRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchOrderSuccess: (state, { payload }: PayloadAction<Order>) => {
      state.isLoading = false;
      state.error = null;
      state.displayedOrder = payload;
    },
    fetchOrderFailure: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
      state.isLoading = false;
    },
    generateOrderRequest: (state) => {
      state.isLoading = false;
      state.error = null;
      state.orderIsCreated = null;
    },
    generateOrderSuccess: (state) => {
      state.isLoading = false;
      state.orderIsCreated = true;
    },
    generateOrderFailure: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
      state.orderIsCreated = false;
    },
  },
});

export default orderSlice.reducer;
export const ordersSelector = (state: RootState) => state.orders;
export const displayedOrderSelector = (state: RootState) =>
  state.orders.displayedOrder;

const {
  generateOrderFailure,
  generateOrderRequest,
  generateOrderSuccess,
  fetchOrdersFailure,
  fetchOrdersRequest,
  fetchOrdersSuccess,
  fetchOrderFailure,
  fetchOrderRequest,
  fetchOrderSuccess,
} = orderSlice.actions;

export const generateOrder = (payload: CheckoutFormValues): AppThunk => async (
  dispatch,
  getState
) => {
  asyncDispatchWrapper(postNewOrder, dispatch, generateOrderFailure);

  async function postNewOrder() {
    dispatch(generateOrderRequest());
    const cart = getState().cart;
    const newOrder: Omit<Order, 'id'> = {
      ..._.omit(cart, 'isLoading', 'error', 'id'),
      ...payload,
      createdDate: new Date().toDateString(),
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

export const fetchOrders = ({
  userEmail,
}: {
  userEmail: string;
}): AppThunk => async (dispatch) => {
  asyncDispatchWrapper(getOrders, dispatch, fetchOrdersFailure);

  async function getOrders() {
    dispatch(fetchOrdersRequest());
    const { data } = await firebaseApi.get<Record<string, DatabaseOrder> | {}>(
      '/orders.json',
      {
        params: {
          orderBy: '"userEmail"',
          equalTo: `"${userEmail}"`,
        },
      }
    );

    if (!_.isEmpty(data)) {
      dispatch(fetchOrdersSuccess(data));
    } else {
      dispatch(fetchOrdersFailure('Invalid request'));
    }
  }
};

export const fetchOrder = ({
  orderId,
}: {
  orderId: string;
}): AppThunk => async (dispatch) => {
  asyncDispatchWrapper(getOrder, dispatch, fetchOrderFailure);

  async function getOrder() {
    dispatch(fetchOrderRequest());
    const { data } = await firebaseApi.get<Order | null>(
      `/orders/${orderId}.json`
    );
    if (data) {
      dispatch(fetchOrderSuccess(data));
    } else {
      dispatch(fetchOrderFailure('Invalid request'));
    }
  }
};
