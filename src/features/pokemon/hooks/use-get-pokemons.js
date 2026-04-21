import { useEffect, useState } from "react";
import { getPokemonsList } from "../services/get-pokemon-list";
import { getPokemonDetail } from "../services/get-pokemon";

export const useGetPokemons = (offset = 0, limit = 10) => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        getPokemonsList(offset, limit)
            .then((response) =>
                Promise.all(
                    response.results.map((pokemon) =>
                        getPokemonDetail(pokemon.name),
                    ),
                ),
            )
            .then((pokemonDetails) => setPokemons(pokemonDetails))
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    }, [offset, limit]);

    return {
        data: pokemons,
        loading,
        error,
    };
};
