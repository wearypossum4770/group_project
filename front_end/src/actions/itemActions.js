import axios from "axios";
import {
  GET_ITEMS,
  ADD_ITEMS,
  DELETE_ITEM,
  ITEMS_LOADING,
} from "./actionTypes";

export const setItemLoading = () => ({ type: ITEMS_LOADING });

export const getItems = () => (dispatch) => {
  dispatch(setItemLoading);
  axios.get("/api/items").then((res) =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data,
    })
  );
};

export const addItem = (item) => (dispatch) => {
  axios.post("/api/items", item).then((res) =>
    dispatch({
      type: ADD_ITEMS,
      payload: res.data,
    })
  );
};

export const deleteItem = () => ({
  type: DELETE_ITEM,
  // payload: id
});
