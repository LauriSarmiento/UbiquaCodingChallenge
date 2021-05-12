import Button from "../Button";

const Detail = ({ detail, addPokedex }) => {
  return (
    <>
      <h1>
        <img src={detail.sprites.front_default} alt="Logo" />
      </h1>
      <h3>Pokemon name: {detail.name}</h3>
      <h4>Number: </h4>
      <p> {detail.id}</p>
      <h4> Type:</h4>
      {detail.types.map((type, index) => (
        <p>{type.type.name}</p>
      ))}
      <Button text="Add to Pokedex" onClick={() => addPokedex(detail)} />
    </>
  );
};

export default Detail;
