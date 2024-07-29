import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPokemonDetail, fetchPokemons } from "../services/pokemonApi";

export const getPokemons = createAsyncThunk("pokemon/getPokemons", async () => {
  const pokemons = await fetchPokemons();

  const detailedPokemons = await Promise.all(
    pokemons.map(({ name }) => fetchPokemonDetail(name))
  );

  return detailedPokemons;
});
