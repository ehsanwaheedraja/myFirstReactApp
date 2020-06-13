import React from "react";
var abilities = ["Anticipation", "Adaptability", "Run-Away"];
const BestPokemon = () => {
  return (
    <div>
      {" "}
      <p>My favourite Pokemon is Squirtle</p>{" "}
      <ul>
        {abilities.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;
