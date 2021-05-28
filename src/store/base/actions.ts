import { action, EmptyAction } from "typesafe-actions";
import { BaseActionTypes } from "..";

// loader actions
export const showLoader = (): EmptyAction<string> =>
  action(BaseActionTypes.SHOW_LOADER);
export const hideLoader = (): EmptyAction<string> =>
  action(BaseActionTypes.HIDE_LOADER);
