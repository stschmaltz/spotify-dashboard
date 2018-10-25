import { put, takeEvery, select } from 'redux-saga/effects';
import SpotifyWebApi from 'spotify-web-api-js';
import {
  GET_MY_TOP_SONGS_REQUEST,
  GET_MY_TOP_ARTISTS_REQUEST,
  doGetMyTopSongsSuccess,
  doGetMyTopArtistsSuccess,
} from './duck';
import { selectAccessToken } from '../auth/duck';

export function* handleGetMyTopSongsRequest(action) {
  const accessToken = yield select(selectAccessToken);

  const spotifyApi = new SpotifyWebApi();

  yield spotifyApi.setAccessToken(accessToken);

  const res = yield spotifyApi.getMyTopTracks({ time_range: action.timeRange });
  const topSongs = mapTopSongs(res.items);

  yield put(doGetMyTopSongsSuccess(topSongs, action.timeRange));
}
const mapTopSongs = topSongs => {
  const songs = [...topSongs]; //.slice(0, 5);

  return songs.map(song => ({
    song: song.name,
    artist: joinArtistsToString(song.artists),
    album: song.album.name,
  }));
};
const joinArtistsToString = artists =>
  artists.map(artist => artist.name).join(', ');

export function* handleGetMyTopArtistsRequest(action) {
  const accessToken = yield select(selectAccessToken);

  const spotifyApi = new SpotifyWebApi();

  yield spotifyApi.setAccessToken(accessToken);

  const res = yield spotifyApi.getMyTopArtists({ time_range: 'long_term' });
  const topArtists = mapTopArtists(res.items);

  yield put(doGetMyTopArtistsSuccess(topArtists, action.timeRange));
}
const mapTopArtists = topArtists => {
  const artists = [...topArtists]; // .slice(0, 10);

  return artists.map(artist => ({
    name: artist.name,
    image: artist.images[0].url,
  }));
};

export default function* topSongsSaga() {
  yield takeEvery(GET_MY_TOP_SONGS_REQUEST, handleGetMyTopSongsRequest);
  yield takeEvery(GET_MY_TOP_ARTISTS_REQUEST, handleGetMyTopArtistsRequest);
}
