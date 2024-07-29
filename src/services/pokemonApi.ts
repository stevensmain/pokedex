import type {
  Pokemon,
  PokemonAPIResponse,
  PokemonInfo,
} from "../types/pokemon";

const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";
const POKEMON_LIMIT = 151;
const POKEMON_URL = `${POKEAPI_BASE_URL}/pokemon?limit=${POKEMON_LIMIT}`;

export const fetchPokemons = async (): Promise<PokemonInfo[]> => {
  try {
    const response = await fetch(POKEMON_URL);
    if (!response.ok) {
      throw new Error(`Error fetching pokemons: ${response.statusText}`);
    }
    const data = (await response.json()) as PokemonAPIResponse;
    return data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchPokemonDetail = async (name: string): Promise<Pokemon> => {
  try {
    const response = await fetch(`${POKEAPI_BASE_URL}/pokemon/${name}`);
    if (!response.ok) {
      throw new Error(`Error fetching pokemon details: ${response.statusText}`);
    }
    const data = (await response.json()) as Pokemon;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
