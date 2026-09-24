import { cn } from "@/lib/utils";
import { Hexagon } from "lucide-react";

export function Logo({
  className,
  compact = false,
  sidebar = false,
}: {
  className?: string;
  compact?: boolean;
  sidebar?: boolean;
}) {
  const wordmark = (
    <span className={cn("font-bold tracking-tight text-foreground", className)}>
      Solo<span className="text-primary">ema</span>
    </span>
  );

  if (sidebar) {
    return (
      <>
        <span
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
            "bg-primary/15 text-primary ring-1 ring-primary/30",
            className,
          )}
          aria-hidden
        >
          <Hexagon className="h-5 w-5" strokeWidth={2.5} />
        </span>
        <span
          className={cn(
            "ml-3 overflow-hidden whitespace-nowrap font-bold tracking-tight text-foreground transition-all duration-300",
            "max-w-0 opacity-0",
            "group-hover/sidebar:max-w-[11rem] group-hover/sidebar:opacity-100",
            "group-focus-within/sidebar:max-w-[11rem] group-focus-within/sidebar:opacity-100",
          )}
        >
          Solo<span className="text-primary">ema</span>
        </span>
      </>
    );
  }

  return wordmark;
}
