import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { MenuItemCard } from "@/components/MenuItemCard";
import { btnGoldSm } from "@/lib/styles";
import type { EnrichedMenuItem } from "@/lib/types/menu";
import { ORDER_ONLINE_URL } from "@/lib/site";

type MenuFeaturedSectionProps = {
  items: EnrichedMenuItem[];
  /** First category anchor for “browse below” link */
  firstCategoryId?: string;
};

export function MenuFeaturedSection({ items, firstCategoryId }: MenuFeaturedSectionProps) {
  if (items.length === 0) return null;

  return (
    <section className="relative border-b border-[var(--cc-border)] bg-gradient-to-b from-[var(--cc-accent)]/10 via-[var(--cc-bg)] to-[var(--cc-bg)]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(232,165,75,0.12),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-2xl font-semibold tracking-tight text-[var(--cc-cream)] sm:text-3xl">
              <span aria-hidden className="mr-1.5">
                🔥
              </span>
              Most Popular
            </p>
            <p className="mt-2 max-w-xl text-sm text-[var(--cc-muted)] sm:text-base">
              Top picks from our kitchen — order online for pickup or delivery.
            </p>
          </div>
          <a
            href={ORDER_ONLINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnGoldSm} w-full shrink-0 sm:w-auto`}
          >
            Order these favorites
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {items.map((item, i) => (
            <FadeIn key={item.id} delayMs={i * 80}>
              <MenuItemCard item={item} variant="featured" />
            </FadeIn>
          ))}
        </div>

        {firstCategoryId && (
          <p className="mt-8 text-center text-xs text-[var(--cc-muted)]">
            <Link
              href={`#${firstCategoryId}`}
              className="font-medium text-[var(--cc-accent-light)] hover:underline"
            >
              Browse full menu below
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
