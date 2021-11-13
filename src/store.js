import { createStore } from "redux";
import combineReducers from "./reducer";

const store = createStore(
  combineReducers,
  typeof window.window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

export default store;
