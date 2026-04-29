import type { ReactNode } from "react";

type SectionWrapperProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  /** Tighter spacing for dense lists (e.g. menu categories) */
  dense?: boolean;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function SectionWrapper({
  id,
  title,
  subtitle,
  dense = false,
  children,
  className = "",
  innerClassName = "",
}: SectionWrapperProps) {
  const py = dense ? "py-10 sm:py-12" : "py-20 sm:py-24";
  const headerMb = dense ? "mb-6 max-w-3xl" : "mb-12 max-w-2xl";
  const titleGap = dense ? "space-y-3" : "space-y-5";
  const hSize = dense
    ? "text-2xl sm:text-3xl"
    : "text-3xl sm:text-4xl";

  return (
    <section id={id} className={`${py} ${className}`}>
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${innerClassName}`}>
        {(title || subtitle) && (
          <header className={headerMb}>
            {title && (
              <div className={titleGap}>
                <div
                  className="h-1 w-14 rounded-full bg-gradient-to-r from-[var(--cc-gold)] via-[var(--cc-accent-light)] to-[var(--cc-accent)]/80"
                  aria-hidden
                />
                <h2
                  className={`font-heading cc-text-balance font-semibold tracking-tight text-[var(--cc-cream)] ${hSize}`}
                >
                  {title}
                </h2>
              </div>
            )}
            {subtitle && (
              <p
                className={`text-[var(--cc-muted)] ${dense ? "mt-2 text-sm sm:text-base" : "mt-4 text-base leading-relaxed sm:text-[1.05rem]"}`}
              >
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
