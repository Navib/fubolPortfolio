import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import GridContainer from './Common/GridContainer';
import GridX from './Common/GridX';
import Cell from './Common/Cell';

export default ({ children, history }) => {
  return (
    <GridContainer gridWidth="fluid">
      <GridX>
        <Header />
        <Cell className="large-9 medium-9 small-12">{children}</Cell>
        <Footer />
      </GridX>
    </GridContainer>
  );
};
