import React from 'react';
import { Paper, Drawer, Avatar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { compose, pure } from 'recompose';
import withConnect from './withConnect';
// import { style } from './style';

export const style = {
  avatar: {
    height: '10em',
    width: '10em',
  },
  drawerPaper: {
    background: 'linear-gradient(60deg, #ab47bc, #8e24aa)',
    maxWidth: '300',
  },
  sideBarWrapper: {
    overflow: 'hidden',

    // position: 'relative',
    // height: '100vh',
    // overflow: 'auto',
    // // zIndex: "4",
    // overflowScrolling: 'touch'
  },
  paper: {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    boxShadow: '1px 1px 3px 0px rgba(0,0,0,0.51)',
    overflowScrolling: 'touch',
    backgroundColor: 'rgb(255, 255, 255, 0.7)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  userNameHeadline: {
    fontSize: '2.5em',
    // color: 'white',
    margin: '0.7em',
  },
};

const DashboardSideBar = ({ classes, currentUser }) => {
  const userName = currentUser ? currentUser.display_name : '';
  const userImage = currentUser.images ? currentUser.images[0].url : '';

  return (
    <div style={{ width: 450 }}>
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="permanent"
        anchor="left"
        open
      >
        <div className={classes.sideBarWrapper}>
          <Paper style={{ width: '100%' }} className={classes.paper}>
            <Avatar className={classes.avatar}>
              {<img src={userImage} alt={userName} />}
            </Avatar>
            <Typography variant="headline" className={classes.userNameHeadline}>
              {userName}
            </Typography>
          </Paper>
        </div>
      </Drawer>
    </div>
  );
};

export default compose(
  pure,
  withConnect,
  withStyles(style),
)(DashboardSideBar);
