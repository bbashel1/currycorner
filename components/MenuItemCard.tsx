import Image from "next/image";
import type { EnrichedMenuItem } from "@/lib/types/menu";

const BADGE_LABEL: Record<string, string> = {
  popular: "Most Popular",
  spicy: "Spicy",
  chef: "Chef's Special",
};

const BADGE_STYLE: Record<string, string> = {
  popular:
    "border-amber-400/35 bg-amber-500/15 text-amber-100",
  spicy: "border-red-400/35 bg-red-500/15 text-red-100",
  chef: "border-[var(--cc-gold)]/40 bg-[var(--cc-gold)]/10 text-[var(--cc-cream)]",
};

type MenuItemCardProps = {
  item: EnrichedMenuItem;
  variant?: "default" | "featured";
};

export function MenuItemCard({ item, variant = "default" }: MenuItemCardProps) {
  const isFeatured = variant === "featured";
  const desc = item.description.trim();
  const showDesc = desc.length > 0;

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-xl border border-[var(--cc-border)] bg-[var(--cc-card)] shadow-[var(--cc-shadow-card)] ring-1 ring-white/[0.04] transition duration-300 hover:z-10 hover:scale-[1.02] hover:border-[var(--cc-accent)]/50 hover:shadow-xl hover:shadow-black/40 hover:ring-[var(--cc-gold)]/20 ${
        isFeatured ? "min-h-[280px] sm:min-h-[300px]" : ""
      }`}
    >
      <div
        className={`relative w-full shrink-0 overflow-hidden bg-[var(--cc-bg)] ${
          isFeatured ? "h-40 sm:h-44" : "h-28 sm:h-32"
        }`}
      >
        <Image
          src={item.imageUrl}
          alt=""
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes={isFeatured ? "(max-width: 768px) 100vw, 25vw" : "(max-width: 768px) 100vw, 33vw"}
          unoptimized={item.imageUrl.endsWith(".svg")}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--cc-card)]/90 via-transparent to-transparent opacity-60" />
      </div>

      <div className={`flex min-h-0 flex-1 flex-col ${isFeatured ? "p-4 sm:p-5" : "p-3 sm:p-4"}`}>
        <div className="flex items-start justify-between gap-2 border-b border-white/[0.06] pb-2.5">
          <h3
            className={`min-w-0 flex-1 font-heading font-semibold leading-snug text-[var(--cc-cream)] ${
              isFeatured ? "text-lg sm:text-xl" : "text-base sm:text-[1.05rem]"
            }`}
          >
            {item.name}
          </h3>
          <span
            className={`shrink-0 rounded-lg border border-[var(--cc-gold)]/35 bg-[var(--cc-bg)]/90 px-2.5 py-1 font-bold tabular-nums text-[var(--cc-gold)] shadow-inner ${
              isFeatured ? "text-base" : "text-sm"
            }`}
          >
            {item.price}
          </span>
        </div>

        {showDesc && (
          <p
            className="mt-2 line-clamp-1 text-sm leading-snug text-[var(--cc-muted)]"
            title={desc}
          >
            {desc}
          </p>
        )}

        {!showDesc && isFeatured && (
          <p className="mt-2 text-xs italic text-[var(--cc-muted)]/80">Guest favorite · see Toast for details</p>
        )}

        {item.badges.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {item.badges.map((b) => (
              <span
                key={b}
                className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${BADGE_STYLE[b] ?? BADGE_STYLE.popular}`}
              >
                {BADGE_LABEL[b] ?? b}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
