import {
  GET_ITEMS,
  DELETE_ITEM,
  ADD_ITEMS,
  ITEMS_LOADING,
} from "../actions/actionTypes";
import { v4 } from "uuid";

const initialState = {
  items: [
    { id: v4(), name: "Eggs" },
    { id: v4(), name: "Milk" },
    { id: v4(), name: "Steak" },
    { id: v4(), name: "Water" },
  ],
  loading: false,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case ADD_ITEMS:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };
  }
};

export default itemReducer;
