import React from "react";
import useTrending from "../../Hooks/useTrending";
import { Container, Tag, ContainerLoader } from "./style";
import Loader from "../Loader/Loader";
const Trends = () => {
  const { trends, loading } = useTrending();
  return (
    <>
      {!loading && (
        <Container>
          {trends.map((trend, i) => {
            return (
              <Tag to={`/gifs/${trend}`} key={i}>
                {" "}
                {trend}{" "}
              </Tag>
            );
          })}
        </Container>
      )}
      {loading && (
        <ContainerLoader>
          <Loader />
        </ContainerLoader>
      )}
    </>
  );
};

export default Trends;
