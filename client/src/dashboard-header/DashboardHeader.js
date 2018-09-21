import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { compose, pure, lifecycle } from 'recompose';
import { style } from './style';
import withConnect from './withConnect';

const withGetUserProfile = lifecycle({
  componentDidMount() {
    const { getUserProfile } = this.props;

    getUserProfile();
  }
});

const DashboardHeader = ({ /*username,*/ classes }) => {
  // const firstName = username ? username.split(' ')[0] : null;
  // const headerTitle = firstName
  //   ? `${firstName}
  // 's Dashboard`:
  const headerTitle = 'Spotify Dashboard';

  return (
    <div className={classes.header}>
      <Typography
        className={classes.header}
        align="left"
        color="textPrimary"
        gutterBottom
      >
        {headerTitle}
      </Typography>
    </div>
  );
};

export default compose(
  pure,
  withStyles(style),
  withConnect,
  withGetUserProfile
)(DashboardHeader);
