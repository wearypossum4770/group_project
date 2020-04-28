import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const intialState = {};
const middleware = [ReduxThunk];

const store = createStore(
  rootReducer,
  intialState,
  compose(applyMiddleware(...middleware))
);

export default store;
