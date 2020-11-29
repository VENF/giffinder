const BASE_URL = "https://api.giphy.com/v1/";
const PARAMS_SEARCH = "gifs/search?api_key=";
const TRENDING_TERMS = 'trending/searches?api_key=';
const SDK = process.env.SDK || 'yFmgBNIQixEPYseM0BPWUayoDJc3wuSB';
const QUERY = "&q=";
const LIMIT = "&limit=";
const OFF_SET = "&offset=";
const RATING = "&rating=";
const LANG = "&lang=en";

export const generateApi = (type, keyword, limit, offset, rating) => {
  let api = "";
  type
    ? (api = `${BASE_URL}${PARAMS_SEARCH}${SDK}${QUERY}${keyword}${LIMIT}${limit}${OFF_SET}${offset * limit}${RATING}${rating}${LANG}`)
    : (api = `${BASE_URL}${TRENDING_TERMS}${SDK}`);
  return api;
};

export const GET_ONE_API = (id) => {
  return `${BASE_URL}gifs/${id}?api_key=${SDK}`
}