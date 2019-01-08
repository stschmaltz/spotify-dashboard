import React, { Component } from 'react';
import qs from 'query-string';
import { withStyles } from '@material-ui/core';
import { compose, pure } from 'recompose';
import withConnect from './withConnect';
import DashboardMainContent from '../dashboard-main-content';
import DashboardHeader from '../dashboard-header';
import { style } from './style';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    const { saveAccessToken } = this.props;
    const queryString = qs.parse(window.location.hash);

    const accessToken = queryString.access_token;

    if (accessToken) {
      saveAccessToken(accessToken);
    }
    this.state = {
      loggedIn: !!accessToken,
    };
  }

  render() {
    const { loggedIn } = this.state;

    return (
      <div className="Dashboard">
        <div>
          <DashboardHeader />
          {!loggedIn && (
            <a href="http://localhost:8888/login">
              Log Into Spotify on the Server
            </a>
          )}
          {loggedIn && (
            <div>
              <DashboardMainContent />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default compose(
  pure,
  withStyles(style),
  withConnect,
)(Dashboard);
