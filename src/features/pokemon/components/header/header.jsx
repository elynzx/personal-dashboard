import { Link, useLocation } from "react-router";
import { CustomPokeball } from "../custom-pokeball/custom-pokeball";
import Logo from "../../../../assets/pokemon-app/logo-gray.png";
import { MenuSquare } from "pixelarticons/react";
import { useState } from "react";

export const Header = () => {
    return (
        <header className="absolute left-1/2 -translate-x-1/2 -top-3 md:-top-8 -z-50 w-[85%] md:w-[80%]">
            <div className="w-full bg-bgPink/70 backdrop-blur-3xl rounded-2xl flex items-center justify-center shadow-xl relative ">
                    <img
                        src={Logo}
                        alt="PokeAPI"
                        className="h-10 md:h-14 object-contain top-0"
                    />
            </div>
        </header>
    );
};
