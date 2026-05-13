# far-far-west-loadouts

Ya know, for loadouts!

A TypeScript app built with [Vite](https://vite.dev/), [React](https://react.dev/), [MUI](https://mui.com/), and [Redux Toolkit](https://redux-toolkit.js.org/).

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Stack

- **Vite** — fast dev server and bundler
- **React 19** + **TypeScript** — UI framework with full type safety
- **MUI (Material UI)** — component library
- **Redux Toolkit** — state management with `configureStore`, slices, and typed hooks

## Project Structure

```
src/
├── store/
│   ├── index.ts          # Redux store configuration
│   ├── counterSlice.ts   # Example counter slice
│   └── hooks.ts          # Typed useAppDispatch / useAppSelector hooks
├── App.tsx               # Root component (MUI + Redux wired up)
└── main.tsx              # Entry point (Provider + ThemeProvider)
```

