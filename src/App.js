import React from "react";

// Components
import Home from "./components/Home";
import PokemonList from "./components/PokemonList";

function App() {
  let counter = 0;
  const handleIncrement = (name) => alert(`Hello ${name}`);
  return (
    <div>
      <button onClick={() => handleIncrement("Khaled")}>Increment</button>
      {counter}
      <button>Decrement</button>
      <Home />
      <PokemonList />
    </div>
  );
}

export default App;
