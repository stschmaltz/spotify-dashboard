import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../user-profile/duck';

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect;
