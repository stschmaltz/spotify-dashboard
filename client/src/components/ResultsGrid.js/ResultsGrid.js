import React from 'react';
import { Card, CardHeader, GridList } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { style } from './style';

const ResultsGrid = ({
  listTitle,
  listData,
  listDataFunction,
  classes,
  headerColor = 'Red'
}) => {
  const cardHeaderStyle = `cardHeader${headerColor}`;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          className={classes[cardHeaderStyle]}
          style={{ marginBottom: '1em' }}
          classes={{ title: classes.title }}
          title={listTitle}
        />
        <GridList cellHeight={180}>{listDataFunction(listData)}</GridList>
      </Card>
    </div>
  );
};

export default withStyles(style)(ResultsGrid);