import { useState } from "react";
import PokeCard from "./Card";
import Loader from "./Loader";
import { useQuery } from "@tanstack/react-query";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function fetchPokemon(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return await response.json();
}

export default function GameRound({ pokemonList }) {
  const randomPokemonId = getRandomInt(pokemonList.length);
  const pokemonName = pokemonList[randomPokemonId].name;

  const [playerStats, setPlayerStats] = useState({
    lives: 3,
    score: 0,
  });

  const { isPending, isError, data, isSuccess, error } = useQuery({
    queryKey: ["pokemon", pokemonName],
    queryFn: async () => await fetchPokemon(pokemonName),
  });

  if (isPending) {
    return <Loader></Loader>;
  }

  if (isError) {
    // TODO: Error Pop up
    return <span>Error: {error.message}</span>;
  }

  if (isSuccess) {
    const url = data["sprites"]["other"]["official-artwork"]["front_default"];
    return <PokeCard pokemonName={pokemonName} imgUrl={url}></PokeCard>;
  }
}
