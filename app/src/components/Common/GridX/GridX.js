import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const defaultProps = {};

const propTypes = {
  className: PropTypes.any,
  children: PropTypes.any,
  gutters: PropTypes.oneOf(['grid-margin-x', 'grid-padding-x'])
};

const GridX = ({ className, children, gutters }) => {
  return (
    <div className={classnames('grid-x', className, gutters)}>{children}</div>
  );
};

GridX.defaultProps = defaultProps;
GridX.propTypes = propTypes;

export default GridX;
