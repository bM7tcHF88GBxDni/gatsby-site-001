import React, { useEffect, useState } from "react";

function Button() {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/gengar");

      let data = await response.json();

      data = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
      };
      console.log(data);
    }

    if (pokemon) {
      fetchData();
    }
  }, [pokemon]);

  function handleClick() {
    setPokemon(true);
  }

  return (
    <button type="button" onClick={handleClick}>
      Button
    </button>
  );
}

export default Button;
