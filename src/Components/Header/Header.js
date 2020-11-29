import React from "react";
import Navbar from '../Nav/Navbar'
import { ContainerH, Logo } from "./style";
const Header = () => {
  return (
    <>
      <ContainerH>
        <Logo to="/">Giffinder</Logo>
        <Navbar/>
      </ContainerH>
    </>
  );
};

export default Header;
