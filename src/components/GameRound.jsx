import { useState } from "react";
import PokeCard from "./Card";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function GameRound({ pokemonList }) {
  const randomPokemonId = getRandomInt(pokemonList.length);
  const pokemonName = pokemonList[randomPokemonId].name;

  const [playerStats, setPlayerStats] = useState({
    lives: 3,
    score: 0,
  });

  return (
    <PokeCard
      pokemonName={pokemonName}
      setPlayerStats={setPlayerStats}
      playerStats={playerStats}
    ></PokeCard>
  );
}
