import { useEffect } from "react";

import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { getPokemons } from "../feature/pokemonThunks";
import PokemonCard from "./PokemonCard";
import PokemonListSkeleton from "./PokemonListSkeleton";

export default function PokemonList() {
  const dispatch = useAppDispatch();
  const { pokemons, status, combatList, searchTerm } = useAppSelector(
    ({ pokemon }) => pokemon
  );

  const filtrerPokemons = pokemons.filter(
    (pokemon) =>
      (pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pokemon.id === parseInt(searchTerm)) &&
      !combatList.includes(pokemon)
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(getPokemons());
    }
  }, [dispatch, status]);

  if (status === "loading") return <PokemonListSkeleton />;

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filtrerPokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
