import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ContentGif = styled(Link)({
  marginBottom: ".5em",
  position: "relative",
  height: "100%",
  color: "#000",
  display: "block",
  width: "100%",
  ":nth-of-type(11n + 1)": {
    gridColumn: "span 2",
    gridRow: "span 2",
  },
  ":nth-of-type(8n + 1)": {
    gridColumn: "span 2",
    gridRow: "span 2",
  },
  ":nth-of-type(10n + 1)": {
    gridColumn: "span 2",
    gridRow: "span 1",
  },
});

export const GifImg = styled.img({
  width: "100%",
  verticalAlign: "top",
  height: "inherit",
  objectFit: "cover",
});

export const PaginateMargin = styled.div({
  marginTop: '150px'
})
