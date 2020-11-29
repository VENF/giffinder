import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_GIFS_ACTION } from "../Redux/gifsDucks";

export default function useGifs(keyword) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const { gifs } = useSelector((store) => store.gifs);

  !keyword ? (keyword = localStorage.getItem("keyword")) : (keyword = keyword);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      dispatch(GET_GIFS_ACTION(keyword, 5, 0));
      localStorage.setItem("keyword", keyword);
      setLoading(false);
    }, 500);
  }, [keyword, dispatch]);

  useEffect(() => {
    if (page > 0) {
      dispatch(GET_GIFS_ACTION(keyword, 5, page, true));
    }
  }, [page, keyword, dispatch]);
  return {
    loading,
    gifs,
    setPage
  };
}
