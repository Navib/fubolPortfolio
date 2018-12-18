import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Cell from '../Common/Cell';
import styles from './Footer.scss';
import { IconContext } from 'react-icons';
import { FaFutbol } from 'react-icons/fa';

const defaultProps = {};
const propTypes = {
  className: PropTypes.any
};

const Footer = ({ className }) => {
  return (
    <footer
      className={classnames(
        styles.centerFlex,
        'cell large-1 medium-1 small-12'
      )}
    >
      <IconContext.Provider
        value={{
          size: '2.4rem',
          className: 'global-class-name'
        }}
      >
        <div>
          <FaFutbol />
        </div>
      </IconContext.Provider>
    </footer>
  );
};

export default Footer;
