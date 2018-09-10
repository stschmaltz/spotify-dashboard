import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux-immutable';
import { reducer as routeReducer } from './router';
import authReducer from './auth/duck';
import dashboardReducer from './dashboard/duck';

const reducers = combineReducers({
  route: routeReducer,
  router: routerReducer,
  auth: authReducer,
  dashboard: dashboardReducer,
});

export default reducers;
