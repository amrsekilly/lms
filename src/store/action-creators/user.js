import { SET_CURRENT_VIDEO } from "../action-types/user";

// this function will dispatch the set current video
export const setCurrentVideo = (currentVideo) => ({
  type: SET_CURRENT_VIDEO,
  payload: currentVideo,
});
