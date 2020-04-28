import { combineReducers } from "redux";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import itemReducer from "./itemReducer";

export default combineReducers({
  error: errorReducer,
  item: itemReducer,
  auth: authReducer,
  // user:userReducer
});
