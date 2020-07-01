import { createSlice } from '@reduxjs/toolkit';

type UserState = {
  email: string | null;
};

const initialState: UserState = {
  email: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authUserRequest: (state) => {},
  },
});

export default userSlice.reducer;
export const { authUserRequest } = userSlice.actions;
