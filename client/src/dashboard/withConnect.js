import { doSaveAccessToken, selectAccessToken } from '../auth/duck';
import { doGetMyTopSongsRequest, selectMyTopSongs } from './duck';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  saveAccessToken: (accessToken) => {
    dispatch(doSaveAccessToken(accessToken));
  },
  getMyTopSongs: () => {
    dispatch(doGetMyTopSongsRequest());
  }
});

const mapStateToProps = createStructuredSelector({
  accessToken: selectAccessToken,
  myTopSongs: selectMyTopSongs
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default withConnect;
