import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { doSaveAccessToken, selectAccessToken } from '../auth/duck';
import {
  doGetMyTopSongsRequest,
  selectMyTopSongsLong,
  selectMyTopSongsMed,
  selectMyTopSongsShort
} from '../top-songs/duck';

const mapDispatchToProps = dispatch => ({
  saveAccessToken: accessToken => {
    dispatch(doSaveAccessToken(accessToken));
  },
  getMyTopSongs: () => {
    dispatch(doGetMyTopSongsRequest('long_term'));
    dispatch(doGetMyTopSongsRequest('medium_term'));
    dispatch(doGetMyTopSongsRequest('short_term'));
  }
});

const mapStateToProps = createStructuredSelector({
  accessToken: selectAccessToken,
  myTopSongsLong: selectMyTopSongsLong,
  myTopSongsMed: selectMyTopSongsMed,
  myTopSongsShort: selectMyTopSongsShort
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default withConnect;
