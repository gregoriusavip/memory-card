import { useQuery } from '@tanstack/react-query'

async function fetchPokemon(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return await response.json()
}

export default function PokeCard({ pokemonName }) {
    const { isPending, isError, data, error } = useQuery({
        queryKey: ['pokemon', pokemonName],
        queryFn: async () => await fetchPokemon(pokemonName),
    })

    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return <pre>{JSON.stringify(data, null, 2)}</pre>
}