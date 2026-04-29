export type MenuBadge = "popular" | "spicy" | "chef";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  /**
   * Optional image (takes priority over auto-picked photos).
   * Use a full URL, `/images/photo.jpg` (under `public/`), or `images/photo.jpg`.
   */
  image?: string;
  /** Optional badges from JSON (merged with defaults in code) */
  badges?: MenuBadge[];
};

export type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

export type MenuData = {
  categories: MenuCategory[];
};

/** Runtime-enriched item for UI */
export type EnrichedMenuItem = MenuItem & {
  imageUrl: string;
  badges: MenuBadge[];
};

export type EnrichedMenuCategory = Omit<MenuCategory, "items"> & {
  items: EnrichedMenuItem[];
};
