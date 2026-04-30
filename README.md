# Personal Dashboard ♡

> Modern dashboard built with React 18, Vite, and JavaScript. A comprehensive platform for personal management: tasks, Pokémon encyclopedia, user profiling, and productivity tools.

## Project Links
- **Live Demo:** [personal-dashboard-drab-one.vercel.app](https://vercel.app)

## Grading Access
> **Note:** Credentials are pre-filled on the login page for quick access. 

## Tech Stack

| Category             | Technology                    |
| -------------------- | ----------------------------- |
| **Framework**        | React 18 + Vite               |
| **Lenguaje**         | JavaScript (ES2022+)          |
| **Routing**          | React Router DOM              |
| **State Management** | Zustand                       |
| **UI Framework**     | TailwindCSS                   |
| **APIs**             | PokéAPI (Pokémon data)        |
| **Utilities**        | Use-Debounce, Date-fns        |

## Prerequisites

- **Node.js** 18+
- **npm** 9+
- **Git** for version control

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

   Server runs at `http://localhost:5173` (or the port indicated by Vite).

## Scripts

| Command         | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Start development server       |
| `npm run build` | Build for production           |
| `npm run serve` | Serve production build locally |
| `npm run lint`  | Run ESLint                     |

## Architecture

The application follows a **Feature-Based Architecture** with clear separation of concerns.

### Project Structure

```
src/
├── app/ # App configuration, pages, and layouts
├── assets/ # Media, icons, and static images
├── common/ # Shared components, hooks, and providers
├── features/ # Independent modules (todo, pokemon, auth, etc.)
└── router/ # Route definitions and navigation logic
```

## Key Features

- **Authentication:** Protected routes and session management via Zustand.
- **Beary Focused:** A  task organizer with an Eisenhower Priority Matrix.
- **PokeApp:** Advanced Pokémon search with debouncing and type filtering.
- **User Profile:** Identity management through UserProvider (Context API).

## Development

### Creating a New Feature

1. Create a folder in `src/features/my-feature/`
2. Suggested structure:
    ```
    my-feature/
    ├── components/
    ├── hooks/
    ├── pages/
    └── store/
    ```

### Ejemplo de uso de Zustand

```js
import { useStore } from "@/features/todo/store/readTodos";

const todos = useStore((state) => state.todos);
```

### Zustand Usage Example

```js
import { useStore } from "@/features/todo/store/readTodos";

const todos = useStore((state) => state.todos);
```

## Code Quality

- **ESLint** for linting
- **Prettier** for formatting
- **Conventional Commits** for version control history

Run code checks:

```bash
npm run lint
```

## Contributing

1. Create a branch: `git checkout -b feature/name`
2. Make changes and commit: `git commit -m "feat: description"`
3. Verify code: `npm run lint`
4. Open a Pull Request

### Commit Convention

```
feat: new feature
fix: bug fix
docs: documentation
style: formatting/styling
refactor: code refactoring
test: adding tests
chore: miscellaneous tasks
```

## Resources

- [React Docs](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Zustand Docs](https://docs.pmnd.rs/zustand)
- [PokéAPI](https://pokeapi.co/)
- [Fake Store API](https://fakestoreapi.com/)
- [TailwindCSS](https://tailwindcss.com)

---
*Built with ♡ by [Elynzx](https://github.com/elynzx)*