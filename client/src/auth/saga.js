import { takeLatest } from 'redux-saga/effects';
import { SAVE_ACCESS_TOKEN } from './duck';

export function* handleSaveAccessToken() {}

export default function* authSage() {
  yield takeLatest(SAVE_ACCESS_TOKEN, handleSaveAccessToken);
}
