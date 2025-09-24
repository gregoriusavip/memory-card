import { useState } from "react";
import PokeCard from "./Card";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export default function GameRound({ pokemonList }) {
    const randomPokemonId = getRandomInt(pokemonList.length);
    const pokemonName = pokemonList[randomPokemonId].name;

    return <PokeCard pokemonName={pokemonName}></PokeCard>
}