import { Action, combineReducers, Reducer } from "redux";
import { AuthState, baseReducer, BaseState } from ".";
import { authReducer } from "./auth";

export interface StoreState {
  baseState: BaseState;
  authState: AuthState;
}

interface StoreReducer {
  baseState: any;
  authState: any;
}

const appReducer = (): Reducer<StoreReducer> => {
  return combineReducers({
    baseState: baseReducer,
    authState: authReducer,
  });
};

export const rootReducer = (): Reducer<StoreReducer> => {
  return (state: any, action: Action): any => {
    const newState = { ...state };

    return appReducer()(newState, action);
  };
};
