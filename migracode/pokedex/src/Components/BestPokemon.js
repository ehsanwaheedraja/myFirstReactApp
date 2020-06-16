import React from "react";

const BestPokemon = (props) => {
  console.log(props);
  return (
    <div>
      {" "}
      <p>My favourite Pokemon is Squirtle</p>{" "}
      <ul>
        {props.abilities.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;
