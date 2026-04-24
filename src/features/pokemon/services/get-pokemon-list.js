import { POKEMON_LIMIT } from "../utils/constants";

export const getPokemonsList = async (offset = 0, limit = POKEMON_LIMIT) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed getting pokemons list");
    }
    return response.json();
};
