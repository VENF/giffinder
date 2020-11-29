import React, { useState, useEffect } from "react";
import { Container, GifFav, Grap, Action, BTN, NotFavs } from "./style";
import { useHistory } from "react-router-dom";
import IconTrash from "../Components/Icons/IconTrash";
const Favorites = () => {
  const [favs, setFavs] = useState([]);
  const [show, setShow] = useState(true);
  const [handler, setHandler] = useState(false);
  const history = useHistory();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favs"));
    if (data) {
      setShow(true);
      const validate = (arr, id) => arr.find((el) => el.id === id);
      const filter = data.reduce((acc, x) => {
        if (!validate(acc, x.id)) {
          acc.push(x);
        }
        return acc;
      }, []);
      setFavs(filter);
    } else {
      setShow(false);
    }
  }, [handler]);
  const handlerDelete = (id) => {
    const filter = favs.filter((x) => x.id !== id);
    localStorage.setItem("favs", JSON.stringify(filter));
    handler ? setHandler(false) : setHandler(true);
  };
  return (
    <>
      <Container>
        {show && favs.map(({ url, id, title }) => {
          return (
            <Grap key={id}>
              <GifFav title={title} src={url} />
              <Action>
                <BTN onClick={() => handlerDelete(id)}>
                  <IconTrash width="17" heigth="17" stroke="#FF0578" />
                </BTN>
                <BTN onClick={() => history.push(`/gif/${id}`)}>Show</BTN>
              </Action>
            </Grap>
          );
        })}
        {show !== true && <NotFavs>You don't have favorites yet</NotFavs>}
      </Container>
    </>
  );
};

export default Favorites;
