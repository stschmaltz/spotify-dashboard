import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

export const GET_MY_TOP_SONGS_ERROR = 'ti/Auth/GET_MY_TOP_SONGS_ERROR';
export const GET_MY_TOP_SONGS_SUCCESS = 'ti/Auth/GET_MY_TOP_SONGS_SUCCESS';
export const GET_MY_TOP_SONGS_REQUEST = 'ti/Auth/GET_MY_TOP_SONGS_REQUEST';



export const doGetMyTopSongsRequest = () => ({
  type: GET_MY_TOP_SONGS_REQUEST,
});
export const doGetMyTopSongsError = () => ({
  type: GET_MY_TOP_SONGS_ERROR,
});
export const doGetMyTopSongsSuccess = (myTopSongs) => ({
  type: GET_MY_TOP_SONGS_SUCCESS,
  myTopSongs
});
export const selectDashboard = (state) => state.get('dashboard');

export const selectMyTopSongs = createSelector(
  selectDashboard,
  (dashboard) => dashboard.get('myTopSongs')
);

const initialState = fromJS({
  myTopSongs: [],
  error: false
});

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_TOP_SONGS_SUCCESS:
      return state.set('myTopSongs', action.myTopSongs).set('error', false);
    case GET_MY_TOP_SONGS_ERROR:
      return state
        .set('error', true);  
    default:
      return state;
  }
};
  
export default dashboardReducer;
  