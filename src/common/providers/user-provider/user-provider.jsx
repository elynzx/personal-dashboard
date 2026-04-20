import { useState } from "react";
import { UserContext } from "./user-context";
import avatar from "./../../../assets/elynzx.jpeg";

const userObj = {
    id: 1,
    name: "Evelyn",
    username: "elynzx",
    avatar: avatar,
    role: "Admin",
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(userObj);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
