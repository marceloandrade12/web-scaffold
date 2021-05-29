export interface AuthState {
  apiToken?: string;
  user?: string;
  loggedIn: boolean;
}

export enum AuthActionTypes {
  LOGIN = "@@Auth/LOGIN",
  LOGOUT = "@@Auth/LOGOUT",
}
