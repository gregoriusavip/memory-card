import CardButtons from "./CardButtons";
import "../styles/card.css";
import { useState } from "react";

export default function PokeCard({ pokemonName, imgUrl }) {
  const [clickedButton, setClickedButton] = useState(null);

  return (
    <div className={"card" + (clickedButton ? " clicked" : "")}>
      <img
        className="sprite"
        src={imgUrl}
        alt={"the sprite of the pokemon " + pokemonName}
      ></img>
      <h2>{pokemonName.toUpperCase()}</h2>
      <CardButtons setClickedButton={setClickedButton}></CardButtons>
    </div>
  );
}
