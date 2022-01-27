import { GET_DATAQLV, SET_ERROR, SET_SUCCESS, QLVAction } from "../types";

const initialState = {
  QLV: [],
  error: "",
  success: "",
  loading: false,
};

export default (state = initialState, action: QLVAction) => {
  switch (action.type) {
    case GET_DATAQLV:
      return {
        ...state,
        QLV: action.payload,
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case SET_SUCCESS:
      return {
        ...state,
        success: action.payload,
      };
    default:
      return state;
  }
};