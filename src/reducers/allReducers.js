import { combineReducers } from "redux";

import apiDataReducer from "./apiData";

export const allReducers = combineReducers({
  apiData: apiDataReducer,
});
