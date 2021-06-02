import { AnyAction } from "redux";
import { AuthActionTypes, AuthState } from "./types";

export const initialAuthState: AuthState = {
  auth: false,
};

export const authReducer = (
  state = initialAuthState,
  action: AnyAction
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {
        ...action.payload,
      };
    case AuthActionTypes.LOGOUT:
      return {
        auth: false,
        token: undefined,
        user: undefined,
        expiresIn: undefined,
        expiresInUnit: undefined,
      };
    default: {
      return state;
    }
  }
};
