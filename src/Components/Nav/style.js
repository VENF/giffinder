import styled from "@emotion/styled";
import { Link } from "react-router-dom";
export const NavbarC = styled.div({
  position: "absolute",
  top: "3px",
  left: "70%",
  display: "flex",
  "@media (max-width: 420px)": {
    left: "0%",
    width: '100%',
    justifyContent: 'space-between',
    padding: '0px 5px'
  },
});
export const Item = styled(Link)({
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  margin: "0px 5px",
  transition: "all ease .3s",
  ":hover": {
    transform: "translateY(-3px)",
  },
  p: {
    fontSize: "13px",
    color: "#FFF",
  },
});
