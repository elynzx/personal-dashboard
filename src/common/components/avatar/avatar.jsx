import { useUser } from "../../providers/user-provider/useUser";

export const Avatar = () => {
    const { user } = useUser();

    return (
        <div className="flex flex-col gap-4 items-center font-item w-full py-2">
            <img
                src={user.avatar}
                alt="avatar"
                className="rounded-full w-18 h-18 shadow-xl shadow-white/10 border-2 border-white/20 object-cover"
            />
            <div className="flex flex-col items-center text-center">

                <h3 className="text-[11px] font-black uppercase tracking-widest text-bgDarkGray/80">
                    {user.name}
                    <span className="font-light opacity-30 mx-2">|</span>
                    <span className="text-[10px] text-bgDarkPink">
                        {user.role}
                    </span>
                </h3>
                <div className="flex items-center justify-center gap-2 mt-2 bg-white/50 py-1 px-3 rounded-full border border-white/10">
                    <div className="w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                        <div className="w-2 h-2 bg-bgDarkPink rounded-full animate-pulse shadow-[0_0_6px_rgba(255,182,193,0.8)]" />
                    </div>
                    <span className="text-[9px] font-black tracking-[1.5px] text-bgDarkGray/60 lowercase">
                        @{user.username} <span className="text-bgDarkPink/80">online</span>
                    </span>
                </div>
            </div>
        </div>
    );
};
