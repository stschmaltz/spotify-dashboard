import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

export const SAVE_ACCESS_TOKEN = 'spotify-dashboard/auth/SAVE_ACCESS_TOKEN';

export const doSaveAccessToken = accessToken => ({
  type: SAVE_ACCESS_TOKEN,
  accessToken,
});

export const selectAuth = state => state.get('auth');

export const selectAccessToken = createSelector(selectAuth, auth =>
  auth.get('accessToken'),
);

const initialState = fromJS({
  accessToken: null,
});

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ACCESS_TOKEN:
      return state.set('accessToken', action.accessToken);
    default:
      return state;
  }
};

export default authReducer;
