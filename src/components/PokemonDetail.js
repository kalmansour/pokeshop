import React from "react";

// Styling
import { DetailWrapper } from "../styles";

const PokemonDetail = ({ pokemon }) => {
  return (
    <DetailWrapper>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>{pokemon.description}</p>
      <p>{pokemon.price} KD</p>
    </DetailWrapper>
  );
};

export default PokemonDetail;
