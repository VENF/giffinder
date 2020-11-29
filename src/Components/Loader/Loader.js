import React from "react";
import { ContainerLoader, Spinner, Border } from "./style";
const Loader = () => {
  return (
    <ContainerLoader>
      <Border>
        <Spinner></Spinner>
      </Border>
    </ContainerLoader>
  );
};

export default Loader;
