import Link from "next/link";
import { Logo } from "@/components/Logo";
import { btnGoldSm } from "@/lib/styles";
import {
  ADDRESS_CITY,
  ADDRESS_LINE,
  FACEBOOK_URL,
  GOOGLE_REVIEWS_URL,
  HOURS_LINES,
  INSTAGRAM_URL,
  MAPS_LINK,
  ORDER_ONLINE_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_NAME,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-[var(--cc-border)] bg-gradient-to-b from-[var(--cc-bg-elevated)] to-[var(--cc-bg)]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--cc-gold)]/35 to-transparent"
        aria-hidden
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <Link href="/" className="inline-flex max-w-[200px]" aria-label={`${SITE_NAME} home`}>
            <Logo width={200} height={56} className="opacity-95" />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-[var(--cc-muted)]">
            {ADDRESS_LINE}
            <br />
            {ADDRESS_CITY}
          </p>
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-medium text-[var(--cc-accent-light)] underline decoration-[var(--cc-gold)]/35 underline-offset-4 transition hover:text-[var(--cc-cream)]"
          >
            Open in Google Maps
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cc-gold)]">
            Hours
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--cc-muted)]">
            {HOURS_LINES.map((line) => (
              <li key={line} className="flex items-center gap-2">
                <span className="h-1 w-1 shrink-0 rounded-full bg-[var(--cc-gold)]/60" aria-hidden />
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cc-gold)]">
            Connect
          </p>
          <p className="mt-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="text-sm font-medium text-[var(--cc-cream)] transition hover:text-[var(--cc-accent-light)]"
            >
              {PHONE_DISPLAY}
            </a>
          </p>
          <ul className="mt-2 space-y-2">
            <li>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--cc-muted)] transition hover:text-[var(--cc-cream)]"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--cc-muted)] transition hover:text-[var(--cc-cream)]"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--cc-muted)] transition hover:text-[var(--cc-cream)]"
              >
                Google reviews
              </a>
            </li>
          </ul>
          <p className="mt-5">
            <a
              href={ORDER_ONLINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={btnGoldSm}
            >
              Order online
            </a>
          </p>
          <p className="mt-4">
            <Link
              href="/menu"
              className="text-sm font-medium text-[var(--cc-gold)] underline decoration-[var(--cc-gold)]/30 underline-offset-4 transition hover:decoration-[var(--cc-gold)]"
            >
              View full menu →
            </Link>
          </p>
        </div>
      </div>
      <div className="border-t border-[var(--cc-border)] py-8 text-center text-xs text-[var(--cc-muted)]">
        © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
