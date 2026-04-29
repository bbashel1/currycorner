/** Shared Tailwind class strings for consistent UI */

export const cardSurface =
  "rounded-2xl border border-[var(--cc-border)] bg-[var(--cc-card)] shadow-[var(--cc-shadow-card)] ring-1 ring-white/5";

export const cardSurfaceHover =
  "transition-all duration-300 hover:border-[var(--cc-border-hover)] hover:shadow-[var(--cc-shadow-card-hover)] hover:ring-[var(--cc-gold)]/15";

export const btnGold =
  "inline-flex items-center justify-center rounded-full bg-gradient-to-b from-[#f0b85c] to-[var(--cc-gold)] px-8 py-3.5 text-sm font-semibold text-[var(--cc-bg)] shadow-[0_4px_20px_-4px_rgba(232,165,75,0.45)] transition hover:brightness-105 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cc-gold)]";

export const btnCoral =
  "inline-flex items-center justify-center rounded-full bg-gradient-to-b from-[#d94a28] to-[var(--cc-accent)] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_-4px_rgba(199,61,31,0.5)] transition hover:brightness-110 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cc-accent-light)]";

export const btnOutline =
  "inline-flex items-center justify-center rounded-full border border-[var(--cc-border-strong)] bg-[var(--cc-card)]/80 px-8 py-3.5 text-sm font-semibold text-[var(--cc-cream)] backdrop-blur-sm transition hover:border-[var(--cc-gold)]/40 hover:bg-[var(--cc-bg-elevated)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cc-muted)]";

export const btnGoldSm =
  "inline-flex items-center justify-center rounded-full bg-gradient-to-b from-[#f0b85c] to-[var(--cc-gold)] px-5 py-2 text-sm font-semibold text-[var(--cc-bg)] shadow-md transition hover:brightness-105 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cc-gold)]";

export const btnCoralSm =
  "inline-flex items-center justify-center rounded-full bg-gradient-to-b from-[#d94a28] to-[var(--cc-accent)] px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cc-accent-light)]";

export const eyebrow =
  "text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cc-gold)]";

export const heroGradient =
  "absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,rgba(199,61,31,0.22),transparent_55%),radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(232,165,75,0.12),transparent_50%),radial-gradient(ellipse_60%_45%_at_0%_100%,rgba(199,61,31,0.08),transparent_45%),linear-gradient(165deg,#1a0c09_0%,var(--cc-bg)_45%,#0d0807_100%)]";
