import '../styles/button.css'
import { useQueryClient } from '@tanstack/react-query'

async function fetchGeneration(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/generation/${id}`)
    return await response.json()
}

export default function Button({ text, options, setOptions, id }) {
    const queryClient = useQueryClient();

    async function handleClick() {
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
        <button onClick={handleClick} disabled={(options.generationData ? true : false)}>
            {text}
        </button>
    )
}