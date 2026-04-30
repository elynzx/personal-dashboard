import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/use-auth";
import { StarAndCrescent, Heart } from "@phosphor-icons/react";

export default function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "jimmie_k",
        password: "klein*#%*",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login({ username: form.username, password: form.password });
            navigate("/");
        } catch {
            alert("Username or password are incorrects");
        }
    };

    return (
        <div className="h-screen w-full bg-bgLightPink text-bgGray flex items-center justify-center p-4">
            <div className="flex flex-col justify-center items-center w-full max-w-md h-150 bg-bgPink/20 rounded-4xl border-2 border-bgDarkGray/50 shadow-lg p-8">
                <form
                    className="flex flex-col items-center w-full gap-8"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col items-center gap-2">
                        <StarAndCrescent
                            weight="fill"
                            className="text-bgDarkPink size-8 animate-pulse"
                        />
                        <p className="font-title text-xl font-semibold text-bgDarkGray/80 text-center">
                            Welcome back
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 w-full px-4">
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] uppercase font-bold tracking-widest ml-2 text-bgDarkGray/60">
                                Username:
                            </span>
                            <input
                                type="text"
                                placeholder="Username"
                                value={form.username}
                                className="w-full h-12 bg-white/50 focus:bg-white focus:outline-none px-6 border border-bgDarkGray/30 rounded-2xl text-sm transition-all placeholder:text-bgDarkGray/40 shadow-sm"
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        username: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] uppercase font-bold tracking-widest ml-2 text-bgDarkGray/60">
                                Password:
                            </span>
                            <input
                                type="password"
                                placeholder="Password"
                                value={form.password}
                                className="w-full h-12 bg-white/50 focus:bg-white focus:outline-none px-6 border border-bgDarkGray/30 rounded-2xl text-sm transition-all placeholder:text-bgDarkGray/40 shadow-sm"
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>

                    <button
                        className="mt-4 rounded-2xl flex items-center justify-center gap-2 w-full max-w-50 h-12 bg-bgDarkGray text-white border border-transparent hover:border-pink-200 hover:bg-bgDarkGray/90 transition-all hover:-translate-y-1 shadow-md cursor-pointer font-bold tracking-widest uppercase text-xs"
                        type="submit"
                    >
                        <span>Enter</span>
                    </button>
                </form>

                <div className="mt-12 flex flex-col items-center gap-3 border-t border-dotted border-bgDarkGray/30 pt-6 w-full">
                    <div className="flex items-center gap-2 text-[10px] text-bgDarkGray font-black uppercase tracking-widest">
                        <span>Built with</span>
                        <Heart
                            weight="fill"
                            size={14}
                            className="text-bgDarkPink animate-pulse"
                        />
                        <span>by Elynzx</span>
                    </div>

                    <a
                        href="https://github.com/elynzx/personal-dashboard"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-2 text-[10px] text-bgDarkGray/60 hover:text-bgDarkPink transition-all uppercase font-bold tracking-[2px]"
                    >
                        <span className="opacity-40 group-hover:opacity-100">
                            ‧₊˚♡
                        </span>
                        <span>View Repository</span>
                        <span className="opacity-40 group-hover:opacity-100">
                            ♡‧₊˚
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}
