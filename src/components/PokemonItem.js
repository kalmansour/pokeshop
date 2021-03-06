import React from "react";

// Styling
import styles from "../styles";

const PokemonItem = ({ pokemon, setPokemon }) => {
  return (
    <div style={styles.pokemon}>
      <img
        style={styles.pokeImage}
        alt={pokemon.name}
        src={pokemon.image}
        onClick={() => setPokemon(pokemon)}
      />
      <p style={styles.text}>{pokemon.name}</p>
      <p style={styles.text}>KWD {pokemon.price}</p>
    </div>
  );
};

export default PokemonItem;
