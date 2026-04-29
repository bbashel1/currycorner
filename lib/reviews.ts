import topReviews from "@/data/google-reviews-top.json";

export type Review = {
  rating: number;
  author: string;
  date: string;
  text: string;
};

export const fallbackTopReviews = topReviews as Review[];

const MAX_TEXT_LENGTH = 340;

export function truncateReviewText(text: string): string {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= MAX_TEXT_LENGTH) return cleaned;
  return `${cleaned.slice(0, MAX_TEXT_LENGTH).trimEnd()}...`;
}
