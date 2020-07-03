import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loadingReducer from '../features/loadingSlice';
import cartReducer from '../features/cartSlice';
import userReducer from '../features/userSlice';
import orderReducer from '../features/orderSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    loading: loadingReducer,
    cart: cartReducer,
    user: userReducer,
    orders: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
