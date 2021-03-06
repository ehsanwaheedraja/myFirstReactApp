import React, { Component } from "react";
import { render } from "@testing-library/react";

class CaughtPokemon extends Component {
  state = {
    caughtPokemon: 0,
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

  render() {
    return (
      <div>
        <p>
          Caught {this.state.caughtPokemon} Pokemon on {this.props.date}
        </p>
        <button onClick={this.catch}>catch</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.incrementTotal}>incrementTotal</button>
      </div>
    );
  }
}

export default CaughtPokemon;
