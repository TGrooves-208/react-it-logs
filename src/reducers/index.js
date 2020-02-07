import { combineReducers } from "redux";
import logReducer from "./logReducer";
import techReducer from "./techReducer";

export default combineReducers({
  // this is what we are calling our state for the log
  log: logReducer,
  tech: techReducer
});
