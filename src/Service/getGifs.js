import { generateApi, GET_ONE_API } from "./Api";

export const getGifs = async ({ keyword, limit, offset, rating }) => {
  const request = generateApi(true, keyword, limit, offset, "g");
  const res = await fetch(request);
  const { data } = await res.json();
  const gifs = data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      url: item.images.downsized_medium.url,
    };
  });

  return gifs;
};

export const getTrends = async () => {
  const request = generateApi(false);
  const res = await fetch(request);
  const { data } = await res.json();
  return data;
};

export const getSingleGif = async (id) => {
  const request = GET_ONE_API(id);
  const res = await fetch(request);
  const data = await res.json();
  return data;
}