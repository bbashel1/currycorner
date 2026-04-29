import menuData from "@/data/menu.json";
import { FEATURED_MENU_IDS } from "@/lib/menu-featured";
import { MENU_BADGE_DEFAULTS } from "@/lib/menu-badges";
import { resolveMenuImageUrl } from "@/lib/menu-images";
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

/**
 * Prefer `item.image` from menu.json when set; otherwise use curated Unsplash fallbacks.
 * Supports: `https://...`, `/path/in/public`, or `folder/file.jpg` (resolved under `public/`).
 */
function resolveImageUrl(item: MenuItem, categoryId: string): string {
  const raw = item.image?.trim();
  if (!raw) return resolveMenuImageUrl(item.id, categoryId);

  if (raw.startsWith("https://") || raw.startsWith("http://")) return raw;
  if (raw.startsWith("/")) return raw;

  return `/${raw.replace(/^\/+/, "")}`;
}

export function enrichItem(item: MenuItem, categoryId: string): EnrichedMenuItem {
  return {
    ...item,
    imageUrl: resolveImageUrl(item, categoryId),
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
      enrichedById.set(item.id, enrichItem(item, cat.id));
    }
  }

  const categories: EnrichedMenuCategory[] = data.categories.map((cat) => ({
    ...cat,
    items: cat.items
      .filter((item) => !featuredSet.has(item.id))
      .map((item) => enrichItem(item, cat.id)),
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
