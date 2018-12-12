import React from 'react';
import GridContainer from '../../Common/GridContainer';
import GridX from '../../Common/GridX';
import Cell from '../../Common/Cell';
import Button from '../../Common/Button';
import Anchor from '../../Common/Anchor';
import Jumbotron from '../../Common/Jumbotron';

const Home = () => {
  return (
    <GridContainer>
      <GridX gutters="grid-margin-x">
        Home page
        <Cell className="large-8">
          <Button>Ivan</Button>
        </Cell>
        <Cell cellSize="auto">
          <Anchor>Ivan</Anchor>
        </Cell>
        <Jumbotron
          title="test title"
          description="test description"
          lead="test lead"
          rounded
        />
      </GridX>
    </GridContainer>
  );
};

export default Home;
