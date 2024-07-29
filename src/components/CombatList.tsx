import { useAppSelector } from "../hooks/useAppSelector";
import PokemonCard from "./PokemonCard";

export default function CombatList() {
  const combatList = useAppSelector(({ pokemon }) => pokemon.combatList);

  return (
    <div className="sticky top-0 right-0 isolate flex flex-col h-screen w-full bg-slate-100 bg-opacity-5 p-5 backdrop-blur-2xl border-slate-700 max-sm:fixed max-sm:left-0 max-sm:top-0 max-sm:z-30 sm:max-w-[50vw] sm:border-r-2 lg:max-w-[25vw] overflow-auto">
      <h2 className="text-2xl font-bold text-white text-center mb-2">
        Combat List
      </h2>

      {combatList.length === 0 ? (
        <div className="flex-1 flex justify-center items-center">
          <p className="text-center text-white select-none">
            You have not added any pokemon to the combat list yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {combatList.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} isAdded />
          ))}
        </div>
      )}
    </div>
  );
}
