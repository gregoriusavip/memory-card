import Button from "./Button"
import { useQueryClient } from "@tanstack/react-query"
import '../styles/playButton.css'

async function fetchGeneration(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/generation/${id}`)
    return await response.json()
}

export default function GameButtons({ options, setOptions }) {
    const queryClient = useQueryClient();

    async function handleClick(id) {
        const data = await queryClient.fetchQuery({
            queryKey: ['generation', id],
            queryFn: async () => await fetchGeneration(id)
        })
        setOptions({
            ...options,
            generationData: data,
            generationId: id
        });
    }

    return (
        <div className="button-container">
            <Button text='GENERATION 1' handleClick={() => handleClick(1)}></Button>
            <Button text='GENERATION 2' handleClick={() => handleClick(2)}></Button>
        </div>
    )
}