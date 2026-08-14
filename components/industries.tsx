"use client";

import { useLanguage } from "@/components/language-provider";

export function Industries() {
  const { copy } = useLanguage();
  const loop = [...copy.industries.items, ...copy.industries.items];

  return (
    <section className="py-14">
      <p className="mb-6 text-center text-[12px] font-semibold uppercase tracking-[0.22em] text-copper">
        {copy.industries.kicker}
      </p>
      <h2 className="mb-8 px-5 text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
        {copy.industries.title}
      </h2>
      <div className="marquee">
        <div className="marquee-track">
          {loop.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center px-6 font-display text-xl font-semibold text-ink/80 sm:text-2xl"
            >
              {item}
              <span className="ml-6 text-copper">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
