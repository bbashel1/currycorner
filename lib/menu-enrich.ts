import menuData from "@/data/menu.json";
import { FEATURED_MENU_IDS } from "@/lib/menu-featured";
import { MENU_BADGE_DEFAULTS } from "@/lib/menu-badges";
import type {
  EnrichedMenuCategory,
  EnrichedMenuItem,
  MenuData,
  MenuItem,
} from "@/lib/types/menu";

const featuredSet = new Set<string>(FEATURED_MENU_IDS);

function mergeBadges(item: MenuItem): EnrichedMenuItem["badges"] {
  const fromJson = item.badges ?? [];
  const defaults = MENU_BADGE_DEFAULTS[item.id] ?? [];
  return [...new Set([...defaults, ...fromJson])];
}

/** Only use explicit image values from menu data. No placeholders/fallbacks. */
function resolveImageUrl(item: MenuItem): string | undefined {
  const raw = item.image?.trim();
  if (!raw) return undefined;

  if (raw.startsWith("https://") || raw.startsWith("http://")) return raw;
  if (raw.startsWith("/")) return raw;

  return `/${raw.replace(/^\/+/, "")}`;
}

export function enrichItem(item: MenuItem): EnrichedMenuItem {
  return {
    ...item,
    imageUrl: resolveImageUrl(item),
    badges: mergeBadges(item),
  };
}

export function getEnrichedMenu(): {
  categories: EnrichedMenuCategory[];
  enrichedById: Map<string, EnrichedMenuItem>;
} {
  const data = menuData as MenuData;
  const enrichedById = new Map<string, EnrichedMenuItem>();

  for (const cat of data.categories) {
    for (const item of cat.items) {
      enrichedById.set(item.id, enrichItem(item));
    }
  }

  const categories: EnrichedMenuCategory[] = data.categories.map((cat) => ({
    ...cat,
    items: cat.items
      .filter((item) => !featuredSet.has(item.id))
      .map((item) => enrichItem(item)),
  }));

  return { categories, enrichedById };
}

export function getFeaturedItems(
  enrichedById: Map<string, EnrichedMenuItem>,
): EnrichedMenuItem[] {
  return FEATURED_MENU_IDS.map((id) => enrichedById.get(id)).filter(
    (x): x is EnrichedMenuItem => x != null,
  );
}
