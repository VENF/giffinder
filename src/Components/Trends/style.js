import styled from "@emotion/styled";
import { primary } from "../../styles/colors";
import { Link } from "react-router-dom";
export const Container = styled.div({
  margin: "30px 0px",
  height: '60vh',
  padding: '0px 3em'
});

export const Tag = styled(Link)({
  color: "#FFF",
  display: 'inline-block',
  margin: '5px 10px',
  padding: '3px 5px',
  textDecoration: "none",
  background: primary,
  textTransform: "uppercase",
  fontSize: '16px',
  ":nth-of-type(3n+1)": {
    background: "#F8053F",
  },
  ":nth-of-type(5n+1)": {
    background: "#6d04b3",
  },
});

export const ContainerLoader = styled.div({
  height: '70vh',
  display: 'grid',
  placeItems: 'center'
})
