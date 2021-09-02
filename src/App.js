import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor() {
    super();

    this.changePokemon = this.changePokemon.bind(this);

    this.state = {
      currentPokemon: 0
    }
  }

  changePokemon() {
    if (this.state.currentPokemon === pokemons.length - 1) {
      this.setState({ currentPokemon: 0 });
    } else {
      this.setState({ currentPokemon: this.state.currentPokemon + 1 })
    }
  }

  render() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons[this.state.currentPokemon]} />
      <button onClick={this.changePokemon}>Próximo Pokemon</button>
    </div>
  );
  }
}

export default App;