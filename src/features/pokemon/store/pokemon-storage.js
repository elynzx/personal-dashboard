const STORAGE_KEY = "pokemon-storage";

let pokemonList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

export const createPokemonProfile = (pokemon) => ({
    id: pokemon.id,
    name: pokemon.name,
    image:
        pokemon.sprites?.versions?.["generation-v"]?.["black-white"]?.animated
            ?.front_default || pokemon.sprites?.front_default,
    weight: pokemon.weight,
    height: pokemon.height,
    types: pokemon.types?.map((type) => type.type.name),
    abilities: pokemon.abilities?.map((ability) => ability.ability.name),
});

const savePokemonsToStorage = () =>
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pokemonList));

export function getPokemonFromStorage(idOrName) {
    return (
        pokemonList.find(
            (pokemon) =>
                pokemon.name === idOrName || pokemon.id === Number(idOrName),
        ) || null
    );
}

export function addNewPokemonsToStorage(newPokemons) {
    const newPokemonsToAdd = newPokemons.filter(
        (newPokemon) =>
            !pokemonList.some((pokemon) => pokemon.id === newPokemon.id),
    );

    if (newPokemonsToAdd.length > 0) {
        pokemonList = [...pokemonList, ...newPokemonsToAdd];
        savePokemonsToStorage();
    }
}
