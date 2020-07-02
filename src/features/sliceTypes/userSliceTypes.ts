export type UserState = Omit<DatabaseUser, 'email' | 'totalTip'> & {
  isLoading: boolean;
  error: string | null;
  email: string | null;
  totalTip: number;
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

export type FireBaseRegisterRequest = {
  email: string;
  password: string;
  returnSecureToken: true;
  displayName: string;
};

export type FireBaseLoginRequest = Omit<FireBaseRegisterRequest, 'displayName'>;

export type DatabaseUser = {
  email: string;
  preferredName: string;
  address: string;
  phone: string;
  joinDate: string;
  totalTip: string;
};
