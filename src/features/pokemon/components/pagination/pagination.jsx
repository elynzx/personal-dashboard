import {
    ChevronLeft2,
    SquareChevronLeft,
    SquareChevronRight,
} from "pixelarticons/react";

export const Pagination = ({
    currentPage,
    firstPage,
    onPrevPage,
    onNextPage,
}) => {
    return (
        <div className="flex justify-between text-white tracking-wide font-item text-[12px] items-center py-6 gap-4 px-12 bg-bgDarkGray w-full mt-auto rounded-b-xl">
            <button
                className="text-white flex items-center justify-center uppercase disabled:opacity-30 hover:text-bgDarkPink hover:scale-110 transition-transform"
                onClick={firstPage}
                disabled={currentPage === 1}
            >
                <ChevronLeft2 size={24} />
                First
            </button>
            <div className="flex gap-4">
                <button
                    className="disabled:opacity-30 hover:text-bgDarkPink hover:scale-110 transition-transform cursor-pointer"
                    onClick={onPrevPage}
                    disabled={currentPage === 1}
                >
                    <SquareChevronLeft />
                </button>
                <div className="bg-white/10 px-4 py-0.5 rounded-md select-none flex items-center justify-center">
                    <span className="font-semibold uppercase">
                        Page {currentPage}
                    </span>
                </div>
                <button
                    className="hover:text-bgDarkPink hover:scale-110 cursor-pointer"
                    onClick={onNextPage}
                >
                    <SquareChevronRight />
                </button>
            </div>
            <div className="flex items-center gap-1 opacity-0 hidden sm:flex">
                <ChevronLeft2 size={24} />
                <span className=" uppercase font-mono">Next</span>
            </div>
        </div>
    );
};
