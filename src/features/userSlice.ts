import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../app/store';
import axios from 'axios';
import { RegisterFormValues } from '../pages/register/Register';
import { LoginFormValues } from '../pages/login/Login';

type UserState = {
  isLoading: boolean;
  error: string | null;
  email: string | null;
};

const initialState: UserState = {
  email: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    authSuccess: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = null;
      state.email = payload;
    },
    authFailure: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
    },
    registerRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    registerSuccess: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = null;
      state.email = payload;
    },
    registerFailure: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default userSlice.reducer;
export const {
  authFailure,
  authRequest,
  authSuccess,
  registerFailure,
  registerRequest,
  registerSuccess,
} = userSlice.actions;

type FireBaseRegisterResponse = {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
};
export const registerUser = (payload: RegisterFormValues): AppThunk => async (
  dispatch
) => {
  dispatch(registerRequest());

  try {
    const { data } = await axios.post<FireBaseRegisterResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE}`,
      { ...payload, returnSecureToken: true }
    );
    dispatch(registerSuccess(data.email));
  } catch (error) {
    dispatch(
      registerFailure(
        error?.response?.data?.error?.message ?? 'Something went wrong'
      )
    );
  }
};

type FireBaseLoginResponse = {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: boolean;
};
export const authUser = (payload: LoginFormValues): AppThunk => async (
  dispatch
) => {
  dispatch(authRequest());

  try {
    const { data } = await axios.post<FireBaseLoginResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE}`,
      { ...payload, returnSecureToken: true }
    );
    dispatch(authSuccess(data.email));
  } catch (error) {
    dispatch(
      authFailure(
        error?.response?.data?.error?.message ?? 'Something went wrong'
      )
    );
  }
};
