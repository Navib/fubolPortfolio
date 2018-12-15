import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import GridContainer from './Common/GridContainer';
import GridX from './Common/GridX';
import Cell from './Common/Cell';

export default ({ children, history }) => {
  return (
    <GridContainer gridWidth="full">
      <GridX>
        <Header />
        <Cell className="large-8">{children}</Cell>
        <Cell className="large-2">Footer</Cell>
      </GridX>
    </GridContainer>
  );
};
