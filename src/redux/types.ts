export const GET_DATAQLV = "GET_DATAQLV";
export const GET_DATADSV = "GET_DATADSV";
export const GET_DATACD = "GET_DATACD";


export const SET_SUCCESS = "SET_SUCCESS";
export const SET_ERROR = "SET_ERROR";

export interface QLVState {
  QLV: any;
  error: string;
  success: string;
  loading: boolean;
}

export interface DSVState {
  DSV: any;
  error: string;
  success: string;
  loading: boolean;
}

export interface CDState {
  CD: any;
  error: string;
  success: string;
  loading: boolean;
}
// Actions
interface GetQLVAction {
  type: typeof GET_DATAQLV;
  payload: any;
}

interface GetDSVAction {
  type: typeof GET_DATADSV;
  payload: any;
}

interface GetCDAction {
  type: typeof GET_DATACD;
  payload: any;
}

// Status
interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: any;
}

interface SetSuccessAction {
  type: typeof SET_SUCCESS;
  payload: any;
}

export type QLVAction =
  | GetQLVAction
  | SetErrorAction
  | SetSuccessAction;

export type DSVAction =
  | GetDSVAction
  | SetErrorAction
  | SetSuccessAction;

export type CDAction =
  | GetCDAction
  | SetErrorAction
  | SetSuccessAction;