import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Pokemon } from "../types/pokemon";
import { getPokemons } from "../feature/pokemonThunks";

export interface PokemonState {
  pokemons: Pokemon[];
  combatList: Pokemon[];
  searchTerm: string;
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: PokemonState = {
  pokemons: [],
  combatList: [],
  status: "idle",
  searchTerm: "",
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemons(state, action: PayloadAction<Pokemon[]>) {
      state.pokemons = action.payload;
    },
    addToCombatList(state, action: PayloadAction<Pokemon>) {
      const isAlreadyInCombatList = state.combatList.some(
        (pokemon) => pokemon.name === action.payload.name
      );

      if (!isAlreadyInCombatList && state.combatList.length < 6) {
        state.combatList.push(action.payload);
      }
    },
    removeFromCombatList(state, action: PayloadAction<string>) {
      state.combatList = state.combatList.filter(
        (pokemon) => pokemon.name !== action.payload
      );
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemons.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPokemons.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pokemons = action.payload;
      })
      .addCase(getPokemons.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {
  setPokemons,
  addToCombatList,
  removeFromCombatList,
  setSearchTerm,
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
