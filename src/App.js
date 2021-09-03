import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor() {
    super();

    this.changePokemon = this.changePokemon.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);
    this.allPokemons = this.allPokemons.bind(this);

    this.state = {
      pokemonArray: [...pokemons],
      currentPokemon: 0
    }
  }

  changePokemon() {
    this.setState((prevState, _props) => ({
      currentPokemon: prevState.currentPokemon + 1
    }))
    if (this.state.currentPokemon === this.state.pokemonArray.length - 1) {
      this.setState({ currentPokemon: 0 });
    }
  }

  filterPokemon(type) {
    this.setState({currentPokemon: 0});
    this.setState({pokemonArray: pokemons.filter((pokemon) => pokemon.type === type)});
  }

  allPokemons() {
    this.setState({currentPokemon: 0});
    this.setState({pokemonArray: pokemons});
  }

  render() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={this.state.pokemonArray[this.state.currentPokemon]} />
      <button onClick={this.allPokemons}>Todos</button>
      <button onClick={this.changePokemon}>Próximo Pokemon</button>
      <button onClick={() => {this.filterPokemon('Fire')}}>Fogo</button>
      <button onClick={() => {this.filterPokemon('Psychic')}}>Psíquico</button>
      <button onClick={() => {this.filterPokemon('Electric')}}>Elétrico</button>
      <button onClick={() => {this.filterPokemon('Bug')}}>Inseto</button>
      <button onClick={() => {this.filterPokemon('Poison')}}>Veneno</button>
      <button onClick={() => {this.filterPokemon('Normal')}}>Normal</button>
      <button onClick={() => {this.filterPokemon('Dragon')}}>Dragão</button>
    </div>
  );
  }
}

export default App;