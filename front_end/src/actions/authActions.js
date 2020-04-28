import axios from "axios";
import { returnErrors } from "./errorActions";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./actionTypes";
import userData from "../data/userdata.json";

export const loadUser = () => (dispatch, getState) => {
  const { results } = userData;
  // User loading

  dispatch({ type: USER_LOADING });
  // Get token from local storage

  const token = getState().auth.token;
  //headers
  const config = {
    headers: { "Content-Type": "applicaton/json" },
  };
  // if token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }
};
