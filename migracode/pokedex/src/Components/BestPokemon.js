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

// data to add

// pokemonNames: [],
// componentDidMount() {
//   fetch(
//     `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${this.props.date}&api_key=gnesiqnKCJMm8UTYZYi86ZA5RAnrO4TAR9gDstVb`
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       this.setState({
//         isLoading: false,
//         imgSrc: data.photos[0].img_src,
//       });
//     });
// }
