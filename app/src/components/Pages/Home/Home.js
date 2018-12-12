import React from 'react';
import GridContainer from '../../Common/GridContainer';
import GridX from '../../Common/GridX';
import Button from '../../Common/Button';
import Anchor from '../../Common/Anchor';
import Jumbotron from '../../Common/Jumbotron';
import SimpleSlider from '../../Common/Slider';
import Slide from '../../Common/Slider/Slide';

const Home = () => {
  return (
    <GridContainer>
      <GridX gutters="grid-margin-x">Home page</GridX>
      <Button>Ivan</Button>
      <Anchor>Ivan</Anchor>
      <Jumbotron
        title="test title"
        description="test description"
        lead="test lead"
        rounded
      />
      <SimpleSlider
        dots={true}
        sliderTitle="Test Slider"
        infinite={false}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        <Slide>1</Slide>
        <Slide>2</Slide>
      </SimpleSlider>
    </GridContainer>
  );
};

export default Home;
