import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

// Components
import Home from "./components/Home";
import PokemonList from "./components/PokemonList";

// Styling
import { GlobalStyle, theme, ThemeButton } from "./styles";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [currentThemeName, setCurrentThemeName] = useState("Dark Mode");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
    setCurrentThemeName(currentTheme === "light" ? "Light Mode" : "Dark Mode");
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <ThemeButton onClick={toggleTheme}>{currentThemeName}</ThemeButton>
        <Home />
        <PokemonList />
      </ThemeProvider>
    </div>
  );
}

export default App;
