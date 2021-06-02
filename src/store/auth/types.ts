export interface AuthState {
  token?: string;
  user?: string;
  expiresIn?: string;
  expiresInUnit?: string;
  auth: boolean;
}

export enum AuthActionTypes {
  LOGIN = "@@Auth/LOGIN",
  LOGOUT = "@@Auth/LOGOUT",
}
