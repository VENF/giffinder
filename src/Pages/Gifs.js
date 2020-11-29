import React from "react";
import { useParams } from "react-router-dom";
import List from "../Components/Gifs/List";
import { Container } from "./style";
const Gifs = () => {
  const { keyword } = useParams();
  return (
    <>
      <Container>
        <List keyword={keyword} />
      </Container>
    </>
  );
};

export default Gifs;
