"use client";

import { useLanguage } from "@/components/language-provider";
import { INSTAGRAM_DM } from "@/lib/content";
import {
  PreviewDriveAZ,
  PreviewSafira,
  PreviewSah,
} from "@/components/site-previews";

export function Hero() {
  const { copy } = useLanguage();

  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pt-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p
            className="rise text-[12px] font-semibold uppercase tracking-[0.22em] text-copper"
            style={{ animationDelay: "40ms" }}
          >
            {copy.hero.kicker}
          </p>
          <h1 className="mt-5 font-display text-[18vw] font-extrabold leading-[0.86] tracking-[-0.05em] sm:text-7xl lg:text-[5.4rem]">
            {copy.hero.title.map((line, i) => (
              <span
                key={line}
                className="rise block"
                style={{ animationDelay: `${120 + i * 90}ms` }}
              >
                {line}
              </span>
            ))}
          </h1>
          <p
            className="rise mt-6 max-w-md text-[15px] leading-relaxed text-mute sm:text-base"
            style={{ animationDelay: "420ms" }}
          >
            {copy.hero.lead}
          </p>
          <div
            className="rise mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "520ms" }}
          >
            <a
              href={INSTAGRAM_DM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-copper px-5 py-3 text-sm font-semibold text-white hover:bg-copper-deep"
            >
              {copy.cta.dm}
            </a>
            <a
              href="#work"
              className="inline-flex rounded-full border border-ink/15 bg-card px-5 py-3 text-sm font-semibold hover:border-ink/30"
            >
              {copy.cta.work}
            </a>
          </div>
          <p
            className="rise mt-6 text-xs text-mute"
            style={{ animationDelay: "600ms" }}
          >
            {copy.hero.pill}
          </p>
          <div className="rise mt-10 sm:hidden" style={{ animationDelay: "280ms" }}>
            <PreviewDriveAZ />
          </div>
        </div>

        <div
          className="rise relative mx-auto hidden h-[420px] w-full max-w-[520px] sm:block"
          style={{ animationDelay: "280ms" }}
        >
          <div className="absolute left-[8%] top-0 w-[78%] rotate-[-6deg]">
            <PreviewDriveAZ />
          </div>
          <div className="absolute right-0 top-[28%] w-[74%] rotate-[5deg]">
            <PreviewSafira />
          </div>
          <div className="absolute bottom-0 left-[4%] w-[70%] rotate-[-2deg]">
            <PreviewSah />
          </div>
        </div>
      </div>

      <dl className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
        {copy.stats.map((item) => (
          <div key={item.label} className="bg-card px-5 py-5 sm:px-6">
            <dt className="text-xs text-mute">{item.label}</dt>
            <dd className="mt-1 font-display text-2xl font-bold tracking-tight">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
