import GameButtons from './GameButtons'
import GameRound from './GameRound';
import { useState } from 'react'

export default function Game() {
    const [options, setOptions] = useState({
        generationId: null,
        generationData: null,
        highscore: 0
    });

    if (options['generationData']) {
        return <GameRound pokemonList={options["generationData"]['pokemon_species']}></GameRound>
    }

    return (
        <div>
            <GameButtons options={options} setOptions={setOptions}></GameButtons>
        </div>
    );
}