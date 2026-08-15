const bannerText =
  "24 saata vizitka saytın olsun - Cəmi 100 AZN (İlk 5 müştəri üçün) | 1 il dəstək + 3 reviziya";

export function CampaignBanner() {
  return (
    <div className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5">
        <div className="banner-ticker min-w-0 flex-1 text-[12px] leading-snug sm:text-[13px]">
          <p className="banner-ticker-track">
            <span>{bannerText}</span>
            <span aria-hidden="true">{bannerText}</span>
          </p>
        </div>
        <a
          href="/vizitka-sayt"
          className="shrink-0 rounded-full bg-cta px-3 py-1.5 text-[12px] font-semibold text-white hover:bg-cta-deep"
        >
          Kampaniyadan yararlan
        </a>
      </div>
    </div>
  );
}
