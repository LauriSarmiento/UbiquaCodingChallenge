import { Link} from "react-router-dom";

const Pokemon = ({ pokemon, setDetail }) => {
  return (
    <div className="pokemon">
      <h1>
        <Link to={"Detail/" + pokemon.id} onClick={() => setDetail(pokemon)}>
          <img src={pokemon.sprites.front_default} alt="Logo" />
        </Link>
      </h1>
      <h3>{pokemon.name}</h3>
      <h4>Number: </h4>
      <p> {pokemon.id}</p>
      <h4> Type:</h4>
      {pokemon.types.map((type) => (
        <p>{type.type.name}</p>
      ))}
    </div>
  );
};

export default Pokemon;
