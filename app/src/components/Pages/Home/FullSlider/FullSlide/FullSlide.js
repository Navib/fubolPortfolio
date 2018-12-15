import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Slide from '../../../../Common/Slider/Slide';
import Cell from '../../../../Common/Cell';
import styles from './FullSlide.scss';

const defaultProps = {
  headLine: 'HeadLine',
  lead: 'Lead Goes Here',
  backgroundColor: '#000',
  imageSrc: null
};

const propTypes = {
  children: PropTypes.any,
  headLine: PropTypes.any,
  lead: PropTypes.any,
  backgroundColor: PropTypes.any,
  imageSrc: PropTypes.any
};

const FullSlide = ({ headLine, lead, backgroundColor, imageSrc }) => {
  return (
    <Slide className={'grid-x'}>
      <Cell
        className={classnames(
          'large-12 medium-12 small-12',
          styles.slideHeight
        )}
      >
        <div className={styles.flexCenter}>
          <h1 className={styles.headLine}>{headLine}</h1>
          <h3 className={styles.lead}>{lead}</h3>
        </div>
      </Cell>
    </Slide>
  );
};

FullSlide.defaultProps = defaultProps;
FullSlide.propTypes = propTypes;

export default FullSlide;
