import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { compose, pure, lifecycle } from 'recompose';
import withWidth from '@material-ui/core/withWidth';
import { styles } from './style';
import withConnect from './withConnect';

const withGetUserProfile = lifecycle({
  componentDidMount() {
    const { getUserProfile } = this.props;

    getUserProfile();
  },
});

const DashboardHeader = ({ username, classes }) => {
  const firstName = username ? username.split(' ')[0] : null;
  const headerTitle = firstName
    ? `${firstName}'s Dashboard`
    : 'Spotify Dashboard';
  // const headerTitle = 'Spotify Dashboard';

  return (
    <div>
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
  withWidth(),
  withStyles(styles),
  withConnect,
  withGetUserProfile,
)(DashboardHeader);
