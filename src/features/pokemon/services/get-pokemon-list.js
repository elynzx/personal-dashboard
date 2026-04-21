export const getPokemonsList = async (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed getting pokemons list");
    }
    return response.json();
};