import { SET_CURRENT_VIDEO, SET_TIME_UPDATE } from "../action-types/user";

const initialState = {
  currentVideo: {},
  timeUpdate: {},
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_VIDEO:
      return {
        ...state,
        currentVideo: action.payload,
        timeUpdate: {},
      };
    case SET_TIME_UPDATE:
      return {
        ...state,
        timeUpdate: action.payload,
      };
    default:
      return state;
  }
};
