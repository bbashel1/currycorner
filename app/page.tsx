import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { HomeSeoJsonLd } from "@/components/HomeSeoJsonLd";
import { InstagramPreview } from "@/components/InstagramPreview";
import { SectionWrapper } from "@/components/SectionWrapper";
import {
  btnCoral,
  btnGold,
  btnOutline,
  cardSurface,
  cardSurfaceHover,
  eyebrow,
  heroGradient,
} from "@/lib/styles";
import {
  ADDRESS_FULL,
  CURRY_CORNER_PILOT_IMAGE,
  MAPS_EMBED_SRC,
  MAPS_LINK,
  ORDER_ONLINE_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_TAGLINE,
  SITE_LOGO_PATH,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import type { Metadata } from "next";

const homeTitle = `${SITE_NAME} | Indian Restaurant Birmingham AL & Mountain Brook — Biryani & Curry`;

const homeDescription = `${SITE_NAME} is a top-rated Indian and Nepalese restaurant in Mountain Brook, serving Birmingham, AL. Dine in or order takeout: chicken biryani, tikka masala, tandoori, momos, and the best curry near Cahaba Road. Call ${PHONE_DISPLAY} or order online.`;

const homeKeywords = [
  "Indian restaurant Birmingham AL",
  "Indian food Mountain Brook",
  "best curry near me Birmingham",
  "biryani Birmingham AL",
  "Chicken tikka masala Mountain Brook",
  "Nepalese restaurant Alabama",
  "Curry Corner",
  "tandoori restaurant Birmingham",
  "Indian takeout Cahaba Road",
];

export const metadata: Metadata = {
  title: {
    absolute: homeTitle,
  },
  description: homeDescription,
  keywords: homeKeywords,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: homeTitle,
    description: homeDescription,
    images: [{ url: SITE_LOGO_PATH, alt: `${SITE_NAME} — Indian restaurant logo` }],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [SITE_LOGO_PATH],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const featured = [
  {
    title: "Chicken dum biryani",
    blurb: "Aromatic basmati, saffron, and slow-cooked spices in every bite.",
    href: "/menu#dum-biryanis",
    image: "/images/biryani.png",
    imageAlt: "Chicken biryani — Indian restaurant specialty at Curry Corner Birmingham AL",
  },
  {
    title: "Chicken tikka masala",
    blurb: "Charred tandoori chicken in a silky tomato-cream sauce.",
    href: "/menu#chicken-dish",
    image: "/images/chicken_tikka_masala.png",
    imageAlt: "Chicken tikka masala curry at Curry Corner Mountain Brook",
  },
  {
    title: "Tandoori chicken",
    blurb: "Classic clay-oven roast with yogurt, lemon, and warm spices.",
    href: "/menu#tandoori",
    image: "/images/chicken_tandoori.png",
    imageAlt: "Tandoori chicken from the clay oven — Birmingham Indian restaurant",
  },
  {
    title: "Chicken chilly fry momo",
    blurb: "Nepalese style chicken momo fried in sweet and spicy sauce",
    href: "/menu#momo",
    image: "/images/chicken_chilly_fry_momo.png",
    imageAlt: "Chicken chilly fry momo — Nepalese style chicken momo fried in sweet and spicy sauce",
  }
];

export default function HomePage() {
  return (
    <>
      <HomeSeoJsonLd />
      <section
        className="relative overflow-hidden border-b border-[var(--cc-border)]"
        aria-labelledby="hero-heading"
      >
        <div className={heroGradient} aria-hidden />
        <div className="cc-pattern absolute inset-0 opacity-[0.35]" aria-hidden />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-28">
          <div className="flex-1">
            <p className={eyebrow}>Mountain Brook · Birmingham</p>
            <h1
              id="hero-heading"
              className="mt-5 font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--cc-cream)] sm:text-5xl lg:text-6xl"
            >
              {SITE_NAME}
              <span className="mt-2 block text-2xl font-normal text-[var(--cc-muted)] sm:text-3xl lg:text-[1.75rem]">
                Indian restaurant in Birmingham &amp; Mountain Brook
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--cc-muted)] sm:text-xl">
              {SITE_TAGLINE}. Looking for the <strong className="font-semibold text-[var(--cc-cream)]">best curry near you</strong> or <strong className="font-semibold text-[var(--cc-cream)]">biryani in Birmingham</strong>? Visit us on Cahaba Road for lunch, dinner, or <Link href="/menu" className="text-[var(--cc-accent-light)] underline decoration-[var(--cc-gold)]/40 underline-offset-2 hover:decoration-[var(--cc-gold)]">our full menu</Link>.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={ORDER_ONLINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={btnGold}
              >
                Order Online
              </a>
              <a href={`tel:${PHONE_TEL}`} className={btnCoral}>
                Call Now · {PHONE_DISPLAY}
              </a>
              <Link href="/menu" className={btnOutline}>
                View Menu
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md flex-1 lg:max-w-lg">
            <div
              className="absolute -inset-px rounded-[1.25rem] bg-gradient-to-br from-[var(--cc-gold)]/35 via-[var(--cc-accent)]/10 to-transparent opacity-80 blur-[2px]"
              aria-hidden
            />
            <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${cardSurface}`}>
              <Image
                src={CURRY_CORNER_PILOT_IMAGE}
                alt={`${SITE_NAME} — Indian and Nepalese dining in Mountain Brook, ${ADDRESS_FULL}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper
        title="Featured dishes"
        subtitle="Start with crowd favorites — from the tandoor, the curry pot, and the biryani handi."
        className={sectionAltClass}
      >
        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((d, i) => (
            <FadeIn key={d.title} delayMs={i * 80}>
              <Link
                href={d.href}
                className={`group flex flex-col overflow-hidden ${cardSurface} ${cardSurfaceHover}`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={d.image}
                    alt={d.imageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--cc-bg)]/80 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                </div>
                <div className="flex flex-1 flex-col p-6 pt-5">
                  <h3 className="font-heading text-xl font-semibold text-[var(--cc-cream)]">
                    {d.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--cc-muted)]">
                    {d.blurb}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--cc-gold)]">
                    View on menu
                    <span aria-hidden className="transition group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="about"
        title="Our story"
        subtitle="Curry Corner brings together Indian and Nepalese recipes — bold spices, slow cooking, and hospitality that feels like home."
      >
        <FadeIn>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-5 text-base leading-relaxed text-[var(--cc-muted)] sm:text-[1.05rem]">
              <p>
                We opened in Mountain Brook to share the food we grew up with: charcoal-kissed
                tandoori, fragrant biryanis, and curries built from scratch every day.
              </p>
              <p>
                Whether you are stopping in for lunch, planning dinner with family, or grabbing
                takeout on the way home, we aim to be your go-to <strong className="font-semibold text-[var(--cc-cream)]">Indian restaurant in Birmingham</strong> — the <strong className="font-semibold text-[var(--cc-cream)]">best curry near you</strong> when the craving hits.
              </p>
            </div>
            <div className="relative">
              <div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[var(--cc-gold)]/20 to-[var(--cc-accent)]/15 opacity-70 blur-[1px]"
                aria-hidden
              />
              <div className={`relative aspect-video overflow-hidden rounded-2xl ${cardSurface}`}>
                <Image
                  src="/images/pakora.png"
                  alt="Indian appetizers and starters at Curry Corner Mountain Brook"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </SectionWrapper>

      <SectionWrapper
        title="Visit us"
        subtitle="Find us in Mountain Brook Village on Cahaba Road — parking nearby."
        className={sectionAltClass}
      >
        <FadeIn>
          <div className={`overflow-hidden rounded-2xl ${cardSurface} shadow-[var(--cc-shadow-card)]`}>
            <iframe
              title={`Map of ${SITE_NAME} Indian restaurant — ${ADDRESS_FULL}`}
              src={MAPS_EMBED_SRC}
              className="aspect-[16/10] min-h-[280px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-5 text-center text-sm text-[var(--cc-muted)]">
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--cc-accent-light)] underline decoration-[var(--cc-gold)]/40 underline-offset-4 transition hover:text-[var(--cc-cream)] hover:decoration-[var(--cc-gold)]"
            >
              Open directions in Google Maps — {ADDRESS_FULL}
            </a>
          </p>
        </FadeIn>
      </SectionWrapper>

      <SectionWrapper title="Order or visit">
        <FadeIn>
          <div className={`relative overflow-hidden ${cardSurface} px-6 py-14 text-center sm:px-12`}>
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(232,165,75,0.12),transparent_55%)]"
              aria-hidden
            />
            <div className="relative">
              <h3 className="font-heading text-2xl font-semibold text-[var(--cc-cream)] sm:text-3xl">
                Ready to eat?
              </h3>
              <p className="mx-auto mt-4 max-w-lg text-[var(--cc-muted)]">
                Call ahead for pickup, or join us for dine-in. We are proud to serve biryani
                lovers and curry fans across Birmingham and Mountain Brook.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
                <a
                  href={ORDER_ONLINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnGold}
                >
                  Order Online
                </a>
                <a href={`tel:${PHONE_TEL}`} className={btnCoral}>
                  Call {PHONE_DISPLAY}
                </a>
                <Link href="/contact" className={btnOutline}>
                  Hours &amp; location
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </SectionWrapper>

      <SectionWrapper
        className="border-t border-[var(--cc-border)] bg-[var(--cc-bg-elevated)]/80 pb-28 md:pb-20"
        innerClassName="max-w-5xl"
      >
        <FadeIn>
          <InstagramPreview />
        </FadeIn>
      </SectionWrapper>
    </>
  );
}

const sectionAltClass =
  "relative border-y border-[var(--cc-border)] bg-[var(--cc-bg-elevated)]/90 backdrop-blur-[2px]";
