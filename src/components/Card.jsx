import { useQuery } from '@tanstack/react-query'
import CardButtons from './CardButtons'
import Loader from './Loader'
import '../styles/card.css'

async function fetchPokemon(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return await response.json()
}

export default function PokeCard({ pokemonName }) {
    let url = '';
    const { isPending, isError, data, isSuccess, error } = useQuery({
        queryKey: ['pokemon', pokemonName],
        queryFn: async () => await fetchPokemon(pokemonName),
    })

    if (isPending) {
        return <Loader></Loader>
    }

    if (isError) {
        // TODO: Error Pop up
        return <span>Error: {error.message}</span>
    }

    if (isSuccess) {
        url = data['sprites']['other']['official-artwork']['front_default']
    }

    return (
        <div className="card">
            <img className="sprite" src={url} alt={"the sprite of the pokemon " + pokemonName}>
            </img>
            <h2>{pokemonName.toUpperCase()}</h2>
            <CardButtons></CardButtons>
        </div>
    );
}