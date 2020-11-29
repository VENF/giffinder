import styled from "@emotion/styled";
import { gradient, secondary, white } from "../../styles/colors";
export const Container = styled.div({
  display: "grid",
  placeItems: "center",
  position: "relative",
  marginTop: "30px",
});

export const Icon = styled.div({
  display: "flex",
  alignItems: "center",
  position: "absolute",
  left: "60px",
  top: "-25px",
  transition: "all ease .2s",
  color: '#FFF'
});

export const Field = styled.input({
  height: "100%",
  width: "100%",
  border: "none",
  outline: "none",
  paddingLeft: "20px",
  background: white,
  color: '#FFF',
});
export const Border = styled.form({
  height: "40px",
  display: "inline-block",
  width: "400px",
  background: gradient,
  paddingBottom: "1px",
  "@media (max-width: 500px)": {
    width: "90%",
  },
  ":focus-within": {
    padding: "1px",
  },
  ":focus-within ~ div": {
    top: "-25px",
    left: "45px",
    span: {
      color: secondary,
    },
  },
});
