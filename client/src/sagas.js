import tsSaga from './top-songs/saga';
import authSaga from './auth/saga';

export const topSongsSaga = tsSaga;
export const authorizationSaga = authSaga;

export default {
  topSongsSaga: tsSaga,
  authorizationSaga: authSaga
};
