"use client";

import { useLanguage } from "@/components/language-provider";
import { previews } from "@/components/site-previews";

export function Work() {
  const { copy } = useLanguage();

  return (
    <section id="work" className="px-5 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-copper">
          {copy.work.kicker}
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          {copy.work.title}
        </h2>
        <p className="mt-4 max-w-xl text-mute">{copy.work.lead}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {copy.projects.map((project) => {
            const Preview = previews[project.id as keyof typeof previews];
            return (
              <article
                key={project.id}
                className="group rounded-2xl border border-line bg-card p-3 sm:p-4"
              >
                <Preview />
                <div className="px-2 pb-3 pt-5 sm:px-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-copper">
                        {project.category}
                      </p>
                      <h3 className="mt-1 font-display text-2xl font-bold tracking-tight">
                        {project.title}
                      </h3>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-full border border-ink/12 px-3 py-1.5 text-xs font-semibold group-hover:border-copper group-hover:text-copper"
                    >
                      {copy.cta.live}
                    </a>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-mute">
                    {project.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-sand px-2.5 py-1 text-[11px] font-medium text-ink/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
