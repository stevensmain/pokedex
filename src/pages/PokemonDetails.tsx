import { useParams } from "react-router-dom";

import usePokemonDetails from "../hooks/usePokemonDetails";
import PokemonImage from "../components/PokemonImage";
import PokemonDetails from "../components/PokemonDetails";

export default function PokemonDetailsPage() {
  const { name } = useParams();
  const pokemon = usePokemonDetails(name!);

  if (!pokemon) {
    return;
  }

  return (
    <div className="flex flex-col items-center gap-7">
      <PokemonImage name={pokemon?.name} sprites={pokemon?.sprites} />
      <PokemonDetails pokemon={pokemon} />
    </div>
  );
}
