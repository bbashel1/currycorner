"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { SectionWrapper } from "@/components/SectionWrapper";
import { cardSurface } from "@/lib/styles";
import { GOOGLE_REVIEWS_URL, SITE_NAME } from "@/lib/site";
import { fallbackTopReviews, type Review } from "@/lib/reviews";

const ROTATE_INTERVAL_MS = 8000;
const REFRESH_INTERVAL_MS = 1000 * 60 * 30; // 30 minutes
const VISIBLE_REVIEWS = 2;

type ReviewsPayload = {
  reviews?: Review[];
};

export function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>(fallbackTopReviews);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/google-reviews", { cache: "no-store" });
        if (!response.ok) return;
        const payload = (await response.json()) as ReviewsPayload;
        if (!isMounted || !payload.reviews || payload.reviews.length === 0) return;
        setReviews(payload.reviews);
      } catch {
        // Keep fallback reviews if fetch fails.
      }
    };

    void fetchReviews();
    const refreshTimer = window.setInterval(() => {
      void fetchReviews();
    }, REFRESH_INTERVAL_MS);

    return () => {
      isMounted = false;
      window.clearInterval(refreshTimer);
    };
  }, []);

  useEffect(() => {
    if (reviews.length <= VISIBLE_REVIEWS) return;
    const rotateTimer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, ROTATE_INTERVAL_MS);

    return () => {
      window.clearInterval(rotateTimer);
    };
  }, [reviews.length]);

  const visibleReviews = useMemo(() => {
    if (reviews.length <= VISIBLE_REVIEWS) return reviews;
    return Array.from({ length: VISIBLE_REVIEWS }, (_, offset) => {
      const idx = (activeIndex + offset) % reviews.length;
      return reviews[idx];
    });
  }, [activeIndex, reviews]);

  return (
    <SectionWrapper
      title="What guests say"
      subtitle={`Recent 5-star Google reviews for ${SITE_NAME} in Mountain Brook. Read more on Google Maps.`}
      className="border-b border-[var(--cc-border)] bg-[var(--cc-bg-elevated)]/90"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {visibleReviews.map((r, i) => (
          <FadeIn key={`${r.author}-${r.date}`} delayMs={i * 60}>
            <blockquote
              className={`flex h-full flex-col ${cardSurface} p-5 sm:p-6`}
              cite={GOOGLE_REVIEWS_URL}
            >
              <p className="text-sm text-amber-300/95" aria-hidden>
                {"★".repeat(r.rating)}
                <span className="sr-only">{r.rating} out of 5 stars</span>
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--cc-muted)]">
                “{r.text}”
              </p>
              <footer className="mt-4 text-xs text-[var(--cc-cream)]/80">
                — {r.author}, Google · {r.date}
              </footer>
            </blockquote>
          </FadeIn>
        ))}
      </div>
      {reviews.length > VISIBLE_REVIEWS && (
        <div className="mt-4 flex items-center justify-center gap-2" aria-hidden>
          {reviews.map((_, idx) => {
            const inWindow =
              idx === activeIndex || idx === (activeIndex + 1) % reviews.length;
            return (
              <span
                key={`review-dot-${idx}`}
                className={`h-1.5 rounded-full transition-all ${
                  inWindow ? "w-5 bg-[var(--cc-gold)]" : "w-1.5 bg-[var(--cc-border)]"
                }`}
              />
            );
          })}
        </div>
      )}
      <p className="mt-8 text-center">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-[var(--cc-accent-light)] underline decoration-[var(--cc-gold)]/40 underline-offset-4 transition hover:text-[var(--cc-cream)]"
        >
          See all Google reviews
        </a>
        {" · "}
        <Link
          href="/menu"
          className="text-sm font-medium text-[var(--cc-gold)] underline decoration-[var(--cc-gold)]/30 underline-offset-4 hover:decoration-[var(--cc-gold)]"
        >
          View menu
        </Link>
      </p>
    </SectionWrapper>
  );
}
