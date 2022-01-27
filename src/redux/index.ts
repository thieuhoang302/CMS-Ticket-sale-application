import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import QLVReducer from "./reducers/QLVReducer";
import DSVReducer from "./reducers/DSVReducer";
import CaiDatReducer from "./reducers/CaiDatReducer";

const rootReducer = combineReducers({
  QLV: QLVReducer,
  DSV: DSVReducer,
  CD: CaiDatReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;