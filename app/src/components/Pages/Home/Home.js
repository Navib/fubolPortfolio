import React from 'react';
import GridContainer from '../../Common/GridContainer';
import GridX from '../../Common/GridX';
import Button from '../../Common/Button';
import Anchor from '../../Common/Anchor';
import Jumbotron from '../../Common/Jumbotron';

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
      />
    </GridContainer>
  );
};

export default Home;
