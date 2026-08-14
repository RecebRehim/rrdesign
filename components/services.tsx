"use client";

import { useLanguage } from "@/components/language-provider";

export function Services() {
  const { copy } = useLanguage();

  return (
    <section id="services" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-copper">
          {copy.services.kicker}
        </p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight whitespace-pre-line sm:text-5xl">
            {copy.services.title}
          </h2>
          <p className="max-w-md text-mute">{copy.services.lead}</p>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {copy.services.items.map((item) => (
            <article
              key={item.num}
              className="flex flex-col rounded-2xl border border-line bg-card p-6 sm:p-7"
            >
              <span className="font-display text-sm font-bold text-copper">
                {item.num}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{item.body}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
