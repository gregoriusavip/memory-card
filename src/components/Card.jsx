import CardButtons from "./CardButtons";
import "../styles/card.css";

export default function PokeCard(props) {
  return (
    <div className={"card"}>
      <img
        className="sprite"
        src={props.imgUrl}
        alt={"the sprite of the pokemon " + props.pokemonName}
      ></img>
      <h2>{props.pokemonName.toUpperCase()}</h2>
      <CardButtons
        gameInfo={props.gameInfo}
        setGameInfo={props.setGameInfo}
      ></CardButtons>
    </div>
  );
}
