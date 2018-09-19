import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { doSaveAccessToken, selectAccessToken } from '../auth/duck';
import {
  doGetMyTopSongsRequest,
  doGetMyTopArtistsRequest,
  selectMyTopSongsLong,
  selectMyTopSongsMed,
  selectMyTopSongsShort,
  selectMyTopArtists
} from '../user-favourites/duck';

const mapDispatchToProps = dispatch => ({
  saveAccessToken: accessToken => {
    dispatch(doSaveAccessToken(accessToken));
  },
  getMyTopSongs: () => {
    dispatch(doGetMyTopSongsRequest('long_term'));
    dispatch(doGetMyTopSongsRequest('medium_term'));
    dispatch(doGetMyTopSongsRequest('short_term'));
  },
  getMyTopArtists: () => {
    dispatch(doGetMyTopArtistsRequest());
  }
});

const mapStateToProps = createStructuredSelector({
  accessToken: selectAccessToken,
  myTopSongsLong: selectMyTopSongsLong,
  myTopSongsMed: selectMyTopSongsMed,
  myTopSongsShort: selectMyTopSongsShort,
  myTopArtists: selectMyTopArtists
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default withConnect;
