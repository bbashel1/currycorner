import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { MenuFeaturedSection } from "@/components/MenuFeaturedSection";
import { MenuItemCard } from "@/components/MenuItemCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { getEnrichedMenu, getFeaturedItems } from "@/lib/menu";
import { btnGold, eyebrow, heroGradient } from "@/lib/styles";
import { ORDER_ONLINE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse appetizers, curries, tandoori, biryani, and noodles at Curry Corner — Indian restaurant in Mountain Brook / Birmingham, AL.",
};

export default function MenuPage() {
  const { categories, enrichedById } = getEnrichedMenu();
  const featured = getFeaturedItems(enrichedById);
  const firstSectionId = categories[0]?.id;

  return (
    <div className="border-b border-[var(--cc-border)] bg-[var(--cc-bg)] pb-28 pt-0 md:pb-16">
      <div className="relative overflow-hidden border-b border-[var(--cc-border)]">
        <div className={heroGradient} aria-hidden />
        <div className="cc-pattern absolute inset-0 opacity-[0.25]" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className={eyebrow}>Curry Corner</p>
              <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[var(--cc-gold)] via-[var(--cc-accent-light)] to-[var(--cc-accent)]/80" />
              <h1 className="mt-5 font-heading text-4xl font-semibold tracking-tight text-[var(--cc-cream)] sm:text-5xl">
                Menu
              </h1>
              <p className="mt-3 text-lg leading-relaxed text-[var(--cc-muted)] sm:text-xl">
                Prices and availability may vary. Ask your server about spice level and dietary
                preferences.
              </p>
            </div>
            <a
              href={ORDER_ONLINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnGold} w-full shrink-0 sm:w-auto`}
            >
              Order Online
            </a>
          </header>
        </div>
      </div>

      <MenuFeaturedSection items={featured} firstCategoryId={firstSectionId} />

      <div id="menu-categories">
        {categories.map((cat, ci) => (
          <SectionWrapper
            key={cat.id}
            id={cat.id}
            title={cat.name}
            dense
            className={
              ci % 2 === 0
                ? ""
                : "relative border-y border-[var(--cc-border)] bg-[var(--cc-bg-elevated)]/90 backdrop-blur-[2px]"
            }
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {cat.items.map((item, ii) => (
                <FadeIn key={item.id} delayMs={Math.min(ii * 25, 200)}>
                  <MenuItemCard item={item} variant="default" />
                </FadeIn>
              ))}
            </div>
          </SectionWrapper>
        ))}
      </div>
    </div>
  );
}
