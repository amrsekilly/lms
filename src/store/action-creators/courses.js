import axios from "axios";
import ReduxThunk from "redux-thunk";
import { SET_COURSES } from "../action-types/courses";

export const setCourses = (courses) => ({
  type: SET_COURSES,
  payload: courses,
});

export const getCourses = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3000/courses")
      .then((res) => dispatch(setCourses(res.data)));
  };
};
