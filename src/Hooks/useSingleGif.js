import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getSingleGif } from "../Service/getGifs";
export default function useSingleGif(id) {
  const [gif, setGif] = useState({});
  const { gifs } = useSelector((store) => store.gifs);
  useEffect(() => {
    const finded = gifs.find((x) => x.id === id);
    if (finded) {
      setGif(finded);
    } else {
      getSingleGif(id).then(({ data }) => {
        const set = {
          id: data.id,
          title: data.title,
          url: data.images.downsized_medium.url,
        };
        setGif(set);
      });
    }
  }, [id, gifs]);
  return {
    gif,
  };
}
