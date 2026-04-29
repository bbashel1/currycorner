import { CURRY_CORNER_PILOT_IMAGE } from "@/lib/site";

/**
 * Curated Unsplash food photography (rectangular, warm tones).
 * Fallbacks by category + keyword for consistent, appetizing imagery without 800 manual URLs.
 */
const Q = "auto=format&fit=crop&w=800&q=82";

const IMG = {
  biryani: `https://images.unsplash.com/photo-1589302168068-964664d93dc0?${Q}`,
  curry: `https://images.unsplash.com/photo-1565557623262-b51c2513a641?${Q}`,
  curryRich: `https://images.unsplash.com/photo-1585937421612-70a008356fbe?${Q}`,
  tandoori: `https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?${Q}`,
  naan: `https://images.unsplash.com/photo-1601050690597-df0568f70950?${Q}`,
  appetizer: "/images/pakora.png",
  momo: `https://images.unsplash.com/photo-1496116218417-1a781b1c416c?${Q}`,
  seafood: `https://images.unsplash.com/photo-1559339352-11d035aa1d3a?${Q}`,
  lamb: `https://images.unsplash.com/photo-1544025162-d76694265947?${Q}`,
  dessert: "/images/curry_corner_pilot.jpg",
  drinks: `https://images.unsplash.com/photo-1544145945-f90425340c7e?${Q}`,
  noodles: `https://images.unsplash.com/photo-1585032226651-759b368d8076?${Q}`,
  rice: `https://images.unsplash.com/photo-1596797038530-2c107229654b?${Q}`,
  vegetarian: `https://images.unsplash.com/photo-1512621776951-a57141f2eefd?${Q}`,
  generic: CURRY_CORNER_PILOT_IMAGE,
} as const;

const CATEGORY_DEFAULT: Record<string, keyof typeof IMG> = {
  "non-veg-appetizers": "appetizer",
  appetizers: "appetizer",
  "dum-biryanis": "biryani",
  "chicken-dish": "curry",
  dessert: "dessert",
  drinks: "drinks",
  "lamb-and-goat-dish": "lamb",
  momo: "momo",
  naan: "naan",
  "seafood-dish": "seafood",
  sides: "vegetarian",
  tandoori: "tandoori",
  vegetarian: "vegetarian",
  noodles: "noodles",
  rice: "rice",
  "game-night-combo": "curry",
};

function keywordPick(id: string): keyof typeof IMG | null {
  const s = id.toLowerCase();
  if (s.includes("tikka-masala")) return "curry";
  if (s.includes("biryani")) return "biryani";
  if (s.includes("momo")) return "momo";
  if (s.includes("naan") || s.includes("roti")) return "naan";
  if (
    s.includes("lassi") ||
    s.includes("chai") ||
    s.includes("coke") ||
    s.includes("drink") ||
    s.includes("tea") ||
    s.includes("water") ||
    s.includes("sprite") ||
    s.includes("pepper") ||
    s.includes("pibb")
  )
    return "drinks";
  if (s.includes("kheer") || s.includes("jamun") || s.includes("pudding")) return "dessert";
  if (s.includes("fish") || (s.includes("shrimp") && !s.includes("biryani"))) return "seafood";
  if (s.includes("noodle") || s.includes("chow") || s.includes("hakka")) return "noodles";
  if (s.includes("fried-rice") || (s.includes("rice") && !s.includes("biryani") && !s.includes("kheer")))
    return "rice";
  if (s.includes("tandoori") || s.includes("kabab") || s.includes("kebab")) return "tandoori";
  if (s.includes("tikka") && !s.includes("masala")) return "tandoori";
  if (s.includes("vindaloo") || s.includes("chilly") || s.includes("-65") || s.endsWith("65"))
    return "curryRich";
  if (s.includes("lamb") || s.includes("goat") || s.includes("nihari")) return "lamb";
  if (s.includes("paneer") || s.includes("saag") || s.includes("dal") || s.includes("vegetable"))
    return "vegetarian";
  if (
    s.includes("samosa") ||
    s.includes("pakora") ||
    s.includes("chaat") ||
    s.includes("roll") ||
    s.includes("soup")
  )
    return "appetizer";
  if (s.includes("chicken") || s.includes("butter") || s.includes("korma") || s.includes("curry"))
    return "curry";
  if (s.includes("masala") && !s.includes("tikka-masala")) return "curry";
  return null;
}

export function resolveMenuImageUrl(itemId: string, categoryId: string): string {
  const key = keywordPick(itemId);
  if (key) return IMG[key];

  const catKey = CATEGORY_DEFAULT[categoryId];
  if (catKey) return IMG[catKey];

  return IMG.generic;
}
