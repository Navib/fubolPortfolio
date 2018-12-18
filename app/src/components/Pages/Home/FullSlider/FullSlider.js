import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SimpleSlider from '../../../Common/Slider';
import Cell from '../../../Common/Cell';
import FullSlide from './FullSlide';
import Dots from './Dots';
import styles from './FullSlider.scss';
import newProps from './props';

const defaultProps = {
  slides: newProps.slides
};
const propTypes = {
  children: PropTypes.any,
  slides: PropTypes.any
};

class FullSlider extends Component {
  componentDidMount() {}

  renderSlides() {
    return this.props.slides.map(slide => {
      return (
        <FullSlide
          backgroundColor={slide.backgroundColor}
          headLine={slide.headLine}
          lead={slide.lead}
          key={slide.id}
        />
      );
    });
  }

  renderDots(dots, labels) {
    return <Dots dots={dots} labels={labels} />;
  }

  render() {
    return (
      <SimpleSlider
        dots={true}
        infinite={false}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        appendDots={dots => this.renderDots(dots, this.props.slides)}
      >
        {this.renderSlides()}
      </SimpleSlider>
    );
  }
}

FullSlider.defaultProps = defaultProps;
FullSlider.propTypes = propTypes;

export default FullSlider;
