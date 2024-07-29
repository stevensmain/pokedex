interface PokemonTagProps {
  type: string;
}

export default function PokemonTag({ type }: PokemonTagProps) {
  return (
    <div className="h-8 grid place-content-center rounded-md px-4 text-sm bg-slate-400 text-white">
      {type}
    </div>
  );
}
