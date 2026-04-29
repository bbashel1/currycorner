"use client";

import { usePathname } from "next/navigation";
import { btnCoralSm } from "@/lib/styles";
import { MAPS_LINK, ORDER_ONLINE_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export function MobileConversionBar() {
  const pathname = usePathname();
  const onMenu = pathname === "/menu";

  if (onMenu) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 flex gap-2 border-t border-[var(--cc-border)] bg-[var(--cc-bg)]/94 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-12px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl md:hidden">
        <a
          href={`tel:${PHONE_TEL}`}
          className={`${btnCoralSm} flex flex-1 items-center justify-center gap-2 py-3.5`}
          aria-label={`Call Now ${PHONE_DISPLAY}`}
        >
          <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          Call Now
        </a>
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[var(--cc-border-strong)] bg-[var(--cc-card)] px-4 py-3.5 text-sm font-semibold text-[var(--cc-cream)] shadow-md transition hover:border-[var(--cc-gold)]/40 hover:bg-[var(--cc-bg-elevated)]"
        >
          <svg className="h-5 w-5 shrink-0 text-[var(--cc-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Directions
        </a>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex gap-2 border-t border-[var(--cc-border)] bg-[var(--cc-bg)]/92 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl md:hidden">
      <a
        href={ORDER_ONLINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#f0b85c] to-[var(--cc-gold)] px-4 py-3.5 text-sm font-semibold text-[var(--cc-bg)] shadow-lg transition hover:brightness-105"
      >
        <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Order
      </a>
      <a
        href={`tel:${PHONE_TEL}`}
        className={`${btnCoralSm} flex flex-1 items-center justify-center gap-2 py-3.5`}
        aria-label={`Call ${PHONE_DISPLAY}`}
      >
        <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        Call
      </a>
    </div>
  );
}
