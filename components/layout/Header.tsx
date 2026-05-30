"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { mainNavigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy-900 shadow-lg">
      <Container>
        <div className="flex h-16 md:h-20 items-center justify-between gap-4">
          <Link href="/" className="shrink-0">
            <span className="font-display text-lg md:text-xl font-bold text-white leading-tight">
              Panel Systems
              <span className="block text-xs md:text-sm font-normal text-steel-400">
                Room Dividers
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {mainNavigation.map((item) => (
              <div key={item.label} className="relative group">
                <span className="text-white/90 hover:text-white cursor-default text-sm font-medium py-2">
                  {item.label}
                </span>
                {item.children && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-lg shadow-xl p-4 min-w-[240px] grid gap-1">
                      {item.children.map((child) => (
                        <div key={child.label}>
                          {child.href ? (
                            <Link
                              href={child.href}
                              className="block px-3 py-2 text-sm font-semibold text-navy-900 hover:bg-slate-100 rounded-md"
                            >
                              {child.label}
                            </Link>
                          ) : (
                            <span className="block px-3 py-1 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                              {child.label}
                            </span>
                          )}
                          {child.children?.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href!}
                              className="block px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100 hover:text-navy-900 rounded-md"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <PhoneLink variant="header" />
            <Button href="/get-a-quote/" size="sm">
              Get a Free Quote
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} />}
    </header>
  );
}

function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <div className="lg:hidden bg-navy-800 border-t border-navy-700">
      <Container className="py-4">
        <div className="flex flex-col gap-3 mb-4 pb-4 border-b border-navy-700">
          <PhoneLink variant="header" className="text-white" />
          <Button href="/get-a-quote/" onClick={onClose} className="text-center">
            Get a Free Quote
          </Button>
        </div>
        {mainNavigation.map((item) => (
          <div key={item.label} className="mb-4">
            <p className="text-xs font-semibold text-steel-400 uppercase tracking-wide mb-2">
              {item.label}
            </p>
            {item.children?.map((child) => (
              <div key={child.label} className="mb-2">
                {child.href && (
                  <Link
                    href={child.href}
                    onClick={onClose}
                    className="block py-2 text-white font-medium"
                  >
                    {child.label}
                  </Link>
                )}
                {child.children?.map((sub) => (
                  <Link
                    key={sub.label}
                    href={sub.href!}
                    onClick={onClose}
                    className="block py-1.5 pl-4 text-sm text-white/70 hover:text-white"
                  >
                    {sub.label}
                  </Link>
                ))}
                {!child.href && !child.children && (
                  <span className="block py-2 text-white/70">{child.label}</span>
                )}
                {!child.href && child.children === undefined && child.label && (
                  <Link
                    href={child.href ?? "#"}
                    onClick={onClose}
                    className="block py-2 text-white/70"
                  >
                    {child.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        ))}
        <p className="text-xs text-steel-400 mt-4">{siteConfig.savingsClaim} · Factory Direct</p>
      </Container>
    </div>
  );
}
