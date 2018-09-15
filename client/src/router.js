import { fromJS } from 'immutable';
import createBrowserHistory from 'history/createBrowserHistory';
import { routerMiddleware, LOCATION_CHANGE } from 'react-router-redux';

export const history = createBrowserHistory();
export default routerMiddleware(history);

const initialState = fromJS({
  location: null
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload
      });
    default:
      return state;
  }
};
