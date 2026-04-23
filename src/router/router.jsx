import { createBrowserRouter } from "react-router";

import { Home } from "../app/home/home";
import { AboutMe } from "../app/about-me/about-me";
import { Todo } from "../app/todo/todo";
import { Focus } from "../app/focus/focus";
import { Pokemon } from "../app/pokemon/pokemon";
import { DashboardLayout } from "../common/layouts/dashboard-layout";
import { TodoWrapper } from "../app/todo/todo-wrapper";
import { PokemonProfile } from "../app/pokemon/pokemon-profile";
import { PokemonLayout } from "../features/pokemon/layout/pokemon-layout";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: DashboardLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "about-me",
                Component: AboutMe,
            },
            {
                path: "todo",
                Component: TodoWrapper,
                children: [
                    {
                        index: true,
                        Component: Todo,
                    },
                    {
                        path: "focus/:quadrant",
                        Component: Focus,
                    },
                ],
            },
            {
                path: "pokemon",
                Component: PokemonLayout,
                children: [
                    {
                        index: "true",
                        Component: Pokemon,
                    },
                    {
                        path: ":name",
                        Component: PokemonProfile,
                    },
                ],
            },
        ],
    },
]);
