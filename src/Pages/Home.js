import React from "react";
import List from "../Components/Gifs/List";
import { Container, Title } from "./style";
const Home = () => {
  return (
    <>
      <Title> Last searches </Title>
      <Container>
        <List keyword="" />
      </Container>
    </>
  );
};

export default Home;
