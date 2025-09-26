import { getRandomInt } from "../utils";

export default function CardButtons({ gameInfo, setGameInfo }) {
  const currentScore = gameInfo.score;
  const currentLives = gameInfo.lives;
  const currentPokemonId = gameInfo.currentPokemonId;

  function addScore(newPokemonSet) {
    setGameInfo({
      ...gameInfo,
      score: currentScore + 1,
      seenPokemon: newPokemonSet,
      currentPokemonId: getRandomInt(gameInfo.totalPokemon),
    });
  }

  function reduceLive(newPokemonSet) {
    setGameInfo({
      ...gameInfo,
      lives: currentLives - 1,
      seenPokemon: newPokemonSet,
      currentPokemonId: getRandomInt(gameInfo.totalPokemon),
    });
  }

  function handleClickSeen(pokemonSet, pokemonId) {
    pokemonSet.has(pokemonId)
      ? addScore(pokemonSet)
      : reduceLive(new Set([...pokemonSet, pokemonId]));
  }

  function handleClickNew(pokemonSet, pokemonId) {
    pokemonSet.has(pokemonId)
      ? reduceLive(pokemonSet)
      : addScore(new Set([...pokemonSet, pokemonId]));
  }

  const handleSeenClick = () => handleClickSeen(gameInfo.seenPokemon, currentPokemonId);
  const handleNewClick = () => handleClickNew(gameInfo.seenPokemon, currentPokemonId);

  return (
    <div className="choices">
      <button id="seen" onClick={handleSeenClick}>
        ✅ SEEN
      </button>
      <button id="new" onClick={handleNewClick}>
        ❌ NEW
      </button>
    </div>
  );
}
