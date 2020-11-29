import React from "react";
import IconTrends from "../Icons/IconTrends";
import IconFavorite from "../Icons/IconFavorite";
import { NavbarC, Item } from "./style";
const Navbar = () => {
  return (
    <NavbarC>
      <Item to="/trends">
        <IconTrends width="17" heigth="17" stroke="#FF0578" />
        <p>Trends</p>
      </Item>
      <Item to="/favorites">
        <IconFavorite width="15" heigth="15" color="#942BE5" />
        <p>Favorites</p>
      </Item>
    </NavbarC>
  );
};

export default Navbar;
