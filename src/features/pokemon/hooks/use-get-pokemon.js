import { useEffect, useState } from "react";
import { getPokemon } from "../services/get-pokemon";
import {
    getPokemonFromStorage,
    createPokemonProfile,
} from "../store/pokemon-storage";

export const useGetPokemon = (idOrName) => {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!idOrName) return;
        setLoading(true);
        
        const cachedPokemon = getPokemonFromStorage(idOrName);
        if (cachedPokemon) {
            setPokemon(cachedPokemon);
            setLoading(false);
            return;
        } else {
            getPokemon(idOrName)
                .then(createPokemonProfile)
                .then(setPokemon)
                .catch((error) => setError(error.message))
                .finally(() => setLoading(false));
        }
    }, [idOrName]);

    return { data: pokemon, loading, error };
};
