"use client";

import { useLanguage } from "@/components/language-provider";

export function Process() {
  const { copy } = useLanguage();

  return (
    <section id="process" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-copper">
          {copy.process.kicker}
        </p>
        <h2 className="mt-4 max-w-xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          {copy.process.title}
        </h2>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {copy.process.steps.map((step) => (
            <li key={step.num} className="bg-card p-6 sm:p-7">
              <span className="font-display text-sm font-bold text-copper">
                {step.num}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
