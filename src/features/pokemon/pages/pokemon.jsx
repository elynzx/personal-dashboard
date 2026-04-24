import { Header } from "../components/header/header";
import { useState } from "react";
import { useGetPokemons } from "../hooks/use-get-pokemons";
import { ArrowRightBox, ArrowLeftBox } from "pixelarticons/react";
import { PokemonCard } from "../components/pokemon-card/pokemon-card";
import { Pagination } from "../components/pagination/pagination";
import { POKEMON_LIMIT } from "../utils/constants";

export function PokemonPage() {
    const [page, setPage] = useState(1);

    const offset = (page - 1) * POKEMON_LIMIT;
    const { data, loading, error } = useGetPokemons(offset, POKEMON_LIMIT);
    const handlePrevPage = () =>
        setPage((pageIndex) => Math.max(1, pageIndex - 1));
    const handleNextPage = () => setPage((pageIndex) => pageIndex + 1);

    if (loading) {
        return (
            <div className="flex flex-col flex-1 items-center justify-center w-full bg-linear-to-b from-bgPink to-bgGreen rounded-t-xl">
                <h2 className="text-center font-item font-bold text-bgDarkGray animate-pulse">
                    Loading...
                </h2>
            </div>
        );
    }
    return (
        <>
            <div className="flex-1 overflow-y-auto scrollbar-hide w-full bg-linear-to-b from-bgPink to-bgGreen rounded-t-xl py-8 md:py-12 md:px-18">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-8 md:mt-4 gap-3 justify-items-center items-center min-h-full">
                    {data?.map((pokemon) => (
                        <PokemonCard key={pokemon.name} pokemon={pokemon} />
                    ))}
                </div>
            </div>

            <Pagination
                currentPage={page}
                onPrevPage={handlePrevPage}
                onNextPage={handleNextPage}
            />
        </>
    );
}
