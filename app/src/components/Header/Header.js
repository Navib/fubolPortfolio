import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import GridContainer from "../Common/GridContainer";
import GridX from "../Common/GridX";
import Cell from "../Common/Cell";
import LinkTo from "../Common/LinkTo";
import styles from "./Header.scss";
import { IconContext } from "react-icons";
import { FaFutbol } from "react-icons/fa";

const defaultProps = {};
const propTypes = {
  children: PropTypes.any,
  className: PropTypes.any
};

const Header = ({ children, className }) => {
  return (
    <header>
      <GridContainer gridWidth="fluid">
        <GridX>
          <Cell cellSize="shrink">
            <LinkTo to="/" className={styles.navbarBrand}>
              Brand
            </LinkTo>
          </Cell>
          <Cell cellSize="auto">
            <ul className={styles.navList}>
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
          <Cell cellSize="shrink" className={styles.navIcon}>
            <IconContext.Provider
              value={{
                size: "1.5rem",
                className: "global-class-name"
              }}
            >
              <div>
                <FaFutbol />
              </div>
            </IconContext.Provider>
          </Cell>
        </GridX>
      </GridContainer>
    </header>
  );
};

Header.defaultProps = defaultProps;
Header.PropTypes = PropTypes;

export default Header;
