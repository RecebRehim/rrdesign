import { FadeIn } from "@/components/fade-in";
import { waCampaign } from "@/lib/whatsapp";

const includes = [
  "Mobil uyğun vizitka sayt",
  "Bir toxunuşla WhatsApp",
  "SEO və sürətli açılış",
  "1 il dəstək",
  "3 pulsuz reviziya",
];

export function Campaign() {
  return (
    <section id="kampaniya" className="px-5 py-12 sm:px-8 sm:py-20">
      <FadeIn>
        <div className="mx-auto max-w-6xl rounded-[24px] bg-ink px-6 py-12 text-white sm:px-12 sm:py-16">
          <p className="text-sm font-semibold tracking-wide text-white/60">
            İlk 5 müştəri
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">
            İlk sayt kampaniyası — 100 AZN
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
            Peşəkar vizitka sayt 24 saata hazır. Sürət və etibar üçün.
          </p>
          <div className="mt-6 flex items-end gap-3">
            <span className="font-display text-5xl font-bold text-cta">100 AZN</span>
            <span className="mb-1 text-lg text-white/40 line-through">250 AZN</span>
          </div>
          <ul className="mt-8 space-y-2 text-sm text-white/80">
            {includes.map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
          <a
            href={waCampaign}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-cta px-[22px] py-[14px] text-sm font-semibold text-white hover:bg-cta-deep"
          >
            WhatsApp-da yeri tut
          </a>
          <p className="mt-4 text-sm text-white/55">Bu ay üçün 2 yer qaldı</p>
        </div>
      </FadeIn>
    </section>
  );
}
