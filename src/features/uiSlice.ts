import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface uiState {
  isLoading: boolean;
  error: string | null;
  appBarIsFixed: boolean;
}

const uiState: uiState = {
  isLoading: true,
  error: null,
  appBarIsFixed: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState: uiState,
  reducers: {
    actionRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    actionSuccess: (state) => {
      state.isLoading = false;
      state.error = null;
    },
    actionFailed: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
    },
    changeAppbarState: (state, { payload }: PayloadAction<boolean>) => {
      state.appBarIsFixed = payload;
    },
  },
});

export default uiSlice.reducer;
export const {
  actionFailed,
  actionRequest,
  actionSuccess,
  changeAppbarState,
} = uiSlice.actions;
export const isLoadingSelector = (state: RootState) => state.ui.isLoading;
export const appBarIsFixedSelector = (state: RootState) =>
  state.ui.appBarIsFixed;
