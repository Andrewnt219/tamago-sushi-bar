import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../app/store';
import axios from 'axios';
import { RegisterFormValues } from '../pages/register/Register';
import { LoginFormValues } from '../pages/login/Login';
import {
  FireBaseRegisterResponse,
  FireBaseLoginResponse,
  UserState,
  FireBaseRegisterRequest,
  DatabaseUser,
  FireBaseLoginRequest,
} from './sliceTypes';
import { firebaseApi } from '../apis/firebase';
import { keyObjectToObjectWithKey, asyncDispatchWrapper } from '../helpers';
import _ from 'lodash';

const initialState: UserState = {
  email: null,
  address: '',
  joinDate: '',
  phone: '',
  preferredName: '',
  totalTip: 0,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    /* initUser */
    initUserRequest: (_) => {
      return { ...initialState, isLoading: true, error: null };
    },
    initUserSuccess: (_, { payload }: PayloadAction<DatabaseUser>) => {
      return {
        ...payload,
        totalTip: +payload.totalTip,
        isLoading: false,
        error: null,
      };
    },
    initUserFailed: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
    },
    /* Auth */
    authRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    authSuccess: (_, { payload }: PayloadAction<DatabaseUser>) => {
      localStorage.setItem('userEmail', payload.email);

      return {
        ...payload,
        totalTip: +payload.totalTip,
        isLoading: false,
        error: null,
      };
    },
    authFailure: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
    },
    /* Logout */
    logout: (_) => {
      localStorage.clear();
      return { ...initialState };
    },
    /* Register */
    registerRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    registerSuccess: (_, { payload }: PayloadAction<DatabaseUser>) => {
      localStorage.setItem('userEmail', payload.email);

      return {
        ...payload,
        totalTip: +payload.totalTip,
        isLoading: false,
        error: null,
      };
    },
    registerFailure: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default userSlice.reducer;
export const userSelector = (state: RootState) => state.user;
export const { logout } = userSlice.actions;

const {
  authFailure,
  authRequest,
  authSuccess,
  registerFailure,
  registerRequest,
  registerSuccess,
  initUserFailed,
  initUserRequest,
  initUserSuccess,
} = userSlice.actions;

export const initUser = (userEmail: string): AppThunk => async (dispatch) => {
  asyncDispatchWrapper(getUserByEmail, dispatch, initUserFailed);

  async function getUserByEmail() {
    dispatch(initUserRequest());

    const { data } = await firebaseApi.get<Record<string, DatabaseUser> | {}>(
      '/users.json',
      {
        params: {
          orderBy: '"email"',
          equalTo: `"${userEmail}"`,
        },
      }
    );

    if (!_.isEmpty(data)) {
      dispatch(initUserSuccess(keyObjectToObjectWithKey(data)));
    } else {
      dispatch(initUserFailed('Invalid request'));
    }
  }
};

export const registerUser = ({
  address,
  password,
  preferredName,
  phone,
  email,
}: RegisterFormValues): AppThunk => async (dispatch) => {
  dispatch(registerRequest());

  try {
    const bodyRequest: FireBaseRegisterRequest = {
      email,
      password,
      displayName: preferredName,
      returnSecureToken: true,
    };
    await axios.post<FireBaseRegisterResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE}`,
      bodyRequest
    );

    const newUser: DatabaseUser = {
      email,
      preferredName,
      phone,
      address,
      joinDate: new Date().toDateString(),
      totalTip: '0',
    };

    await firebaseApi.post('/users.json', newUser);
    dispatch(registerSuccess(newUser));
  } catch (error) {
    dispatch(
      registerFailure(
        error?.response?.data?.error?.message ?? 'Something went wrong'
      )
    );
  }
};

export const authUser = ({
  email,
  password,
}: LoginFormValues): AppThunk => async (dispatch) => {
  dispatch(authRequest());

  try {
    const bodyRequest: FireBaseLoginRequest = {
      email,
      password,
      returnSecureToken: true,
    };
    await axios.post<FireBaseLoginResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE}`,
      bodyRequest
    );

    const { data } = await firebaseApi.get<Record<string, DatabaseUser> | {}>(
      '/users.json',
      {
        params: {
          orderBy: '"email"',
          equalTo: `"${email}"`,
        },
      }
    );

    if (!_.isEmpty(data)) {
      dispatch(authSuccess(keyObjectToObjectWithKey(data)));
    } else {
      dispatch(authFailure('Invalid Request'));
    }
  } catch (error) {
    dispatch(
      authFailure(
        error?.response?.data?.error?.message ?? 'Something went wrong'
      )
    );
  }
};
