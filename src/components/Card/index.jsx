import { useEffect, useState } from "react";

const Card = ({ character }) => {
  const [state, setState] = useState(true);

  setState(false);

  useEffect(() => {
    console.log("oi");
  }, []);

  return (
    <div>
      <img src={character.image} alt={`${character.name} image`} />
      <p>{character.name}</p>
    </div>
  );
};

export default Card;
