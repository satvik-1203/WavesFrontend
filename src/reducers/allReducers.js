import { combineReducers } from "redux";

//reducers
import apiDataReducer from "./apiData";
import jwtToken from "./token";
import userData from "./userData";

export const allReducers = combineReducers({
  apiData: apiDataReducer,
  jwtToken: jwtToken,
  userData: userData,
});
