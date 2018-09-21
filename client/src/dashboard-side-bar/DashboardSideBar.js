import React from 'react';
import { Typography, Drawer } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { compose, pure } from 'recompose';
import { style } from './style';

const DashboardSideBar = () => (
  <div>
    <Drawer
      
      variant="permanent"
      anchor="left"
    >
      <div style={{width: 450}}>Shane</div>
    </Drawer>
  </div>
);

export default compose(
  pure,
  withStyles(style)
)(DashboardSideBar);
