import styled from "@emotion/styled";
import { dark } from "../../styles/colors";
import { Link } from 'react-router-dom'
export const ContainerH = styled.div({
  marginTop: "10px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: 'relative',
});

export const Logo = styled(Link)({
  fontSize: "1.2em",
  color: dark,
  fontFamily: "'Poppins', sans-serif",
  textDecoration: 'none'
});
