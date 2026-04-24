import { useEffect, useState } from "react";
import { getPokemonsList } from "../services/get-pokemon-list";
import { getPokemon } from "../services/get-pokemon";
import { POKEMON_LIMIT } from "../utils/constants";
import {
    addNewPokemonsToStorage,
    createPokemonProfile,
} from "../store/pokemon-storage";

export const useGetPokemons = (offset = 0, limit = POKEMON_LIMIT) => {
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
                        getPokemon(pokemon.name).then(createPokemonProfile),
                    ),
                ),
            )
            .then((pokemonProfiles) => {
                setPokemons(pokemonProfiles);
                addNewPokemonsToStorage(pokemonProfiles);
            })

            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }, [offset, limit]);

    return {
        data: pokemons,
        loading,
        error,
    };
};
