import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux-immutable';
import { reducer as routeReducer } from './router';
import authReducer from './auth/duck';
import dashboardReducer from './top-songs/duck';
import userProfileReducer from './user-profile/duck';

const reducers = combineReducers({
  route: routeReducer,
  router: routerReducer,
  auth: authReducer,
  dashboard: dashboardReducer,
  userProfile: userProfileReducer
});

export default reducers;
