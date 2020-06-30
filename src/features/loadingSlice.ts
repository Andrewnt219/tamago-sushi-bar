import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface LoadingState {
  isLoadings: { [actionName: string]: boolean };
}

const loadingState: LoadingState = {
  isLoadings: {},
};

export const loadingSlice = createSlice({
  name: 'ui',
  initialState: loadingState,
  reducers: {
    actionStart: (
      state,
      { payload }: PayloadAction<[string, 'request' | 'success' | 'failure']>
    ) => {
      const [actionName, actionState] = payload;
      state.isLoadings = {
        ...state.isLoadings,
        [actionName]: actionState === 'request',
      };
    },
  },
});

export default loadingSlice.reducer;
export const { actionStart } = loadingSlice.actions;
export const checkIfLoading = (actionName: string) => (state: RootState) =>
  state.loading.isLoadings[actionName];
