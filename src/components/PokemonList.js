import React, { useState } from "react";

// Data
import pokemonsData from "../pokemons";

// Components
import PokemonItem from "./PokemonItem";
import SearchBar from "./SearchBar";

// Styles
import styles from "../styles";
const PokemonList = ({ setPokemon }) => {
  const [query, setQuery] = useState("");

  const filteredPokemons = pokemonsData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(query.toLowerCase())
  );
  const pokemonList = filteredPokemons.map((pokemon) => (
    <PokemonItem pokemon={pokemon} key={pokemon.id} setPokemon={setPokemon} />
  ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <div style={styles.list}>{pokemonList}</div>
    </div>
  );
};

export default PokemonList;
