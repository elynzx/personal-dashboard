import { useEffect, useState } from "react";
import { getPokemonDetail } from "../services/get-pokemon";

export const useGetPokemon = (idOrName) => {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!idOrName) return;
        
        setLoading(true);
        getPokemonDetail(idOrName)
            .then((data) => setPokemon(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [idOrName]);

    return { data: pokemon, loading, error };
};
