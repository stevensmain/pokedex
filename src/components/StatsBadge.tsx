import clsx from "clsx";

interface StatsBadgeProps {
  className: string;
  name: string;
  value: string;
}

export default function StatsBadge({
  className,
  name,
  value,
}: StatsBadgeProps) {
  return (
    <div
      className={clsx(
        "flex gap-1 rounded-md px-3 py-1 text-xs text-black",
        className
      )}
    >
      <span>{name}</span>
      <span>/</span>
      <span>{value}</span>
    </div>
  );
}
