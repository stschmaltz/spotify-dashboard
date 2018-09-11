import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { GridItem, Card, CardHeader, CardBody, Table } from 'material-ui';
import { style } from './style';

const ResultsList = ({ listData, listHeaders, headerColour='warning'}) => {
  return (
    <Fragment>
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color={headerColour}>
            <h4 className={style.cardTitleWhite}>Top Listened To Songs</h4>
            <p className={style.cardCategoryWhite}>
              Time-Range: Maximum
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor={headerColour}
              tableHead={listHeaders}
              tableData={listData}
            />
          </CardBody>
        </Card>
      </GridItem>
    </Fragment>
  );
};
// "warning"

// ["ID", "Name", "Salary", "Country"]

// ["1", "Dakota Rice", "$36,738", "Niger"],
// ["2", "Minerva Hooper", "$23,789", "Curaçao"],
// ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
// ["4", "Philip Chaney", "$38,735", "Korea, South"]



export default ResultsList;