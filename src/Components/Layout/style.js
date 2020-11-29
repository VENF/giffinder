import styled from "@emotion/styled";
import { white } from "../../styles/colors";
import bg from "../../assets/bg.svg";

const Movil = {
  "@media (max-width: 500px)": {
    width: "100%",
    heigth: "100%",
  },
};

export const Container = styled.div({
  height: "100vh",
  display: "grid",
  placeItems: "center",
  background: `url(${bg}) no-repeat center ${white}`,
  backgroundSize: "cover",
});

export const Content = styled.div({
  height: "100%",
  width: "500px",
  background: `${white}`,
  ...Movil,
});
