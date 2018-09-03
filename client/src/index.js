import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import theme from './theme';

import AppContainer from './App';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './router';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const App = (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <AppContainer />
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
