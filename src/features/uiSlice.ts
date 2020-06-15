import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface uiState {
  isLoading: boolean;
  error: string | null;
}

const uiState: uiState = {
  isLoading: true,
  error: null,
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
  },
});

export default uiSlice.reducer;
export const { actionFailed, actionRequest, actionSuccess } = uiSlice.actions;
