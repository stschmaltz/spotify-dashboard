import { put, take, takeLatest, select } from 'redux-saga/effects';
import dashboardReducer, { GET_MY_TOP_SONGS_REQUEST, doGetMyTopSongsSuccess } from './duck';
import { selectAccessToken } from '../auth/duck';
import SpotifyWebApi from 'spotify-web-api-js';

export function* handleGetMyTopSongsRequest(action) {
  const access_token = yield select(selectAccessToken);

  const spotifyApi = new SpotifyWebApi();
  yield spotifyApi.setAccessToken(access_token);

  const res = yield spotifyApi.getMyTopTracks({ time_range: 'long_term' });
  yield put(doGetMyTopSongsSuccess(res.items));
}

export default function* dashboardSaga() {
  yield takeLatest(GET_MY_TOP_SONGS_REQUEST, handleGetMyTopSongsRequest);
}
