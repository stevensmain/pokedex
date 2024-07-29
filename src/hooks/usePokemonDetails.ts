import { useEffect, useState } from "react";
import { fetchPokemonDetail } from "../services/pokemonApi";
import { Pokemon } from "../types/pokemon";

export default function usePokemonDetails(pokemonName: string) {
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon | null>(null);

  useEffect(() => {
    const getPokemonDetail = async () => {
      const data = await fetchPokemonDetail(pokemonName);
      setPokemonDetails(data);
    };
    getPokemonDetail();
  }, [pokemonName]);

  return pokemonDetails;
}
