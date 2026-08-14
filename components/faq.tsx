"use client";

import { useLanguage } from "@/components/language-provider";

export function Faq() {
  const { copy } = useLanguage();

  return (
    <section id="faq" className="px-5 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-copper">
          {copy.faq.kicker}
        </p>
        <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          {copy.faq.title}
        </h2>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {copy.faq.items.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="cursor-pointer list-none font-display text-lg font-semibold tracking-tight marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.q}
                  <span className="mt-1 text-mute transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-mute">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
