import { applyMiddleware, createStore, compose } from 'redux';
import reduxSaga from 'redux-saga';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import router from './router';
import sagas from './sagas';

const sagaMiddleware = reduxSaga();

let middlewares = [sagaMiddleware, router];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger();

  middlewares = [...middlewares, logger];
}

const enhancers = [applyMiddleware(...middlewares)];
// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // TODO Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
        // Prevent recomputing reducers for `replaceReducer`
        shouldHotReload: false,
      })
    : compose;
/* eslint-enable */

const store = createStore(reducers, composeEnhancers(...enhancers));

Object.keys(sagas).forEach(saga => {
  sagaMiddleware.run(sagas[saga]);
});

export default store;
