import { combineReducers } from "redux";
import auth from "./reducers/auth";
import code from "./reducers/code";

const rootReducer = combineReducers({
  auth,
  code
});

export default rootReducer;
