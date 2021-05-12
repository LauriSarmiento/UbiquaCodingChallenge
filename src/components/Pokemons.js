import Pokemon from './Pokemon'

const Pokemons = ({pokemons, onDelete, setDetail}) => {

    return (
        <>
         {pokemons.map((pokemon) => (
            <Pokemon key ={pokemon.id} pokemon={pokemon} onDelete={onDelete} setDetail={setDetail} />
         ))}
        </>
    );
}

export default Pokemons