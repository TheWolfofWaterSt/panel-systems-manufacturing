import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" && "text-center mx-auto max-w-3xl",
        className,
      )}
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-600 text-balance">{subtitle}</p>
      )}
    </div>
  );
}
