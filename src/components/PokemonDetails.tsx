import PokemonTag from "./PokemonTag";
import StatsBadge from "./StatsBadge";
import type { Pokemon } from "../types/pokemon";

interface Props {
  pokemon: Pokemon;
}

export default function PokemonDetails({ pokemon }: Props) {
  return (
    <div className="w-full">
      <div className="mb-2 flex justify-center gap-2 border-b-4 border-black pb-2 text-2xl font-bold dark:border-white">
        <i className="text-slate-500">#{pokemon.id}</i>
        <span className="capitalize">{pokemon.name}</span>
        <div className="flex gap-1">
          {pokemon.types.map((type) => (
            <PokemonTag key={type.type.name} type={type.type.name} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-xl">Details</h2>
          <div className="flex flex-wrap gap-2">
            <StatsBadge
              className="bg-emerald-200"
              name="species"
              value={pokemon.species.name}
            />
            <StatsBadge
              className="bg-blue-200"
              name="height"
              value={`${pokemon.height / 10}m`}
            />
            <StatsBadge
              className="bg-amber-200"
              name="weight"
              value={`${pokemon.weight / 10}kg`}
            />
            <StatsBadge
              className="bg-violet-200"
              name="base experience"
              value={`${pokemon.base_experience}`}
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl text-center">Stats</h2>
          <table className="w-full border-collapse text-center">
            <thead>
              <tr>
                <td className="border-2 border-sky-700 bg-sky-300 dark:border-sky-300 dark:bg-sky-800">
                  name
                </td>
                <td className="border-2 border-sky-700 bg-sky-300 dark:border-sky-300 dark:bg-sky-800">
                  base stat
                </td>
              </tr>
            </thead>
            <tbody>
              {pokemon.stats.map((stat) => (
                <tr key={stat.stat.name}>
                  <td className="border-2 border-slate-400 dark:border-slate-700">
                    {stat.stat.name}
                  </td>
                  <td className="border-2 border-slate-400 dark:border-slate-700">
                    {stat.base_stat}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
