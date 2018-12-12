import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import GridX from '../GridX';
import Cell from '../Cell';
import styles from './Jumbotron.scss';

const defaultProps = {};
const propTypes = {
  title: PropTypes.string,
  lead: PropTypes.string,
  description: PropTypes.string,
  rounded: PropTypes.bool,
  className: PropTypes.any
};

const Jumbotron = ({ title, lead, description, rounded, className }) => {
  return (
    <GridX>
      <Cell
        className={classnames(
          'large-12',
          styles.jumbotronBase,
          rounded ? styles.roundedCorners : null,
          className
        )}
      >
        <h1>{title}</h1>
        <p>{lead}</p>
        <hr className={styles.horizontalRule} />
        <p>{description}</p>
      </Cell>
    </GridX>
  );
};

Jumbotron.defaultProps = defaultProps;
Jumbotron.propTypes = propTypes;

export default Jumbotron;
