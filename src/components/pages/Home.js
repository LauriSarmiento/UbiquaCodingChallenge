import Pokemon from '../Pokemon'

const Home = ({pokemons}) => {

    return (
        <>
         {pokemons.map((pokemon) => (
            <Pokemon key ={pokemon.id} pokemon={pokemon}/>
         ))}
        </>
    );
}

export default Home