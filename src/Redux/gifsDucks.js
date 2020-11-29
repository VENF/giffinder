import { getGifs } from "../Service/getGifs";
// State
const stateDefault = {
  gifs: [],
};
// Types
const GET_GIFS = "GET_GIFS";
const SET_GIFS = "SET_GIFS";

// Reducers
export default function gifsReducer(state = stateDefault, action) {
  switch (action.type) {
    case GET_GIFS:
      return {
        ...state,
        gifs: action.payload,
      };
      case SET_GIFS:
        return {
          ...state,
          gifs: state.gifs.concat(action.payload),
        };
    default:
      return state;
  }
}
// Actions
export const GET_GIFS_ACTION = (
  keyword,
  limit,
  offset,
  scroll = false
) => async (dispatch, getState) => {
  try {
    const data = await getGifs({
      keyword: keyword,
      limit: limit,
      offset: offset,
    });
    dispatch({
      type: scroll ? SET_GIFS: GET_GIFS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
