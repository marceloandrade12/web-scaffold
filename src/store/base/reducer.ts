import { AnyAction } from "redux";
import { BaseActionTypes, BaseState } from "./types";

export const initialBaseState: BaseState = {
  entryPointUrl: "",
  loading: false,
};

export const baseReducer = (
  state = initialBaseState,
  action: AnyAction
): BaseState => {
  switch (action.type) {
    case BaseActionTypes.SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case BaseActionTypes.HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };
    default: {
      return state;
    }
  }
};
