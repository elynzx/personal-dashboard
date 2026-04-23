import { Outlet } from "react-router";
import { Header } from "../components/header/header";

export function PokemonLayout() {
    return (
        <div className="flex w-full h-full p-4 md:p-10 pt-9 md:pt-13">
            <div className="flex-1 w-full p-6 h-full rounded-3xl bg-bgPink relative border-4 border-white/40 shadow-xl shadow-white">
                <Header />
                <div className="relative w-full flex flex-col h-full rounded-3xl overflow-hidden">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
