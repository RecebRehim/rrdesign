import { FadeIn } from "@/components/fade-in";

const items = [
  {
    num: "01",
    title: "Sahə website-ləri",
    body: "Klinika, təhsil, avto, icarə, fərdi mütəxəssis - hazır, sınaqdan keçmiş struktur. Brend, rəng, mətn və WhatsApp nömrəsi sizə uyğunlaşdırılır.",
    points: [
      "Landing və çoxsəhifəli sayt",
      "Mobil-first, sürətli, SEO",
      "Vercel üzərində hosting",
    ],
  },
  {
    num: "02",
    title: "DM Bot",
    body: "Instagram və WhatsApp-da gələn mesajlar cavabsız qalmır. Qiymət, randevu, ünvan - bot soruşur, lead-i toplayır, sizə ötürür.",
    points: ["Instagram DM və komment", "WhatsApp satış axını", "24/7 ilk cavab"],
  },
  {
    num: "03",
    title: "Lead və satış axını",
    body: "Saytdakı forma, düymə və paket seçimi birbaşa WhatsApp-a düşür. Müştəri yolu qısa - sizə yalnız bağlamaq qalır.",
    points: [
      "WhatsApp CTA sistemi",
      "Paket / qiymət səhifələri",
      "Randevu və rezervasiya",
    ],
  },
];

export function Services() {
  return (
    <section id="xidmetler" className="px-5 py-12 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Xidmətlər
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">
            Bakıda sayt hazırlanması, sahə website-ləri və Instagram/WhatsApp DM
            Bot — satış üçün konkret alətlər.
          </p>
        </FadeIn>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn key={item.num} delay={i * 0.06}>
              <article className="surface-card flex h-full flex-col p-6 sm:p-8">
                <span className="font-display text-sm font-bold tracking-wide text-cta">
                  {item.num}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{item.body}</p>
                <ul className="mt-6 space-y-2 text-sm leading-relaxed">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cta" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
