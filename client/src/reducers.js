import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux-immutable';
import { reducer as routeReducer } from './router';
import authReducer from './auth/duck';
import userFavouritesReducer from './user-favourites/duck';
import userProfileReducer from './user-profile/duck';

const reducers = combineReducers({
  route: routeReducer,
  router: routerReducer,
  auth: authReducer,
  userFavourites: userFavouritesReducer,
  userProfile: userProfileReducer
});

export default reducers;
