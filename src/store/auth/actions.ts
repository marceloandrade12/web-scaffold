import { action, EmptyAction, PayloadAction } from "typesafe-actions";
import { AuthState, AuthActionTypes } from ".";

export const login = (input: AuthState): PayloadAction<string, AuthState> =>
  action(AuthActionTypes.LOGIN, input);

export const logout = (): EmptyAction<string> => action(AuthActionTypes.LOGOUT);
