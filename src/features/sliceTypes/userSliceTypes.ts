export type UserState = {
  isLoading: boolean;
  error: string | null;
  email: string | null;
};

export type FireBaseLoginResponse = {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: boolean;
};

export type FireBaseRegisterResponse = {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
};
