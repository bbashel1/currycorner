import type { MenuBadge } from "@/lib/types/menu";

/** Default badges by menu item id (merged with JSON `badges` when present) */
export const MENU_BADGE_DEFAULTS: Record<string, MenuBadge[]> = {
  "chicken-tikka-masala": ["popular"],
  "butter-chicken": ["popular", "chef"],
  "chicken-biryani": ["popular"],
  "chicken-tandoori": ["popular"],
  "butter-chicken-momo": ["chef"],
  "chef-special-biryani": ["chef"],
  "lamb-vindaloo": ["spicy"],
  "chicken-vindaloo": ["spicy"],
  "chicken-chilly-fry": ["spicy"],
  "chicken-65": ["spicy"],
  "garlic-chili-naan": ["spicy"],
};
