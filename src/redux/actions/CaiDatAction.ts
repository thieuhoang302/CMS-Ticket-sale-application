import { ThunkAction } from "redux-thunk";

import { GET_DATACD, SET_ERROR, SET_SUCCESS, CDAction } from "../types";
import { RootState } from "../index";
import firebase from "../../Common/Firebase/config";

export const getDataCD = (): ThunkAction<
  void,
  RootState,
  null,
  CDAction
> => {
  return async (dispatch) => {
    try {
      const cd = await firebase.firestore().collection("CaiDatData").get();
      let listdatacd: { [x: string]: any }[] = [];
      cd.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
        listdatacd.push({ ...doc.data() });
      });
      console.log("listdataqlv: ", listdatacd); 
      dispatch({
        type: GET_DATACD,
        payload: listdatacd,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

// Set error
export const setError = (
  msg: string
): ThunkAction<void, RootState, null, CDAction> => {
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
): ThunkAction<void, RootState, null, CDAction> => {
  return (dispatch) => {
    dispatch({
      type: SET_SUCCESS,
      payload: msg,
    });
  };
};