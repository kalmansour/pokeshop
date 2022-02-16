import React from "react";

// Data
import pokemonsData from "../pokemons";

// Components
import PokemonItem from "./PokemonItem";

// Styles
import styles from "../styles";
const PokemonList = () => {
  const pokemonList = pokemonsData.map((pokemon) => (
    <PokemonItem pokemon={pokemon} key={pokemon.id} />
  ));
  return <div style={styles.list}>{pokemonList}</div>;
};

export default PokemonList;
