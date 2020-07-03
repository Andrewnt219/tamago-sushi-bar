import { createSlice } from '@reduxjs/toolkit';
import { OrderState } from './sliceTypes';

const initialState: OrderState = {
  error: null,
  isLoading: false,
  userEmail: '',
  address: '',
  items: {},
  shipping: 0,
  subtotal: 0,
  total: 0,
  tip: 0,
};
// const orderSlice = createSlice({
//   name: 'order',
// });
