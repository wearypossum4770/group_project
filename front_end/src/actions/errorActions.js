import { GET_ERRORS, CLEAR_ERRORS } from "./actionTypes";

export const returnErrors = (msg, status, id = null) => ({
  type: GET_ERRORS,
  payload: { msg, status, id },
});

export const clearErrors = () => ({ type: CLEAR_ERRORS });
