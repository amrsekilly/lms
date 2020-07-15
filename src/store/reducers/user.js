import { SET_CURRENT_VIDEO } from "../action-types/user";

const initialState = {
  currentVideo: {},
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_VIDEO:
      return {
        ...state,
        currentVideo: action.payload,
      };
    default:
      return state;
  }
};
