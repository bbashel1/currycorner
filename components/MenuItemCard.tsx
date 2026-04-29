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
  const hasImage = Boolean(item.imageUrl);

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--cc-border)] bg-[var(--cc-card)] shadow-[var(--cc-shadow-card)] ring-1 ring-white/[0.04] transition duration-300 hover:border-[var(--cc-border-hover)] hover:shadow-black/40 hover:ring-[var(--cc-gold)]/20 ${
        isFeatured ? "min-h-[200px] border-[var(--cc-gold)]/20" : ""
      }`}
    >
      <div className={`flex min-h-0 flex-1 flex-col ${isFeatured ? "p-5 sm:p-6" : "p-4 sm:p-5"}`}>
        <div className="flex items-start justify-between gap-2 border-b border-white/[0.06] pb-3">
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

        {hasImage && (
          <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-[var(--cc-gold)]/75">
            Real menu photo available
          </p>
        )}

        {showDesc && (
          <p
            className={`mt-2 text-sm leading-snug text-[var(--cc-muted)] ${
              isFeatured ? "line-clamp-3" : "line-clamp-2"
            }`}
            title={desc}
          >
            {desc}
          </p>
        )}

        {!showDesc && isFeatured && (
          <p className="mt-2 text-xs italic text-[var(--cc-muted)]/80">
            Guest favorite from our kitchen.
          </p>
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
