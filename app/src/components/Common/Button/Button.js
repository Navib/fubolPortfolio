import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Button.scss';

const defaultProps = {};
const propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  role: PropTypes.any,
  onClick: PropTypes.any,
  href: PropTypes.any
};

const Button = ({ children, className, role, onClick, href }) => {
  return (
    <button
      className={classnames(styles.buttonBase, className)}
      role={role}
      onClick={onClick}
      href={href}
    >
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export default Button;
