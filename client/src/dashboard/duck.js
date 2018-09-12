import { createSelector } from "reselect";
import { fromJS } from "immutable";

export const GET_MY_TOP_SONGS_ERROR = "ti/Auth/GET_MY_TOP_SONGS_ERROR";
export const GET_MY_TOP_SONGS_REQUEST = "ti/Auth/GET_MY_TOP_SONGS_REQUEST";

export const GET_MY_TOP_SONGS_SUCCESS_LONG =
  "ti/Auth/GET_MY_TOP_SONGS_SUCCESS_LONG";
export const GET_MY_TOP_SONGS_SUCCESS_SHORT =
  "ti/Auth/GET_MY_TOP_SONGS_SUCCESS_SHORT";
export const GET_MY_TOP_SONGS_SUCCESS_MEDIUM =
  "ti/Auth/GET_MY_TOP_SONGS_SUCCESS_MEDIUM";

export const doGetMyTopSongsRequest = timeRange => ({
  type: GET_MY_TOP_SONGS_REQUEST,
  timeRange
});
export const doGetMyTopSongsError = () => ({
  type: GET_MY_TOP_SONGS_ERROR
});
export const doGetMyTopSongsSuccess = (myTopSongs, timeRange) => {
  const type =
    timeRange === "long_term"
      ? GET_MY_TOP_SONGS_SUCCESS_LONG
      : timeRange === "medium_term"
        ? GET_MY_TOP_SONGS_SUCCESS_MEDIUM
        : GET_MY_TOP_SONGS_SUCCESS_SHORT;
  return {
    type: type,
    myTopSongs
  };
};

export const selectDashboard = state => state.get("dashboard");

export const selectMyTopSongsLong = createSelector(selectDashboard, dashboard =>
  dashboard.get("myTopSongsLong")
);
export const selectMyTopSongsMed = createSelector(selectDashboard, dashboard =>
  dashboard.get("myTopSongsMed")
);
export const selectMyTopSongsShort = createSelector(selectDashboard, dashboard =>
  dashboard.get("myTopSongsShort")
);

const initialState = fromJS({
  myTopSongsLong: [],
  myTopSongsMed: [],
  myTopSongsShort: [],
  error: false
});

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_TOP_SONGS_SUCCESS_LONG:
      return state.set("myTopSongsLong", action.myTopSongs).set("error", false);
    case GET_MY_TOP_SONGS_SUCCESS_MEDIUM:
      return state.set("myTopSongsMed", action.myTopSongs).set("error", false);
    case GET_MY_TOP_SONGS_SUCCESS_SHORT:
      return state.set("myTopSongsShort", action.myTopSongs).set("error", false);
    case GET_MY_TOP_SONGS_ERROR:
      return state.set("error", true);
    default:
      return state;
  }
};

export default dashboardReducer;
