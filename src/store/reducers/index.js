import { combineReducers } from "redux";

import { courses } from "./courses";
import { user } from "./user";

const reducers = combineReducers({ courses, user });

export default reducers;
