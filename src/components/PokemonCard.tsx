import { memo } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { addToCombatList, removeFromCombatList } from "../store/pokemonSlice";
import { AddIcon, RemoveIcon } from "./Icons";
import type { Pokemon } from "../types/pokemon";

interface Props {
  pokemon: Pokemon;
  isAdded?: boolean;
}

interface ActionButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

function ActionButton({ onClick, children }: ActionButtonProps) {
  return (
    <button
      className="absolute flex items-center justify-center right-3 top-3 rounded-full h-8 w-8 border border-transparent transition-all hover:bg-sky-400  hover:border-sky-500"
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

const PokemonCard = ({ pokemon, isAdded }: Props) => {
  const dispatch = useAppDispatch();

  const handleAdd = () => dispatch(addToCombatList(pokemon));

  const handleRemove = () => dispatch(removeFromCombatList(pokemon.name));

  return (
    <div className="group relative rounded-md border-2 border-slate-200 bg-slate-100 bg-opacity-40 p-2 hover:border-slate-300 hover:bg-opacity-75 dark:border-slate-800 dark:bg-slate-900 dark:bg-opacity-40 dark:hover:border-slate-600 dark:hover:bg-opacity-75">
      <Link to={pokemon.name} className="flex flex-col w-full gap-2">
        <img
          alt={pokemon.name}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          className="aspect-square w-full rounded-md bg-opacity-20 p-7 group-hover:bg-sky-200 dark:group-hover:bg-sky-900"
          loading="lazy"
          width="250"
          height="250"
        />
        <div className="flex justify-center gap-1 rounded-md bg-slate-300 bg-opacity-40 py-2 font-semibold dark:bg-slate-700 dark:bg-opacity-40">
          <span className="capitalize">{pokemon.name}</span>
        </div>
      </Link>

      {isAdded ? (
        <ActionButton onClick={handleRemove}>
          <RemoveIcon />
        </ActionButton>
      ) : (
        <ActionButton onClick={handleAdd}>
          <AddIcon />
        </ActionButton>
      )}
    </div>
  );
};

export default memo(PokemonCard);
