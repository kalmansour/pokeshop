import React from "react";

// Styling
import { SearchBarStyled } from "../styles";

const SearchBar = ({ setQuery }) => {
  return (
    <SearchBarStyled
      placeholder="Search for a pokemon name"
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
