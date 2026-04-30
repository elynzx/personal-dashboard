import { Outlet } from "react-router";
import { Header } from "../components/header/header";

export function PokemonLayout() {
    return (
        <div className="flex w-full h-full p-4 md:p-10 pt-9 md:pt-13 bg-linear-to-b from-bgPink to-bgGreen">
            <div className="flex-1 w-full p-6 h-full rounded-3xl bg-white/20 border-4 border-white/40 backdrop-blur-xl relative flex flex-col ">
                <Header />
                <div className="relative mt-4 flex-1 flex flex-col rounded-2xl border-2 border-bgDarkGray bg-white/10 shadow-inner overflow-y-auto scrollbar-hide">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
