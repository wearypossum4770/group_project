import { GET_ERRORS, CLEAR_ERRORS } from "../actions/actionTypes";

const intialState = {
  msg: {},
  status: null,
  id: null,
};

const errorReducer = (state = intialState, action) => {
  switch (action.type) {
    default:
      return state;
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id,
      };
    case CLEAR_ERRORS:
      return {
        msg: {},
        status: null,
        id: null,
      };
  }
};

export default errorReducer;
