import { HtmlHTMLAttributes } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type Props = HtmlHTMLAttributes<typeof Skeleton>;

export default function SkeletonComponent(props: Props) {
  return (
    <Skeleton
      {...props}
      baseColor="rgba(150, 150, 150, 0.05)"
      highlightColor="rgba(255, 255, 255, 0.25)"
    />
  );
}
