import React from "react";

let date = new Date().toLocaleDateString();
const CaughtPokemon = () => {
  return <p>Caught 0 Pokemon on {date}</p>;
};

export default CaughtPokemon;
