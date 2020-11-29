import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { white, gradient } from "../../styles/colors";
export const rotate = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;
export const ContainerLoader = styled.div({
  width: "100%",
  height: "100%",
  display: "grid",
  placeItems: "center",
});
export const Border = styled.div({
  height: "50px",
  width: "50px",
  padding: "2px",
  background: gradient,
  borderRadius: "50%",
  animation: `${rotate} 1s infinite linear`,
});
export const Spinner = styled.div({
  height: "100%",
  width: "100%",
  background: white,
  borderRadius: "50%",
});
