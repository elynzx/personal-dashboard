import { useState, useEffect } from "react";
import { format } from "date-fns";

export const Timer = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const timeString = format(date, "HH:mm");
    const ampm = format(date, "aa");
    const day = format(date, "eeee");

    return (
        <div className="hidden bg-white lg:flex py-3 w-52 text-bgDarkGray/80 font-bold rounded-3xl border border-dotted border-bgDarkGray flex-col items-center justify-center">
            <span className="font-title">Be kind</span>
            <span className="text-4xl">{timeString}</span>
            <span className="font-bold uppercase">{ampm}</span>
            <span className="capitalize">{day}</span>
        </div>
    );
};
