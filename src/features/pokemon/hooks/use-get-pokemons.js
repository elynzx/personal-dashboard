import { useEffect, useState } from "react";
import { getPokemonsList } from "../services/get-pokemon-list";
import { getPokemon } from "../services/get-pokemon";
import { usePokemonStore } from "../store/use-pokemon-store";
import { createPokemonProfile } from "../utils/pokemon-helpers";

export const useGetPokemons = (offset, limit) => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const addPokemons = usePokemonStore((state) => state.addPokemons);
    const getPokemonFromStore = usePokemonStore((state) => state.getPokemons);

    useEffect(() => {
        setLoading(true);
        getPokemonsList(offset, limit)
            .then((response) =>
                Promise.all(
                    response.results.map((pokemon) => {
                        const cachedPokemon = getPokemonFromStore(pokemon.name);
                        if (cachedPokemon) return cachedPokemon;
                        return getPokemon(pokemon.name).then(
                            createPokemonProfile,
                        );
                    }),
                ),
            )
            .then((pokemonProfiles) => {
                setPokemons(pokemonProfiles);
                addPokemons(pokemonProfiles);
            })

            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }, [offset, limit, addPokemons, getPokemonFromStore]);

    return {
        data: pokemons,
        loading,
        error,
    };
};
