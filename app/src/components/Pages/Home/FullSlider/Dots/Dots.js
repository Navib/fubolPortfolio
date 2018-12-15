import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dots.scss';

const defaultProps = {};
const propTypes = {
  dots: PropTypes.any,
  labels: PropTypes.any
};

const Dots = ({ dots, labels }) => {
  return (
    <React.Fragment>
      <div
        style={{
          padding: '0px 20px 0px 8px',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'auto',
          bottom: '2.5rem'
        }}
      >
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
