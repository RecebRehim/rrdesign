import { Check } from "lucide-react";
import {
  PreviewDriveAZ,
  PreviewSafira,
  PreviewSah,
} from "@/components/site-previews";
import { FadeIn } from "@/components/fade-in";
import { waDefault } from "@/lib/whatsapp";

const badges = [
  "Mobil-first",
  "80+ PageSpeed",
  "SEO hazır",
  "WhatsApp inteqrasiya",
];

export function Hero() {
  return (
    <section id="top" className="px-5 pb-12 pt-12 sm:px-8 sm:pt-16 sm:pb-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <FadeIn>
          <p className="text-[12px] font-semibold tracking-[0.16em] text-cta">
            Website & Automation & AI
          </p>
          <h1 className="mt-5 font-display text-[18vw] font-extrabold leading-[0.86] tracking-[-0.05em] sm:text-7xl lg:text-[5.4rem]">
            <span className="block">Sayt.</span>
            <span className="block">DM Bot.</span>
            <span className="block">Nəticə.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
            Yerli bizneslər üçün 24 saata hazır, sahənizə uyğun website-lər və
            Instagram DM-lərini cavabsız qoymayan avtomatlaşdırma.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#saheler" className="btn-primary">
              Canlı demolara bax
            </a>
            <a
              href={waDefault}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Nümunəni WhatsApp-a al
            </a>
          </div>
          <div className="mt-10 sm:hidden">
            <PreviewDriveAZ />
          </div>
        </FadeIn>
        <FadeIn
          delay={0.12}
          className="relative mx-auto hidden h-[420px] w-full max-w-[520px] sm:block"
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
        </FadeIn>
      </div>
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-4">
        {badges.map((badge) => (
          <div
            key={badge}
            className="flex items-center gap-2 rounded-[24px] border border-line bg-card px-4 py-3 text-sm font-medium shadow-[0_18px_50px_-24px_rgba(20,18,16,0.45)]"
          >
            <Check className="size-4 shrink-0 text-cta" strokeWidth={2.2} />
            {badge}
          </div>
        ))}
      </div>
    </section>
  );
}
