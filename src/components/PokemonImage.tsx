import { Sprites } from "../types/pokemon";

interface ImageProps {
  name: string;
  sprites: Sprites;
}

export default function PokemonImage({ sprites, name }: ImageProps) {
  return (
    <div className="relative aspect-square w-full rounded-lg p-2 lg:w-[20rem] lg:h-[20rem] bg-opacity-75 border-2 bg-sky-400 dark:bg-sky-800 border-sky-800 dark:border-sky-500">
      <img
        alt={name}
        src={
          sprites.versions?.["generation-v"]["black-white"].animated
            ?.front_default
        }
        className={`aspect-square w-full object-contain object-center`}
        loading="lazy"
        width="500"
        height="500"
      />
    </div>
  );
}
