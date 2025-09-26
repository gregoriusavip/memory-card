function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function CardButtons({ playerStats, setPlayerStats }) {
  const currentScore = playerStats.score;
  const currentLives = playerStats.lives;
  const currentPokemonId = playerStats.currentPokemonId;

  function addScore(newPokemonSet) {
    setPlayerStats({
      ...playerStats,
      score: currentScore + 1,
      seenPokemon: newPokemonSet,
      currentPokemonId: getRandomInt(playerStats.totalPokemon),
    });
  }

  function reduceLive(newPokemonSet) {
    setPlayerStats({
      ...playerStats,
      lives: currentLives - 1,
      seenPokemon: newPokemonSet,
      currentPokemonId: getRandomInt(playerStats.totalPokemon),
    });
  }

  function handleClickSeen(pokemonSet, pokemonId) {
    pokemonSet.has(pokemonId)
      ? addScore(pokemonSet)
      : reduceLive(pokemonSet.add(pokemonId));
  }

  function handleClickNew(pokemonSet, pokemonId) {
    pokemonSet.has(pokemonId)
      ? reduceLive(pokemonSet)
      : addScore(pokemonSet.add(pokemonId));
  }

  return (
    <div className="choices">
      <button
        id="seen"
        onClick={() =>
          handleClickSeen(playerStats.seenPokemon, currentPokemonId)
        }
      >
        ✅ SEEN
      </button>
      <button
        id="new"
        onClick={() =>
          handleClickNew(playerStats.seenPokemon, currentPokemonId)
        }
      >
        ❌ NEW
      </button>
    </div>
  );
}
