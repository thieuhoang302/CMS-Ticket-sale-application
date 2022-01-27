import { ThunkAction } from "redux-thunk";

import { GET_DATADSV, SET_ERROR, SET_SUCCESS, DSVAction } from "../types";
import { RootState } from "../index";
import firebase from "../../Common/Firebase/config";

export const getDataDSV = (): ThunkAction<
  void,
  RootState,
  null,
  DSVAction
> => {
  return async (dispatch) => {
    try {
      const dsv = await firebase.firestore().collection("DSVData").get();
      let listdatadsv: { [x: string]: any }[] = [];
      dsv.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
        listdatadsv.push({ ...doc.data() });
      });
      console.log("listdataqlv: ", listdatadsv); 
      dispatch({
        type: GET_DATADSV,
        payload: listdatadsv,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

// Set error
export const setError = (
  msg: string
): ThunkAction<void, RootState, null, DSVAction> => {
  return (dispatch) => {
    dispatch({
      type: SET_ERROR,
      payload: msg,
    });
  };
};

// Set success
export const setSuccess = (
  msg: string
): ThunkAction<void, RootState, null, DSVAction> => {
  return (dispatch) => {
    dispatch({
      type: SET_SUCCESS,
      payload: msg,
    });
  };
};