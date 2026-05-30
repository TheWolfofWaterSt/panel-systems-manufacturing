import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ComponentProps<"a"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-amber-500 text-navy-900 hover:bg-amber-600 font-semibold",
  secondary: "bg-navy-900 text-white hover:bg-navy-800 font-semibold",
  outline: "border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold",
  ghost: "text-navy-900 hover:bg-slate-100 font-medium",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm min-h-[44px] inline-flex items-center justify-center",
  md: "px-6 py-3 text-base min-h-[44px] inline-flex items-center justify-center",
  lg: "px-8 py-4 text-lg min-h-[48px] inline-flex items-center justify-center",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "rounded-md transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
