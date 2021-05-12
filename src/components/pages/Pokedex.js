import PokedexList from "../PokedexList";
const Pokedex = ({ pokemons, onDelete }) => {
  return (
    <>
      {pokemons.map((pokemon) => (
        <PokedexList key={pokemon.id} pokemon={pokemon} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Pokedex;
