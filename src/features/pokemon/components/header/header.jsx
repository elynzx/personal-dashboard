import { Link, useLocation } from "react-router";
import { CustomPokeball } from "../custom-pokeball/custom-pokeball";
import Logo from "../../../../assets/pokemon-app/logo-gray.png";
import { MenuSquare } from "pixelarticons/react";
import { useState } from "react";

export const Header = () => {
    return (
        <header className="absolute left-1/2 -translate-x-1/2 -top-6 md:-top-9 -z-50 w-[85%] md:w-[70%] ">
            <div className="w-full bg-bgLightPink/70 backdrop-blur-3xl rounded-2xl flex items-center justify-center shadow-xl relative border-4 border-white/30">
                    <img
                        src={Logo}
                        alt="PokeAPI"
                        className="h-10 md:h-14 object-contain top-0"
                    />
            </div>
        </header>
    );
};
