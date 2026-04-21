import { ArrowRightBox, ArrowLeftBox } from "pixelarticons/react";

export const Pagination = ({ currentPage, onPrevPage, onNextPage }) => {
    return (
        <div className="flex justify-center text-white items-center py-4 gap-4 bg-bgDarkGray w-full mt-auto rounded-b-xl shadow-inner">
            <button
                className="disabled:opacity-30 hover:scale-110 transition-transform cursor-pointer"
                onClick={onPrevPage}
                disabled={currentPage === 1}
            >
                <ArrowLeftBox />
            </button>
            <div className="bg-white/10 px-4 rounded-md  font-item">
                <span className="font-bold text-xs uppercase tracking-widest">
                    Page {currentPage}
                </span>
            </div>
            <button
                className="hover:scale-110 transition-transform cursor-pointer"
                onClick={onNextPage}
            >
                <ArrowRightBox />
            </button>
        </div>
    );
};
