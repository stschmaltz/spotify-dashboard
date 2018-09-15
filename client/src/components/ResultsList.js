import React from 'react';
import {
  Card,
  CardHeader,
  TableHead,
  Table,
  TableCell,
  TableRow,
  TableBody
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { style } from './style';

const ResultsList = ({
  listTitle,
  listData,
  listDataFunction,
  listHeaders,
  classes,
  headerColor = 'Red'
}) => {
  const headerCells = listHeaders.map(header => (
    <TableCell key={header}>{header}</TableCell>
  ));
  const cardHeaderStyle = `cardHeader${headerColor}`;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          className={classes[cardHeaderStyle]}
          classes={{ title: classes.title }}
          title={listTitle}
        />
        <Table>
          <TableHead>
            <TableRow>{headerCells}</TableRow>
          </TableHead>
          <TableBody>{listDataFunction(listData)}</TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default withStyles(style)(ResultsList);
