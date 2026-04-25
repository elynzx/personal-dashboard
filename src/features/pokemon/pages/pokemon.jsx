import { Header } from "../components/header/header";
import { useGetPokemons } from "../hooks/use-get-pokemons";
import { ArrowRightBox, ArrowLeftBox } from "pixelarticons/react";
import { PokemonCard } from "../components/pokemon-card/pokemon-card";
import { Pagination } from "../components/pagination/pagination";
import { usePaginationStore } from "../store/use-pagination-store";

export function PokemonPage() {
    const page = usePaginationStore((state) => state.page);
    const limit = usePaginationStore((state) => state.limit);
    const setPage = usePaginationStore((state) => state.setPage);

    const offset = (page - 1) * limit;
    const { data, loading, error } = useGetPokemons(offset, limit);
    const handlePrevPage = () => setPage(Math.max(1, page - 1));
    const handleNextPage = () => setPage(page + 1);

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
