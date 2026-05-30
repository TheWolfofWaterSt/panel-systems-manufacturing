import { cn } from "@/lib/utils";

export function Badge({ className, children, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-steel-400/40 bg-white px-3 py-1 text-sm font-medium text-navy-700",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
