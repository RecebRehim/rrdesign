import { Frown, Clock, MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const items = [
  {
    num: "01",
    icon: Frown,
    title: "Saytsız biznes = Güvənsiz biznes",
    body: "Müştəri sizi axtarır, tapmır, rəqibə gedir.",
  },
  {
    num: "02",
    icon: Clock,
    title: "Hər 1 saniyə gecikmə = 7% satış itkisi",
    body: "Yavaş sayt və gec cavab birbaşa gəliri kəsir.",
  },
  {
    num: "03",
    icon: MessageCircle,
    title: "Gündə 2 saatın “Qiymət?” cavablamağa gedir",
    body: "Eyni suallar təkrarlanır — satış vaxtı azalır.",
  },
];

export function Problem() {
  return (
    <section className="px-5 py-12 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Saytın yoxdursa, müştəri rəqibə gedir.
          </h2>
        </FadeIn>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.06}>
              <article className="surface-card h-full p-6 sm:p-8">
                <span className="font-display text-sm font-bold tracking-wide text-cta">
                  {item.num}
                </span>
                <item.icon className="mt-4 size-7" strokeWidth={1.75} />
                <h3 className="mt-5 font-display text-xl font-bold leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-mute">{item.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
