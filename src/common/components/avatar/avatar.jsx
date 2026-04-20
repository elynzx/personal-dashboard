import { useUser } from "../../providers/user-provider/useUser";

export const Avatar = () => {
    const { user } = useUser();
    return (
        <div className="flex flex-col gap-3 items-center font-item">
            <img
                src={user.avatar}
                className="rounded-full w-20 h-20 shadow-xl shadow-white border border-white"
            />
            <div className="flex flex-col">
                <h3 className="text-sm font-semibold tracking-tight text-gray-800">
                    {user.name}
                    <span className="font-light text-gray-400 mx-1"> | </span>
                    <span className="text-xs uppercase tracking-widest text-gray-500">
                        {user.role}
                    </span>
                </h3>
                <a
                    href="https://github.com/elynzx/beary-focused-app"
                    target="_blank"
                    className="hover:underline mt-2 hover:text-bgDarkPink underline-offset-4 transition-colors text-[12px] text-bgDarkGray tracking-widest"
                >
                    ‧₊˚♡ by @{user.username} ♡‧₊˚
                </a>
            </div>
        </div>
    );
};
