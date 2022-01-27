import { ThunkAction } from "redux-thunk";

import { GET_DATAQLV, SET_ERROR, SET_SUCCESS, QLVAction } from "../types";
import { RootState } from "../index";
import firebase from "../../Common/Firebase/config";

export const getDataQLV = (): ThunkAction<
  void,
  RootState,
  null,
  QLVAction
> => {
  return async (dispatch) => {
    try {
      const qlv = await firebase.firestore().collection("QLVData").get();
      let listdataqlv: { [x: string]: any }[] = [];
      qlv.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
        listdataqlv.push({ ...doc.data() });
      });
      console.log("listdataqlv: ", listdataqlv); 
      dispatch({
        type: GET_DATAQLV,
        payload: listdataqlv,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

// Set error
export const setError = (
  msg: string
): ThunkAction<void, RootState, null, QLVAction> => {
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
): ThunkAction<void, RootState, null, QLVAction> => {
  return (dispatch) => {
    dispatch({
      type: SET_SUCCESS,
      payload: msg,
    });
  };
};