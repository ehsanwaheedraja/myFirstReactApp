import React from "react";
import BestPokemon from "./Components/BestPokemon.js";
import Logo from "./Components/logo.js";
import CaughtPokemon from "./Components/ComponentsHooks/CaughtPokemon.js";
// import ".App.css";

function App() {
  var abilities = ["Anticipation", "Adaptability", "Run-Away"];
  let date = new Date().toLocaleDateString();
  return (
    <div>
      <Logo appName="Pokedex" />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
    </div>
  );
}

export default App;
