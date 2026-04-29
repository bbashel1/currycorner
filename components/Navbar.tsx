"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { logoAriaLabel, Logo } from "@/components/Logo";
import { btnGoldSm } from "@/lib/styles";
import { ORDER_ONLINE_URL } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[var(--cc-bg)]/88 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center py-0.5 transition-opacity hover:opacity-95"
          aria-label={logoAriaLabel()}
          onClick={() => setOpen(false)}
        >
          <Logo
            width={200}
            height={56}
            priority
            className="h-auto max-h-9 max-w-[min(200px,55vw)] sm:max-h-11 sm:max-w-[min(220px,45vw)]"
          />
        </Link>

        <div className="flex flex-1 items-center justify-end gap-3">
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative inline-block py-1 text-sm font-medium transition-colors ${
                    active
                      ? "text-[var(--cc-cream)] after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-gradient-to-r after:from-[var(--cc-gold)] after:to-[var(--cc-accent)]"
                      : "text-[var(--cc-muted)] hover:text-[var(--cc-cream)]"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <a
              href={ORDER_ONLINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={btnGoldSm}
            >
              Order Online
            </a>
          </nav>

          <a
            href={ORDER_ONLINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnGoldSm} px-3 py-1.5 text-xs md:hidden`}
          >
            Order
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-[var(--cc-border-strong)] bg-[var(--cc-card)]/50 px-3 py-2 text-[var(--cc-cream)] transition hover:border-[var(--cc-gold)]/30 hover:bg-[var(--cc-bg-elevated)] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-[var(--cc-border)] bg-[var(--cc-bg)]/98 px-4 py-5 backdrop-blur-md md:hidden"
        >
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            <a
              href={ORDER_ONLINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnGoldSm} w-full py-3.5 text-center`}
              onClick={() => setOpen(false)}
            >
              Order Online
            </a>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-xl px-3 py-3 text-base font-medium transition ${
                  pathname === l.href
                    ? "bg-[var(--cc-card)] text-[var(--cc-cream)] ring-1 ring-[var(--cc-gold)]/25"
                    : "text-[var(--cc-muted)] hover:bg-[var(--cc-card)]/60 hover:text-[var(--cc-cream)]"
                }`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
