import { FadeIn } from "@/components/fade-in";

export function Breadcrumbs({
  items,
}: {
  items: { href: string; label: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-mute">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {last ? (
                <span className="text-ink" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <a href={item.href} className="hover:text-ink">
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  h1,
  lead,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow: string;
  h1: string;
  lead: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}) {
  return (
    <FadeIn>
      <p className="text-[12px] font-semibold tracking-[0.16em] text-cta">
        {eyebrow}
      </p>
      <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
        {h1}
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">
        {lead}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          {primaryLabel}
        </a>
        <a href={secondaryHref} className="btn-secondary">
          {secondaryLabel}
        </a>
      </div>
    </FadeIn>
  );
}
