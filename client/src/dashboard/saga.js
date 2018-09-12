import { put, take, takeEvery, select } from "redux-saga/effects";
import dashboardReducer, {
  GET_MY_TOP_SONGS_REQUEST,
  doGetMyTopSongsSuccess
} from "./duck";
import { selectAccessToken } from "../auth/duck";
import SpotifyWebApi from "spotify-web-api-js";

export function* handleGetMyTopSongsRequest(action) {
  const access_token = yield select(selectAccessToken);

  const spotifyApi = new SpotifyWebApi();
  yield spotifyApi.setAccessToken(access_token);

  const res = yield spotifyApi.getMyTopTracks({ time_range: action.timeRange});
  const topSongs = mapTopSongs(res.items);

  yield put(doGetMyTopSongsSuccess(topSongs, action.timeRange));
}
const mapTopSongs = topSongs => {
  const songs = [...topSongs].slice(0,5);
  return songs.map(song => ({
    song: song.name,
    artist: joinArtistsToString(song.artists),
    album: song.album.name
  }));
};
const joinArtistsToString = artists =>
  artists.map(artist => artist.name).join(", ");

export default function* dashboardSaga() {
  yield takeEvery(GET_MY_TOP_SONGS_REQUEST, handleGetMyTopSongsRequest);
}
