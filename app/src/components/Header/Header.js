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
import SlideOut from '../Common/SlideOut';

const defaultProps = {};
const propTypes = {
  children: PropTypes.any,
  className: PropTypes.any
};

const Links = () => {
  return (
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
  );
};

const Header = ({ children, className }) => {
  return (
    <header className={(styles.headerBorder, 'cell large-2 medium-2 small-12')}>
      <GridX className={styles.flexColumn}>
        <Cell>
          <SlideOut className={styles.navButton}>{Links()}</SlideOut>
        </Cell>
        <Cell>
          <LinkTo to="/" className={styles.navbarBrand}>
            LMCW
          </LinkTo>
        </Cell>
      </GridX>
    </header>
  );
};

Header.defaultProps = defaultProps;
Header.PropTypes = PropTypes;

export default Header;
