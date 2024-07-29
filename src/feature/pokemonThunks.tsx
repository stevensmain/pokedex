import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPokemonDetail, fetchPokemons } from "../services/pokemonApi";

export const getPokemons = createAsyncThunk("pokemon/getPokemons", async () => {
  const pokemons = await fetchPokemons();

  const detailedPokemons = await Promise.allSettled(
    pokemons.map(({ name }) => fetchPokemonDetail(name))
  );

  return detailedPokemons
    .filter((pokemon) => pokemon.status === "fulfilled")
    .map(({ value }) => value);
});
