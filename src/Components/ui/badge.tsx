import type { HTMLAttributes } from "react";
import { cn } from "../../utils/utils";


export function Badge({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        className
      )}
      {...props}
    />
  );
}
