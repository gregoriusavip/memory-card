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
  const [gameInfo, setGameInfo] = useState({
    lives: 3,
    score: 0,
    seenPokemon: new Set(),
    totalPokemon: pokemonList.length,
    currentPokemonId: getRandomInt(pokemonList.length),
  });

  const pokemonName = pokemonList[gameInfo.currentPokemonId].name;

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
    return (
      <>
        SCORE: {gameInfo.score} LIVES: {gameInfo.lives}
        <PokeCard
          pokemonName={pokemonName}
          imgUrl={url}
          gameInfo={gameInfo}
          setGameInfo={setGameInfo}
        ></PokeCard>
      </>
    );
  }
}
