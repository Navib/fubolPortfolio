import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Anchor.scss';

const defaultProps = {};
const propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  href: PropTypes.any,
  target: PropTypes.oneOf(['_blank', '_parent', '_self', '_top']),
  rel: PropTypes.oneOf([
    'alternate',
    'author',
    'bookmark',
    'external',
    'help',
    'license',
    'next',
    'nofollow',
    'noreferrer',
    'noopener',
    'prev',
    'search',
    'tag'
  ])
};

const Anchor = ({ children, className, href, target, rel }) => {
  return (
    <a
      href={href}
      target={target}
      className={classnames(styles.anchorBase, className)}
      rel={rel}
    >
      {children}
    </a>
  );
};

Anchor.defaultProps = defaultProps;
Anchor.propTypes = propTypes;

export default Anchor;
