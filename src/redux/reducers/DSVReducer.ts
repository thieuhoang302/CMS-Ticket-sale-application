import { GET_DATADSV, SET_ERROR, SET_SUCCESS, DSVAction } from "../types";

const initialState = {
  DSV: [],
  error: "",
  success: "",
  loading: false,
};

export default (state = initialState, action: DSVAction) => {
  switch (action.type) {
    case GET_DATADSV:
      return {
        ...state,
        DSV: action.payload,
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