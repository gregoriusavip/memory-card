import Button from "./Button"
import { useState } from "react"
import { useQueryClient } from '@tanstack/react-query'
import '../styles/playButton.css'

export default function PlayButtons() {
    const [clickedId, setClickedId] = useState(null);
    const queryClient = useQueryClient();

    const queryState = queryClient.getQueryState(['generation', clickedId]);

    if (queryState && queryState.status === 'pending') {
        return <span>Loading...</span>
    }

    if (queryState && queryState.status === 'error') {
        return <span>Error: {queryState.error.message}</span>
    }

    return (
        <div className="button-container">
            <Button text='GENERATION 1' clickedId={clickedId} setClickedId={setClickedId} id={1}></Button>
            <Button text='GENERATION 2' clickedId={clickedId} setClickedId={setClickedId} id={2}></Button>
        </div>
    )
}