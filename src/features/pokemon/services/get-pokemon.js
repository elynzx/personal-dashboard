export const getPokemon = async (idOrName) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${idOrName}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed getting pokemon detail");
    }
    return response.json();
};
