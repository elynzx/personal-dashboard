export const PokemonCardSkeleton = () => {
    return (
        <div className="flex flex-col p-4 bg-bgGray/60 w-48 md:max-w-42 h-60 rounded-2xl border border-white/5">
            <div className="w-full h-35 bg-bgGray/50 rounded-lg animate-pulse flex justify-center items-center">
                <div className="w-20 h-20  rounded-full"></div>
            </div>

            <div className="flex flex-col justify-center items-center p-2 gap-2 mt-2">
                <div className="h-2 w-12 bg-bgGray/50 rounded-sm animate-pulse"></div>
                <div className="h-4 w-24 bg-bgGray/50 rounded-sm animate-pulse"></div>
                <div className="h-5 w-16 bg-bgGray/50 mt-2 rounded-sm animate-pulse"></div>
            </div>
        </div>
    );
};

export const PaginationSkeleton = () => {
    return (
        <div className="flex justify-between items-center py-6 px-12 bg-bgGray/60 w-full mt-auto rounded-b-xl h-18">
            <div className="h-6 w-16 bg-bgGray/50 rounded-md animate-pulse"></div>
            <div className="h-6 w-40 bg-bgGray/50 rounded-md animate-pulse"></div>
            <div className="h-8 w-8 bg-bgGray/50 rounded-md animate-pulse"></div>
        </div>
    );
};

export const PokemonSkeleton = () => {
    return (
        <div className="flex flex-col flex-1 w-full bg-linear-to-b from-bgPink to-bgGreen rounded-t-xl overflow-hidden">
            <div className="flex-1 overflow-y-auto py-8 md:py-26 md:px-18">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center">
                    {Array.from({ length: 8 }).map((_, key) => (
                        <PokemonCardSkeleton key={key} />
                    ))}
                </div>
            </div>
            <PaginationSkeleton />
        </div>
    );
};
