import { CustomPokeball } from "../custom-pokeball/custom-pokeball";

export const Header = () => {
    return (
        <header className="absolute left-1/2 -translate-x-1/2 top-2 z-10 w-[90%] md:w-[70%] ">
            <div className="relative flex flex-col items-center w-full">
                <div className="z-20 absolute -top-6 border-3 rounded-full border-bgDarkGray">
                    <CustomPokeball size={40} />
                </div>
                <div className="z-0 absolute -top-8 md:-top-9 bg-bgPink/60 rounded-full w-16 md:w-18 h-16 md:h-18"></div>
                <div className="z-10 w-full bg-bgDarkPink/40  rounded-full px-8 py-2 mt-2 flex items-center justify-center min-w-45 border-4 border-white/40 shadow-md">
                    <div className="bg-white rounded-full py-1 flex items-center justify-center w-[90%] md:w-[70%]">
                        <h1 className="font-item font-bold text-bgDarkPink uppercase text-sm tracking-widest">
                            Poke App
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    );
};
