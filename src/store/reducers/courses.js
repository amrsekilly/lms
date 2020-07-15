import { SET_COURSES } from "../action-types/courses";

const initialState = {
  courses: [],
};

export const courses = (state = initialState, action) => {
  switch (action.type) {
    case SET_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    default:
      return state;
  }
};
