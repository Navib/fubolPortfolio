import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import GridContainer from '../Common/GridContainer';
import GridX from '../Common/GridX';
import Cell from '../Common/Cell';
import LinkTo from '../Common/LinkTo';
import styles from './Header.scss';
import { IconContext } from 'react-icons';
import { FaFutbol } from 'react-icons/fa';

const defaultProps = {};
const propTypes = {
  children: PropTypes.any,
  className: PropTypes.any
};

const Header = ({ children, className }) => {
  return (
    <header className={(styles.headerBorder, 'cell large-2')}>
      <GridX className={styles.flexColumn}>
        <Cell>
          <LinkTo to="/" className={styles.navbarBrand}>
            LMCW
          </LinkTo>
        </Cell>
        <Cell>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <LinkTo to="/" className={styles.navLink}>
                Home
              </LinkTo>
            </li>
            <li className={styles.navItem}>
              <LinkTo to="/admin" className={styles.navLink}>
                Admin
              </LinkTo>
            </li>
            <li>
              <LinkTo to="/demo" className={styles.navLink}>
                Demo
              </LinkTo>
            </li>
          </ul>
        </Cell>
        <Cell className={styles.navIcon}>
          <IconContext.Provider
            value={{
              size: '1.5rem',
              className: 'global-class-name'
            }}
          >
            <div>
              <FaFutbol />
            </div>
          </IconContext.Provider>
        </Cell>
      </GridX>
    </header>
  );
};

Header.defaultProps = defaultProps;
Header.PropTypes = PropTypes;

export default Header;
