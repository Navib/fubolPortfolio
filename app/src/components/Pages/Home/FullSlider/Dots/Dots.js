import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dots.scss';

const defaultProps = {};
const propTypes = {
  dots: PropTypes.any,
  labels: PropTypes.any
};

const Dots = ({ dots, labels }) => {
  console.log(dots);
  return (
    <React.Fragment>
      <div className={styles.listWrapper}>
        <ul style={{ margin: '0px' }} className={styles.dotListRow}>
          {dots}
        </ul>
      </div>
    </React.Fragment>
  );
};

Dots.defaultProps = defaultProps;
Dots.propTypes = propTypes;

export default Dots;
