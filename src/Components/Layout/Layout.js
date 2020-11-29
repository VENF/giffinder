import React from "react";
import { Container, Content } from "./style";
const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Content>{children}</Content>
      </Container>
    </>
  );
};

export default Layout;
