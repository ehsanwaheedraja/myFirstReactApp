import React, { Component } from "react";
import { render } from "@testing-library/react";

class CaughtPokemon extends Component {
  state = {
    caughtPokemon: 0,
    totalCaught: 0,
    pokemonNameInput: "",
  };
  catch = () => {
    this.setState((prevState) => {
      return { caughtPokemon: prevState.caughtPokemon + 1 };
    });
  };
  reset = () => {
    this.setState((prevState) => {
      return { caughtPokemon: 0 };
    });
  };

  handleInputChange = (event) => {
    console.log(event.target.value);
    let inputdata = event.target.value;
    this.setState((prevState) => {
      return {
        pokemonNameInput: prevState.pokemonNameInput + inputdata,
      };
    });
  };

  render() {
    return (
      <div>
        <p>
          Caught {this.state.caughtPokemon} Pokemon on {this.props.date}
        </p>
        <button onClick={this.catch}>catch</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.incrementTotal}>incrementTotal</button>
        <input
          type="text"
          value={this.state.pokemonNameInput}
          onChange={this.handleInputChange}
        ></input>
      </div>
    );
  }
}

export default CaughtPokemon;
