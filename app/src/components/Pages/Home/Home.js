import React from 'react';
import GridContainer from '../../Common/GridContainer';
import GridX from '../../Common/GridX';
import FullSlider from './FullSlider';

const Home = () => {
  return (
    <GridContainer gridWidth="full" className="overFlowHidden">
      <FullSlider />
    </GridContainer>
  );
};

export default Home;
