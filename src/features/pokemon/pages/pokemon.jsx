import { Header } from "../components/header/header";
import { useGetPokemons } from "../hooks/use-get-pokemons";
import { ArrowRightBox, ArrowLeftBox } from "pixelarticons/react";
import { PokemonCard } from "../components/pokemon-card/pokemon-card";
import { Pagination } from "../components/pagination/pagination";
import { usePaginationStore } from "../store/use-pagination-store";
import { PokemonSkeleton } from "../components/skeletons/pokemon-skeleton";

export function PokemonPage() {
    const page = usePaginationStore((state) => state.page);
    const limit = usePaginationStore((state) => state.limit);
    const setPage = usePaginationStore((state) => state.setPage);
    const resetPagination = usePaginationStore(
        (state) => state.resetPagination,
    );

    const offset = (page - 1) * limit;
    const { data, loading, error } = useGetPokemons(offset, limit);
    const handlePrevPage = () => setPage(Math.max(1, page - 1));
    const handleNextPage = () => setPage(page + 1);
    const resetPage = () => resetPagination();

    if (error) {
        return (
            <div className="flex flex-col flex-1 items-center justify-center w-full bg-linear-to-b from-bgPink to-bgGreen rounded-t-xl">
                <h2 className="text-center font-item font-bold text-bgDarkGray animate-pulse">
                    An error ocurred.
                </h2>
            </div>
        );
    }

    if (loading) {
        return <PokemonSkeleton />;
    }

    return (
        <div className="flex flex-col h-full w-full bg-linear-to-b from-bgPink to-bgGreen rounded-t-xl overflow-hidden">
            <div className="flex-1 overflow-y-auto scrollbar-hide flex flex-col items-center justify-center p-6 md:p-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center w-full max-w-6xl h-full">
                    {data?.map((pokemon) => (
                        <PokemonCard key={pokemon.name} pokemon={pokemon} />
                    ))}
                </div>
            </div>

            <Pagination
                currentPage={page}
                firstPage={resetPage}
                onPrevPage={handlePrevPage}
                onNextPage={handleNextPage}
            />
        </div>
    );
}
