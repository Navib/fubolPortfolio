import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./ListGroup.scss";
import ListGroupItem from "./ListGroupItem";

const defaultProps = {};
const propTypes = {
  className: PropTypes.any,
  children: PropTypes.any
};

const ListGroup = ({ children, className }) => {
  return (
    <ul className={classnames(className, styles.listGroup)}>
      <ListGroupItem button>Cras justo odio</ListGroupItem>
      <ListGroupItem anchor>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    </ul>
  );
};

ListGroup.defaultProps = defaultProps;
ListGroup.propTypes = propTypes;

export default ListGroup;
