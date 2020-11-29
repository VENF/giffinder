import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import IconSearch from "../Icons/IconSearch";
import { Container, Icon, Field, Border } from "./style";
const Search = () => {
  const history = useHistory();
  const [keyword, setKeyword] = useState("");
  const handlerSubmit = (e) => {
    e.preventDefault();
    history.push(`/gifs/${keyword}`);
  };
  const handlerChange = (e) => setKeyword(e.target.value);
  return (
    <>
      <Container>
        <Border onSubmit={handlerSubmit}>
          <Field type="text" onChange={handlerChange} />
        </Border>
        <Icon>
          <IconSearch width="25" heigth="25" stroke="#FFF" />
          <span>Search</span>
        </Icon>
      </Container>
    </>
  );
};

export default Search;
