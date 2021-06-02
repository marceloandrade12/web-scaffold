import { AnyAction } from "redux";
import { AvailableCookies, CookieHelper } from "../../helpers";
import { AuthActionTypes, AuthState } from "./types";

const authStateFromCookie = CookieHelper.get<AuthState>(
  AvailableCookies.AppAuth
);

export const initialAuthState: AuthState = authStateFromCookie || {
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
