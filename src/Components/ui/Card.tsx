
import type { HTMLAttributes } from "react";
import { cn } from "../../utils/utils";


export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-muted bg-white p-4 shadow-sm",
        className
      )}
      {...props}
    />
  );
}
