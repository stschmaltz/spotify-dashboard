import React from 'react';
import ReactGA from 'react-ga';
import ReactDOM from 'react-dom';
import './index.css';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import store from './store';
import theme from './theme';

import Dashboard from './dashboard';
import registerServiceWorker from './registerServiceWorker';
import { history } from './router';

const App = (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <Dashboard />
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
