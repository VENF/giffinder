//State
const Favs = {
  favs: [],
};

//Types
const ADD_FAVS = "ADD_FAVS";
const SET_FAVS = "SET_FAVS";

//reducer
export default function favsReducer(state = Favs, action) {
  switch (action.type) {
    case ADD_FAVS:
      return {
        ...state,
        favs: state.favs.concat(action.payload),
      };
    case SET_FAVS:
      const preState = JSON.parse(localStorage.getItem("favs"));
      preState
        ? localStorage.setItem(
            "favs",
            JSON.stringify(preState.concat(state.favs))
          )
        : localStorage.setItem('favs', JSON.stringify(state.favs));
      return state;
    default:
      return state;
  }
}

//actions
export const FAVS_ADD_ACTION = ({ url, id, title }) => (dispatch) => {
  dispatch({
    type: ADD_FAVS,
    payload: [{ url, id, title }],
  });
};

export const FAVS_SET_ACTION = () => (dispatch) => {
  dispatch({
    type: SET_FAVS,
    payload: [],
  });
};
