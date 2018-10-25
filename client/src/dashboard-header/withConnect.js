import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  doGetMyUserProfileRequest,
  selectCurrentUsername,
} from '../user-profile/duck';

const mapDispatchToProps = dispatch => ({
  getUserProfile: () => {
    dispatch(doGetMyUserProfileRequest());
  },
});

const mapStateToProps = createStructuredSelector({
  username: selectCurrentUsername,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect;
