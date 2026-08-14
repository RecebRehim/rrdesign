"use client";

import { useLanguage } from "@/components/language-provider";
import { INSTAGRAM_DM, INSTAGRAM_URL } from "@/lib/content";

export function Contact() {
  const { copy } = useLanguage();

  return (
    <section id="contact" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-ink px-6 py-14 text-paper sm:px-12 sm:py-16">
        <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#e8b39a]">
          {copy.contact.kicker}
        </p>
        <div className="mt-5 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              {copy.contact.title}
            </h2>
            <p className="mt-4 max-w-lg text-paper/65">{copy.contact.lead}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {copy.contact.prompts.map((prompt) => (
                <a
                  key={prompt}
                  href={INSTAGRAM_DM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/12 px-3 py-1.5 text-xs text-paper/80 hover:border-[#e8b39a] hover:text-white"
                >
                  {prompt}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <a
              href={INSTAGRAM_DM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-copper px-6 py-3 text-sm font-semibold text-white hover:bg-copper-deep"
            >
              {copy.cta.dm}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-paper/55 hover:text-paper"
            >
              instagram.com/rrdesign.az
            </a>
            <p className="text-xs text-paper/40">{copy.contact.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
