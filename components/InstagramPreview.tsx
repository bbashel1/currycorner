import Image from "next/image";
import { cardSurface, cardSurfaceHover } from "@/lib/styles";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site";

const tiles = [
  { src: "/images/placeholders/biryani.svg", label: "Biryani" },
  { src: "/images/placeholders/tikka-masala.svg", label: "Curry" },
  { src: "/images/placeholders/tandoori.svg", label: "Tandoori" },
  { src: "/images/pakora.png", label: "Starters" },
];

export function InstagramPreview() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr,auto] lg:items-center lg:gap-14">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cc-gold)]">
          @{INSTAGRAM_HANDLE}
        </p>
        <h3 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-[var(--cc-cream)] sm:text-3xl">
          Follow us on Instagram
        </h3>
        <p className="mt-4 max-w-xl text-[var(--cc-muted)] sm:text-[1.05rem]">
          See daily specials, behind-the-scenes from the kitchen, and what our guests are
          enjoying in Mountain Brook.
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-[var(--cc-border-strong)] bg-[var(--cc-card)]/90 px-6 py-3.5 text-sm font-semibold text-[var(--cc-cream)] shadow-[var(--cc-shadow-card)] ring-1 ring-white/5 transition hover:border-[var(--cc-gold)]/35 hover:bg-[var(--cc-bg-elevated)]"
        >
          <svg className="h-5 w-5 text-[var(--cc-gold)]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          @{INSTAGRAM_HANDLE}
        </a>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:max-w-md lg:max-w-[22rem]">
        {tiles.map((t) => (
          <div
            key={t.label}
            className={`relative aspect-square overflow-hidden rounded-2xl ${cardSurface} ${cardSurfaceHover}`}
          >
            <Image
              src={t.src}
              alt=""
              fill
              className="object-cover transition duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 50vw, 200px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
