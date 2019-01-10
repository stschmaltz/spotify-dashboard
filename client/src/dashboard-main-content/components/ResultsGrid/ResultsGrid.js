import React from 'react';
import { Card, CardHeader, GridList } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './style';

const ResultsGrid = ({
  listTitle,
  listData,
  listDataFunction,
  classes,
  headerColor = 'Red',
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
        <GridList className={classes.list}>
          {listDataFunction(listData)}
        </GridList>
      </Card>
    </div>
  );
};

export default withStyles(styles)(ResultsGrid);
