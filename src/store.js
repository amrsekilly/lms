import { createStore, combineReducers } from "redux";
import { courses } from "./store/reducers/courses";

const reducers = combineReducers({ courses });
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
