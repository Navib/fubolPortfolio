import React from 'react';
import PropTypes from 'prop-types';
import GridContainer from '../../Common/GridContainer';

const defaultProps = {};
const propTypes = {
  children: PropTypes.any
};

const Bio = ({ children }) => {
  return <GridContainer>Bio Page</GridContainer>;
};

Bio.defaultProps = defaultProps;
Bio.propTypes = propTypes;

export default Bio;
