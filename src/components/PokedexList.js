import Button from "./Button";

const PokedexList = ({ pokemon, onDelete }) => {
 
  return (
    <div className="pokemon">
      <h3>
        <img src={pokemon.sprites.front_default} alt="Logo" />
        <Button
          color="red"
          text="Delete"
          onClick={() => onDelete(pokemon.id)}
        />
      </h3>
      <h3>{pokemon.name}</h3>
      <p>{pokemon.sprites.toString}</p>
    </div>
  );
};

export default PokedexList;