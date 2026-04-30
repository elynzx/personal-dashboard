import { Logout } from "pixelarticons/react";
import { useAuthStore } from "../../../features/auth/store/auth-store";
import { Avatar } from "../avatar/avatar";
import { Link } from "react-router";
import { Timer } from "../timer/timer";

const navigationItems = [
    { label: "Home", to: "/" },
    { label: "About me", to: "about-me" },
    { label: "Todo App", to: "todo" },
    { label: "Poke App", to: "pokemon" },
];

export function Sidebar() {
    const { logout } = useAuthStore();

    return (
        <aside className="w-full lg:w-68 h-fit lg:h-full border-b lg:border-b-0 lg:border-r border-bgDarkGray/50 flex flex-col sm:flex-row lg:flex-col items-center justify-between lg:justify-start py-2.5 lg:py-8 px-6 bg-white/50 lg:bg-transparent">
            <div className="flex items-center lg:flex-col w-full lg:w-auto justify-between lg:justify-start">
                <div className="font-item font-semibold lg:flex hidden tracking-[5px] lg:mt-auto lg:justify-center w-full text-center py-2 mb-6 border-b border-dotted border-bgDarkGray">
                    <p>♡ Welcome ♡</p>
                </div>
                <Timer />
                <nav className="flex flex-row lg:flex-col gap-2 lg:mt-8 lg:space-y-4 w-full justify-between">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.to}
                            className="rounded-2xl flex items-center justify-center md:justify-start gap-2 w-22 md:px-0 md:w-52 h-8 md:h-11 bg-bgDarkGray/70 text-white border border-transparent hover:border-pink-200 hover:bg-bgDarkGray transition-all hover:-translate-y-1 shadow-sm"
                            to={item.to}
                        >
                            <span className="text-[10px] lg:text-xs lg:ml-8 font-bold hidden sm:inline">
                                ⋆｡֒✧˚ ♡
                            </span>
                            <span className="text-xs font-bold">
                                {item.label}
                            </span>
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="lg:flex hidden lg:mt-auto lg:flex-col lg:items-center w-full gap-4 pt-4 border-t border-dotted border-bgDarkGray/60">
                <Avatar />
                <div className="flex items-center justify-center pt-2 border-t border-dotted border-bgDarkGray/60">
                    <button
                        className="group flex items-center justify-center gap-3 rounded-2xl w-52 py-2.5 mb-4  hover:bg-bgDarkPink hover:text-white hover:border-bgDarkPink text-bgDarkGray transition-all duration-300"
                        onClick={logout}
                    >
                        <Logout className="size-5 transition-transform group-hover:scale-110 group-hover:-rotate-12" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">
                            Logout
                        </span>
                    </button>
                </div>
            </div>
        </aside>
    );
}
