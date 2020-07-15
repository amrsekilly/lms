import { SET_CURRENT_VIDEO, SET_TIME_UPDATE } from "../action-types/user";

// this function will dispatch the set current video
export const setCurrentVideo = (currentVideo) => ({
  type: SET_CURRENT_VIDEO,
  payload: currentVideo,
});

export const setTimeUpdate = (timeUpdate) => ({
  type: SET_TIME_UPDATE,
  payload: timeUpdate,
});
