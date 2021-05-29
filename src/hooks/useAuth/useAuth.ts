import { useDispatch, useSelector } from "react-redux";
import {
  StoreState,
  login as setLoginRedux,
  logout as setLogoutRedux,
  AuthState,
} from "../../store";

export const useAuth = (): {
  auth: AuthState;
  login: (input: AuthState) => void;
  logout: () => void;
} => {
  const auth = useSelector((state: StoreState) => state.authState);

  const dispatch = useDispatch();

  const login = (input: AuthState): void => {
    dispatch(setLoginRedux(input));
  };

  const logout = (): void => {
    dispatch(setLogoutRedux());
  };

  return { auth, login, logout };
};
