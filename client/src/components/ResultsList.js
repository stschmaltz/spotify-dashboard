import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
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
    <Fragment>
      <Card className={classes.cardStyle}>
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
    </Fragment>
  );
};

export default withStyles(style)(ResultsList);
