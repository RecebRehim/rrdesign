import { FadeIn } from "@/components/fade-in";
import { previews } from "@/components/site-previews";
import { projects } from "@/lib/content";
import { waDemo } from "@/lib/whatsapp";

export function Work() {
  return (
    <section id="saheler" className="px-5 py-12 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Hər bir sahə üçün canlı demolar.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
            Demo yalnız nümunədir. Sizin saytınız şablon olmur: mətn, rəng, axın
            və WhatsApp sizin biznesinizə görə, sizə xüsusi qurulur.
          </p>
        </FadeIn>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => {
            const Preview = previews[project.id];
            return (
              <FadeIn key={project.id} delay={i * 0.04}>
                <article className="surface-card p-3 sm:p-4">
                  <Preview />
                  <div className="px-2 pb-3 pt-5 sm:px-3">
                    <h3 className="font-display text-2xl font-bold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mute">
                      {project.summary}
                    </p>
                    <ul className="mt-3 space-y-1 text-sm">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary !px-4 !py-2.5 text-[13px]"
                      >
                        Demo-ya bax →
                      </a>
                      <a
                        href={waDemo(project.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary !px-4 !py-2.5 text-[13px]"
                      >
                        WhatsApp-a al
                      </a>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
