import React from "react";
import GridContainer from "../../Common/GridContainer";
import GridX from "../../Common/GridX";
import Cell from "../../Common/Cell";
import Button from "../../Common/Button";
import Anchor from "../../Common/Anchor";
import Jumbotron from "../../Common/Jumbotron";
import SimpleSlider from "../../Common/Slider";
import Slide from "../../Common/Slider/Slide";
import Alert from "../../Common/Alert";
import ListGroup from "../../Common/ListGroup";
import ListGroupItem from "../../Common/ListGroup/ListGroupItem";

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
      <Alert variation="success" alertHeading="test alert title">
        Alert
      </Alert>
      <ListGroup>
        <ListGroupItem button>Cras justo odio</ListGroupItem>
        <ListGroupItem anchor>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      </ListGroup>
    </GridContainer>
  );
};

export default Home;
