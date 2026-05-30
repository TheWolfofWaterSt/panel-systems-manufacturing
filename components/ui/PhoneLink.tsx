"use client";

import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface PhoneLinkProps {
  className?: string;
  showIcon?: boolean;
  variant?: "default" | "header" | "prominent";
}

export function PhoneLink({
  className,
  showIcon = true,
  variant = "default",
}: PhoneLinkProps) {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "phone_click", { event_category: "conversion" });
    }
  };

  return (
    <a
      href={`tel:${siteConfig.phoneTel}`}
      onClick={handleClick}
      className={cn(
        "inline-flex items-center gap-2 font-semibold transition-colors hover:text-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500",
        variant === "header" && "text-white hover:text-amber-400 text-sm md:text-base",
        variant === "prominent" && "text-2xl md:text-3xl text-navy-900",
        variant === "default" && "text-navy-900",
        className,
      )}
    >
      {showIcon && (
        <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )}
      {siteConfig.phone}
    </a>
  );
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
