import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as routeReducer } from './router';

const reducers = combineReducers({
  route: routeReducer,
  router: routerReducer,
});

export default reducers;