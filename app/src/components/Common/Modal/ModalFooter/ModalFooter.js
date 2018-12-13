import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalFooter.scss';

const defaultProps = {
  children: 'Body Content'
};
const propTypes = {
  children: PropTypes.any
};

const ModalFooter = ({ children }) => {
  return (
    <div className={styles.modalFooter}>
      <button type="button" className="btn btn-secondary" data-dismiss="modal">
        Close
      </button>
      <button type="button" className="btn btn-primary">
        Save changes
      </button>
    </div>
  );
};

ModalFooter.defaultProps = defaultProps;
ModalFooter.propTypes = propTypes;

export default ModalFooter;
