import React from "react";
import { ContentGif, GifImg } from "./style";
const Gif = ({ title, url, id }) => {
  return (
    <>
      <ContentGif to={`/gif/${id}`}>
        <GifImg src={url} alt={title} />
      </ContentGif>
    </>
  );
};

export default React.memo(Gif);
