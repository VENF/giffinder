import React  from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { FAVS_ADD_ACTION, FAVS_SET_ACTION} from '../Redux/favsDucks';
import useSingleGif from "../Hooks/useSingleGif";
import IconFavorite from "../Components/Icons/IconFavorite";
import { ContentGif, GIM, GTITLE, AddF, Ley } from "./style";
const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { gif } = useSingleGif(id);
  const handlerFavs = () => {
    dispatch(FAVS_ADD_ACTION(gif))
    dispatch(FAVS_SET_ACTION())
  }
  return (
    <>
      <ContentGif>
        <GIM src={gif.url} title={gif.title} />
        <Ley>
          <GTITLE> {gif.title} </GTITLE>
          <AddF onClick={handlerFavs}>
            <IconFavorite width="15" heigth="15" color="#942BE5" />
            <p>Add Favorites</p>
          </AddF>
        </Ley>
      </ContentGif>
    </>
  );
};

export default Details;
