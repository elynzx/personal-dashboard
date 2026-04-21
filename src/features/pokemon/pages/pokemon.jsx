import { Header } from "../components/header/header";
import { useState } from "react";
import { useGetPokemons } from "../hooks/use-get-pokemons";
import { ArrowRightBox, ArrowLeftBox } from "pixelarticons/react";
import { PokemonCard } from "../components/pokemon-card/pokemon-card";
import { Pagination } from "../components/pagination/pagination";

export function PokemonPage() {
    const [page, setPage] = useState(1);
    const limit = 8;
    const offset = (page - 1) * limit;
    const { data, loading, error } = useGetPokemons(offset, limit);
    const handlePrevPage = () =>
        setPage((pageIndex) => Math.max(1, pageIndex - 1));
    const handleNextPage = () => setPage((pageIndex) => pageIndex + 1);

    if (loading) {
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        );
    }
    return (
        <div className="flex w-full h-full p-4 md:p-10 pt-9 md:pt-13">
            <div className="flex-1 w-full p-6 h-full rounded-3xl bg-bgDarkPink/30 relative border-4 border-white/40 shadow-xl shadow-white">
                <Header />
                <div className="relative w-full flex flex-col h-full rounded-3xl">
                    <div className="flex-1 overflow-y-auto scrollbar-hide w-full bg-linear-to-b from-pink-0 to-bgGreen rounded-t-xl py-8 md:py-12 md:px-18">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-8 md:mt-4 gap-3 justify-items-center items-center min-h-full">
                            {data.map((pokemon) => (
                                <PokemonCard
                                    key={pokemon.name}
                                    pokemon={pokemon}
                                />
                            ))}
                        </div>
                    </div>

                    <Pagination
                        currentPage={page}
                        onPrevPage={handlePrevPage}
                        onNextPage={handleNextPage}
                    />
                </div>
            </div>
        </div>
    );
}
