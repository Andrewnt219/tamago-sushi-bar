import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loadingReducer from '../features/loadingSlice';
import cartReducer from '../features/cartSlice';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    loading: loadingReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
