import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../app/store';
import axios from 'axios';
import { RegisterFormValues } from '../pages/register/Register';
import { LoginFormValues } from '../pages/login/Login';
import {
  FireBaseRegisterResponse,
  FireBaseLoginResponse,
  UserState,
} from './sliceTypes';

const initialState: UserState = {
  email: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initUser: (state) => {
      const userEmail = localStorage.getItem('userEmail');
      if (userEmail) {
        state.email = userEmail;
      }
    },
    /* Auth */
    authRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    authSuccess: (state, { payload }: PayloadAction<string>) => {
      localStorage.setItem('userEmail', payload);

      state.isLoading = false;
      state.error = null;
      state.email = payload;
    },
    authFailure: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
    },
    /* Logout */
    logout: (state) => {
      state.email = null;
      state.error = null;
      state.isLoading = false;

      localStorage.clear();
    },
    /* Register */
    registerRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    registerSuccess: (state, { payload }: PayloadAction<string>) => {
      localStorage.setItem('userEmail', payload);

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
export const userSelector = (state: RootState) => state.user;
export const { logout, initUser } = userSlice.actions;

const {
  authFailure,
  authRequest,
  authSuccess,
  registerFailure,
  registerRequest,
  registerSuccess,
} = userSlice.actions;

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
