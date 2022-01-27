import { GET_DATACD, SET_ERROR, SET_SUCCESS, CDAction } from "../types";

const initialState = {
  CD: [],
  error: "",
  success: "",
  loading: false,
};

export default (state = initialState, action: CDAction) => {
  switch (action.type) {
    case GET_DATACD:
      return {
        ...state,
        CD: action.payload,
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