import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

export const GET_MY_USER_PROFILE_REQUEST =
  'user-profile/GET_MY_USER_PROFILE_REQUEST';
export const GET_MY_USER_PROFILE_SUCCESS =
  'user-profile/GET_MY_USER_PROFILE_SUCCESS';
export const GET_MY_USER_PROFILE_ERROR =
  'user-profile/GET_MY_USER_PROFILE_ERROR';

export const doGetMyUserProfileRequest = () => ({
  type: GET_MY_USER_PROFILE_REQUEST
});
export const doGetMyUserProfileError = () => ({
  type: GET_MY_USER_PROFILE_ERROR
});
export const doGetMyUserProfileSuccess = myUserProfile => ({
  type: GET_MY_USER_PROFILE_SUCCESS,
  myUserProfile
});

export const selectUserProfile = state => state.get('userProfile');

export const selectCurrentUser = createSelector(selectUserProfile, profile =>
  profile.get('currentUser')
);

export const selectCurrentUsername = createSelector(
  selectUserProfile,
  profile => profile.get('currentUser').display_name
);

const initialState = fromJS({
  error: false,
  currentUser: {
    display_name: null
  }
});

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_USER_PROFILE_SUCCESS:
      return state.set('currentUser', action.myUserProfile).set('error', false);
    case GET_MY_USER_PROFILE_ERROR:
      return state.set('error', true);
    default:
      return state;
  }
};

export default userProfileReducer;
