export interface BaseState {
  entryPointUrl: string;
  loading: boolean;
}

export enum BaseActionTypes {
  SHOW_LOADER = "@@Base/SHOW_LOADER",
  HIDE_LOADER = "@@Base/HIDE_LOADER",
}
