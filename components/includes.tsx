import { Smartphone, MessageCircle, Search, Zap, Headphones } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const features = [
  { icon: Smartphone, title: "Mobil uyğun dizayn" },
  { icon: MessageCircle, title: "Bir toxunuşla WhatsApp düyməsi" },
  { icon: Search, title: "SEO optimizasiya" },
  { icon: Zap, title: "Sürətli açılış (80+)" },
  { icon: Headphones, title: "1 il dəstək" },
];

export function Includes() {
  return (
    <section className="px-5 py-12 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            100 AZN-ə nə daxildir?
          </h2>
          <p className="mt-4 text-base text-mute">
            Vizitka sayt kampaniyası —{" "}
            <a href="/vizitka-sayt" className="font-semibold text-ink underline decoration-line">
              şərtlərə bax
            </a>
            .
          </p>
        </FadeIn>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <article className="surface-card h-full p-6">
                <item.icon className="size-6" strokeWidth={1.75} />
                <h3 className="mt-4 font-display text-base font-bold leading-snug">
                  {item.title}
                </h3>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
