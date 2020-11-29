import React, { useRef, useEffect, useCallback } from "react";
import useGifs from "../../Hooks/useGifs";
import Gif from "./Gif";
import Loader from "../Loader/Loader";
import useObserver from "../../Hooks/useObserver";
import debounce from "just-debounce-it";
const List = ({ keyword }) => {
  const { loading, gifs, setPage } = useGifs(keyword);
  const element = useRef();

  const { show } = useObserver({
    reference: loading ? null : element,
    once: false,
  });

  const handlerNextPage = useCallback(
    debounce(() => setPage((pre) => pre + 1), 200),
    [setPage]
  );

  useEffect(() => {
    if (show) handlerNextPage();
  }, [show, handlerNextPage]);

  return (
    <>
      {loading && <Loader />}
      {!loading &&
        gifs.map((item) => (
          <Gif key={item.id} title={item.title} url={item.url} id={item.id} />
        ))}
      {!loading && <div ref={element}></div>}
    </>
  );
};

export default React.memo(List);
