import { Route, Routes } from "react-router-dom";

import PokemonsPage from "./pages/Pokemons";
import PokemonDetailsPage from "./pages/PokemonDetails";
import CombatList from "./components/CombatList";

const ROUTES = {
  POKEMONS: "/pokemon",
  POKEMON_DETAILS: "/pokemon/:name",
};

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white text-black dark:bg-slate-950 dark:text-white">
      <div className="flex">
        <main className="flex w-full flex-col gap-4 px-[5vw] pb-10 pt-10 sm:pl-5">
          <Routes>
            <Route path={ROUTES.POKEMONS} element={<PokemonsPage />} />
            <Route
              path={ROUTES.POKEMON_DETAILS}
              element={<PokemonDetailsPage />}
            />
          </Routes>
        </main>
        <CombatList />
      </div>
    </div>
  );
}
