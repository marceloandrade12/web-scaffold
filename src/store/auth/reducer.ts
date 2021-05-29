import { AnyAction } from "redux";
import { AuthActionTypes, AuthState } from "./types";

export const initialAuthState: AuthState = {
  loggedIn: false,
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
        loggedIn: false,
        apiToken: undefined,
      };
    default: {
      return state;
    }
  }
};
