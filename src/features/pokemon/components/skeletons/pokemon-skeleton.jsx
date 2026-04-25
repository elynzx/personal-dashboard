export const PokemonCardSkeleton = () => {
    return (
        <div className="flex flex-col p-4 bg-gray-500/60 w-48 md:max-w-42 h-60 rounded-2xl border border-white/5">
            <div className="w-full h-35 bg-gray-600/50 rounded-lg animate-pulse flex justify-center items-center">
                <div className="w-20 h-20  rounded-full"></div>
            </div>

            <div className="flex flex-col justify-center items-center p-2 gap-2 mt-2">
                <div className="h-2 w-12 bg-gray-600/50 rounded-sm animate-pulse"></div>
                <div className="h-4 w-24 bg-gray-600/50 rounded-sm animate-pulse"></div>
                <div className="h-5 w-16 bg-gray-600/50 mt-2 rounded-sm animate-pulse"></div>
            </div>
        </div>
    );
};
export const PaginationSkeleton = () => {
    return (
        <div className="flex justify-between items-center h-16 md:h-20 px-4 md:px-12 bg-bgDarkGray w-full mt-auto rounded-b-xl border-t border-white/5">
            <div className="h-6 w-10 md:w-full bg-gray-600/40 rounded-md animate-pulse"></div>
            <div className="flex items-center gap-3 md:gap-6">
                <div className="h-7 w-7 bg-gray-600/40 rounded-md animate-pulse"></div>
                <div className="h-8 w-12 md:w-16 bg-white/5 rounded-lg animate-pulse border border-white/5"></div>
                <div className="h-7 w-7 bg-gray-600/40 rounded-md animate-pulse"></div>
            </div>
            <div className="w-10 md:w-16 h-6 opacity-0"></div>
        </div>
    );
};
export const PokemonSkeleton = () => {
    return (
        <div className="flex flex-col h-full w-full bg-linear-to-b from-bgPink to-bgGreen rounded-t-xl overflow-hidden">
            <div className="flex-1 overflow-y-auto scrollbar-hide flex flex-col items-center justify-center p-6 md:p-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center w-full max-w-6xl">
                    {Array.from({ length: 8 }).map((_, key) => (
                        <PokemonCardSkeleton key={key} />
                    ))}
                </div>
            </div>
            <PaginationSkeleton />
        </div>
    );
};
