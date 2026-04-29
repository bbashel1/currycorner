import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { SectionWrapper } from "@/components/SectionWrapper";
import { btnCoral, btnGold, cardSurface, eyebrow } from "@/lib/styles";
import {
  ADDRESS_CITY,
  ADDRESS_FULL,
  ADDRESS_LINE,
  HOURS_LINES,
  MAPS_EMBED_SRC,
  MAPS_LINK,
  ORDER_ONLINE_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_NAME,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Hours",
  description: `Visit ${SITE_NAME} at ${ADDRESS_FULL}. Indian restaurant in Mountain Brook — call ${PHONE_DISPLAY} for reservations and takeout.`,
};

export default function ContactPage() {
  return (
    <div className="bg-[var(--cc-bg)] pb-28 pt-12 sm:pt-16 md:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-2xl">
          <p className={eyebrow}>Get in touch</p>
          <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[var(--cc-gold)] via-[var(--cc-accent-light)] to-[var(--cc-accent)]/80" />
          <h1 className="mt-5 font-heading text-4xl font-semibold tracking-tight text-[var(--cc-cream)] sm:text-5xl">
            Contact
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--cc-muted)] sm:text-xl">
            We would love to host you for lunch or dinner — or pack your favorites to go.
          </p>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <div className={`${cardSurface} p-8 sm:p-10`}>
              <h2 className="font-heading text-xl font-semibold text-[var(--cc-cream)]">
                Address
              </h2>
              <p className="mt-3 text-[var(--cc-muted)]">
                {ADDRESS_LINE}
                <br />
                {ADDRESS_CITY}
              </p>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-[var(--cc-accent-light)] underline decoration-[var(--cc-gold)]/35 underline-offset-4 transition hover:text-[var(--cc-cream)]"
              >
                Directions in Google Maps
              </a>

              <h2 className="mt-10 font-heading text-xl font-semibold text-[var(--cc-cream)]">
                Phone
              </h2>
              <a href={`tel:${PHONE_TEL}`} className={`${btnCoral} mt-4`}>
                Call {PHONE_DISPLAY}
              </a>

              <h2 className="mt-10 font-heading text-xl font-semibold text-[var(--cc-cream)]">
                Order online
              </h2>
              <a
                href={ORDER_ONLINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnGold} mt-4`}
              >
                Order Online
              </a>

              <h2 className="mt-10 font-heading text-xl font-semibold text-[var(--cc-cream)]">
                Hours
              </h2>
              <ul className="mt-4 space-y-2 text-[var(--cc-muted)]">
                {HOURS_LINES.map((line) => (
                  <li key={line} className="flex items-center gap-2">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-[var(--cc-gold)]/60" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delayMs={80}>
            <div className={`overflow-hidden rounded-2xl ${cardSurface} shadow-[var(--cc-shadow-card)]`}>
              <iframe
                title={`Map of ${SITE_NAME}`}
                src={MAPS_EMBED_SRC}
                className="aspect-[4/3] min-h-[320px] w-full sm:aspect-auto sm:min-h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </FadeIn>
        </div>
      </div>

      <SectionWrapper title="Catering & events" className="mt-8 border-t border-[var(--cc-border)] bg-[var(--cc-bg-elevated)]/90">
        <p className="max-w-2xl text-[var(--cc-muted)] sm:text-[1.05rem]">
          Planning a gathering? Ask us about catering trays and party portions — perfect for
          offices, birthdays, and celebrations around Birmingham.
        </p>
      </SectionWrapper>
    </div>
  );
}
