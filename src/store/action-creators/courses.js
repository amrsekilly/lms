import { SET_COURSES } from "../action-types/courses";

export const setCourses = (courses) => ({
  type: SET_COURSES,
  payload: courses,
});
