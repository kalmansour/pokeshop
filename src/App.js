import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

// Components
import Home from "./components/Home";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";

// Styling
import { GlobalStyle, theme, ThemeButton } from "./styles";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [currentTheme, setCurrentTheme] = useState("light");
  const [currentThemeName, setCurrentThemeName] = useState("Dark Mode");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
    setCurrentThemeName(currentTheme === "light" ? "Light Mode" : "Dark Mode");
  };

  const setView = () => {
    if (pokemon) return <PokemonDetail pokemon={pokemon} />;
    return <PokemonList setPokemon={setPokemon} />;
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <ThemeButton onClick={toggleTheme}>{currentThemeName}</ThemeButton>
        <Home />
        {setView()}
      </ThemeProvider>
    </div>
  );
}

export default App;
