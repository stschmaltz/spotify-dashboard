import { put, takeEvery, select } from 'redux-saga/effects';
import SpotifyWebApi from 'spotify-web-api-js';
import { GET_MY_USER_PROFILE_REQUEST, doGetMyUserProfileSuccess } from './duck';
import { selectAccessToken } from '../auth/duck';

export function* handleGetMyUserProfile() {
  const accessToken = yield select(selectAccessToken);

  const spotifyApi = new SpotifyWebApi();

  yield spotifyApi.setAccessToken(accessToken);

  const userProfile = yield spotifyApi.getMe();

  console.log(userProfile);
  yield put(doGetMyUserProfileSuccess(userProfile));
}

export default function* topSongsSaga() {
  yield takeEvery(GET_MY_USER_PROFILE_REQUEST, handleGetMyUserProfile);
}
