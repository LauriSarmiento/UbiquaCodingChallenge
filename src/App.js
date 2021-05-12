import { useState, useEffect } from "react";
import Header from "./components/Header";
import Pokemons from "./components/Pokemons";
import Pokedex from "./components/pages/Pokedex";
import Detail from "./components/pages/Detail";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {
  useEffect(() => {
    const getPokemons = async () => {
      const PokemonsfromPokeAPI = await fetchPokemons();
      // pokeList.push(PokemonsfromPokeAPI)
      setPokemons(PokemonsfromPokeAPI);
      console.log(PokemonsfromPokeAPI);
      // addPokemon(PokemonsfromPokeAPI);
    };
    getPokemons();
  }, []);

  // Fetch Pokemons
  const fetchPokemons = async () => {
    let pokeList = [];
    for (let index = 0; index < 10; index++) {
      const id = Math.floor(Math.random() * 898);
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
      const data = await res.json();
      pokeList.push(data);
    }
    // console.log(data);
    return pokeList;
  };

  const [pokemons, setPokemons] = useState([]);
  const [detail, setDetail] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  //add Pokemon
  const addPokedex = (pokemon) => {
    // setPokemons(pokeList);
    // console.log(pokemons)
    // console.log(pokemon)
    // // const newPokemon = {id, ...pokemon}s
    if (pokedex.length < 6) {
      setPokedex([...pokedex, pokemon]);
    }
  };

  //delete pokemon
  const deletePokedex = (id) => {
    setPokedex(pokedex.filter((pokedex) => pokedex.id !== id));
  };
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/detail">
            <Header />
            <Detail detail={detail} addPokedex={addPokedex} />
          </Route>
          <Route exact path="/Pokedex">
            <Header />
            {pokedex.length > 0 ? (
              <Pokedex pokemons={pokedex} onDelete={deletePokedex} />
            ) : (
              "No Pokemon inside your Pokedex"
            )}
          </Route>
          <Route exact path="/">
            <Header />
            {pokemons.length > 0 ? (
              <Pokemons
                pokemons={pokemons}
                onDelete={deletePokedex}
                setDetail={setDetail}
              />
            ) : (
              "Please wait, selecting 10 Pokemon out of 898..."
            )}
          </Route>
        </Switch>
      </div>
    </Router>
    // <div className="App">
    //   <Header />
    //   {pokemons.length > 0 ? <Pokemons pokemons = {pokemons} onDelete = {deletePokemon}/> : 'No Pokemons inside your Pokedex'}
    // </div>
  );
};

export default App;
