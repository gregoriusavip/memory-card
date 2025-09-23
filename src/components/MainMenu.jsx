import PlayButtons from "./PlayButtons"
import Card from "./Card"
import { useState } from "react"
import { useQueryClient } from "@tanstack/react-query";

export default function MainMenu() {
    const queryClient = useQueryClient();

    const [options, setOptions] = useState({
        generationId: null
    });

    const queryData = queryClient.getQueryData(['generation', options.generationId])

    if (queryData) {
        return <pre>{JSON.stringify(queryData, null, 2)}</pre>
    }

    return (
        <section id="main-menu">
            <div className="container">
                <h1>Pokemon Memory Game</h1>
                <p>Memorize the pokemon on your screen. Try to catch them all!</p>
                <PlayButtons options={options} setOptions={setOptions}></PlayButtons>
                <Card pokemonName='charizard'></Card>
            </div>
        </section>
    )
}