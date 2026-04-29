import { NextResponse } from "next/server";
import { GOOGLE_PLACE_ID } from "@/lib/site";
import { fallbackTopReviews, truncateReviewText, type Review } from "@/lib/reviews";

type GooglePlacesReview = {
  rating?: number;
  text?: { text?: string };
  publishTime?: string;
  relativePublishTimeDescription?: string;
  authorAttribution?: { displayName?: string };
};

type GooglePlacesResponse = {
  reviews?: GooglePlacesReview[];
};

const DEFAULT_REVIEW_LIMIT = 6;

export const revalidate = 1800; // 30 minutes

function deriveDateLabel(review: GooglePlacesReview): string {
  if (review.relativePublishTimeDescription) {
    return review.relativePublishTimeDescription;
  }
  if (!review.publishTime) return "recent";
  const parsed = new Date(review.publishTime);
  if (Number.isNaN(parsed.getTime())) return "recent";
  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function mapGoogleReview(review: GooglePlacesReview): Review | null {
  const rating = review.rating ?? 0;
  const author = review.authorAttribution?.displayName?.trim() ?? "";
  const text = review.text?.text?.trim() ?? "";
  if (rating < 5 || !author || !text) return null;

  return {
    rating: 5,
    author,
    date: deriveDateLabel(review),
    text: truncateReviewText(text),
  };
}

function buildFallbackResponse() {
  return NextResponse.json(
    { reviews: fallbackTopReviews, source: "fallback" as const },
    {
      headers: {
        "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=86400",
      },
    },
  );
}

export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) return buildFallbackResponse();

  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${GOOGLE_PLACE_ID}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "reviews",
      },
      next: { revalidate },
    });

    if (!response.ok) return buildFallbackResponse();

    const payload = (await response.json()) as GooglePlacesResponse;
    const liveFiveStarReviews = (payload.reviews ?? [])
      .map(mapGoogleReview)
      .filter((review): review is Review => review !== null)
      .slice(0, DEFAULT_REVIEW_LIMIT);

    if (liveFiveStarReviews.length === 0) return buildFallbackResponse();

    return NextResponse.json(
      { reviews: liveFiveStarReviews, source: "google_places" as const },
      {
        headers: {
          "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=86400",
        },
      },
    );
  } catch {
    return buildFallbackResponse();
  }
}
