import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

// ***** Shared *****
export const selectUserFavourites = state => state.get('userFavourites');

// ***** Artists *****
export const GET_MY_TOP_ARTISTS_REQUEST =
  'top-artists/GET_MY_TOP_ARTISTS_REQUEST';
export const GET_MY_TOP_ARTISTS_ERROR = 'top-artists/GET_MY_TOP_ARTISTS_ERROR';
export const GET_MY_TOP_ARTISTS_SUCCESS =
  'top-artists/GET_MY_TOP_ARTISTS_SUCCESS';

export const doGetMyTopArtistsRequest = timeRange => ({
  type: GET_MY_TOP_ARTISTS_REQUEST,
  timeRange
});

export const doGetMyTopArtistsError = () => ({
  type: GET_MY_TOP_ARTISTS_ERROR
});

export const doGetMyTopArtistsSuccess = myTopArtists => ({
  type: GET_MY_TOP_ARTISTS_SUCCESS,
  myTopArtists
});

export const selectMyTopArtists = createSelector(
  selectUserFavourites,
  userFavourites => userFavourites.get('myTopArtists')
);

// ***** Songs *****
export const GET_MY_TOP_SONGS_REQUEST = 'top-songs/GET_MY_TOP_SONGS_REQUEST';
export const GET_MY_TOP_SONGS_ERROR = 'top-songs/GET_MY_TOP_SONGS_ERROR';

export const GET_MY_TOP_SONGS_SUCCESS_LONG =
  'top-songs/GET_MY_TOP_SONGS_SUCCESS_LONG';
export const GET_MY_TOP_SONGS_SUCCESS_SHORT =
  'top-songs/GET_MY_TOP_SONGS_SUCCESS_SHORT';
export const GET_MY_TOP_SONGS_SUCCESS_MEDIUM =
  'top-songs/GET_MY_TOP_SONGS_SUCCESS_MEDIUM';

export const doGetMyTopSongsRequest = timeRange => ({
  type: GET_MY_TOP_SONGS_REQUEST,
  timeRange
});

export const doGetMyTopSongsError = () => ({
  type: GET_MY_TOP_SONGS_ERROR
});

export const doGetMyTopSongsSuccess = (myTopSongs, timeRange) => {
  const type =
    timeRange === 'long_term'
      ? GET_MY_TOP_SONGS_SUCCESS_LONG
      : timeRange === 'medium_term'
        ? GET_MY_TOP_SONGS_SUCCESS_MEDIUM
        : GET_MY_TOP_SONGS_SUCCESS_SHORT;

  return {
    type,
    myTopSongs
  };
};

export const selectMyTopSongsLong = createSelector(
  selectUserFavourites,
  userFavourites => userFavourites.get('myTopSongsLong')
);

export const selectMyTopSongsMed = createSelector(
  selectUserFavourites,
  userFavourites => userFavourites.get('myTopSongsMed')
);

export const selectMyTopSongsShort = createSelector(
  selectUserFavourites,
  userFavourites => userFavourites.get('myTopSongsShort')
);

const initialState = fromJS({
  myTopSongsLong: [],
  myTopSongsMed: [],
  myTopSongsShort: [],
  myTopArtists: [],
  error: false
});

// ***** Reducer *****
const userFavouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_TOP_SONGS_SUCCESS_LONG:
      return state.set('myTopSongsLong', action.myTopSongs).set('error', false);
    case GET_MY_TOP_SONGS_SUCCESS_MEDIUM:
      return state.set('myTopSongsMed', action.myTopSongs).set('error', false);
    case GET_MY_TOP_SONGS_SUCCESS_SHORT:
      return state
        .set('myTopSongsShort', action.myTopSongs)
        .set('error', false);
    case GET_MY_TOP_SONGS_ERROR:
      return state.set('error', true);
    case GET_MY_TOP_ARTISTS_SUCCESS:
      return state.set('myTopArtists', action.myTopArtists).set('error', false);
    case GET_MY_TOP_ARTISTS_ERROR:
      return state.set('error', true);
    default:
      return state;
  }
};

export default userFavouritesReducer;
