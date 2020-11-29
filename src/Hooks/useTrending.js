import { useState, useEffect } from "react";
import { getTrends } from "../Service/getGifs";
export default function useTrending() {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getTrends().then((data) => {
      setTrends(data);
      setLoading(false);
    });
  }, []);
  return {
    trends,
    loading,
  };
}
