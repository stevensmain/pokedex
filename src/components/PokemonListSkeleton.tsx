import SkeletonComponent from "./Skeleton";

const SKELETON_COUNT = 8;

const SkeletonItem = () => (
  <div className="flex w-full flex-col gap-1 rounded-md border-2 border-slate-200 bg-slate-100 bg-opacity-40 p-2 py-[5px] dark:border-slate-800 dark:bg-slate-900 dark:bg-opacity-40">
    <SkeletonComponent className="aspect-square rounded-md leading-none" />
    <SkeletonComponent className="h-10" />
  </div>
);

export default function PokemonListSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
        <SkeletonItem key={index} />
      ))}
    </div>
  );
}
