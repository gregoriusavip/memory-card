import '../styles/button.css'
import { useQueryClient } from '@tanstack/react-query'

async function fetchGeneration(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/generation/${id}`)
    return await response.json()
}

export default function Button({ text, clickedId, setClickedId, id }) {
    const queryClient = useQueryClient();

    async function handleClick() {
        await queryClient.prefetchQuery({
            queryKey: ['generation', id],
            queryFn: async () => await fetchGeneration(id)
        })
        setClickedId(id);
    }

    return (
        <button onClick={handleClick} disabled={(clickedId ? true : false)}>
            {text}
        </button>
    )
}