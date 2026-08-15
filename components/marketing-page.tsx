import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/fade-in";
import { JsonLd } from "@/components/json-ld";
import { PageHero, Breadcrumbs } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import type { MarketingPage } from "@/lib/pages";
import {
  getBreadcrumbJsonLd,
  getFaqJsonLd,
  getWebPageJsonLd,
} from "@/lib/seo";
import { getSiteUrl } from "@/lib/site-url";

export function MarketingPageView({ page }: { page: MarketingPage }) {
  const crumbs = [
    { href: "/", label: "Ana səhifə" },
    { href: page.path, label: page.h1 },
  ];

  return (
    <PageShell>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Ana səhifə", path: "/" },
          { name: page.h1, path: page.path },
        ])}
      />
      <JsonLd
        data={getWebPageJsonLd({
          path: page.path,
          name: page.h1,
          description: page.description,
        })}
      />
      <JsonLd data={getFaqJsonLd(page.faq, page.path)} />
      {page.path !== "/haqqimizda" ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Service",
            name: page.h1,
            description: page.description,
            url: `${getSiteUrl()}${page.path}`,
            provider: { "@id": `${getSiteUrl()}/#business` },
            areaServed: [
              { "@type": "City", name: "Bakı" },
              { "@type": "Country", name: "Azərbaycan" },
            ],
          }}
        />
      ) : null}
      <article className="px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs items={crumbs} />
          <div className="mt-8">
            <PageHero
              eyebrow={page.eyebrow}
              h1={page.h1}
              lead={page.lead}
              primaryHref={page.waHref}
              primaryLabel="WhatsApp-a yaz"
              secondaryHref={page.secondaryHref}
              secondaryLabel={page.secondaryLabel}
            />
          </div>

          {page.facts ? (
            <FadeIn className="mt-12">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Qısa faktlar
              </h2>
              <dl className="mt-6 divide-y divide-line overflow-hidden rounded-[24px] border border-line bg-card">
                {page.facts.map((fact) => (
                  <div
                    key={fact.term}
                    className="grid gap-1 px-5 py-4 sm:grid-cols-[8rem_1fr] sm:gap-6"
                  >
                    <dt className="text-sm font-semibold text-mute">{fact.term}</dt>
                    <dd className="text-sm font-medium sm:text-base">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          ) : null}

          <div className="mt-14 space-y-12">
            {page.sections.map((section) => (
              <FadeIn key={section.title}>
                <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-mute">
                  {section.body}
                </p>
                {section.items ? (
                  <ul className="mt-5 space-y-2 text-sm leading-relaxed sm:text-base">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cta" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-16">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Tez-tez verilən suallar
            </h2>
            <Accordion
              type="single"
              collapsible
              className="mt-8 border-y border-line"
            >
              {page.faq.map((item) => (
                <AccordionItem key={item.q} value={item.q} className="border-line">
                  <AccordionTrigger className="py-4 text-left text-lg font-semibold hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm leading-relaxed text-mute">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>

          <FadeIn className="mt-14">
            <div className="rounded-[24px] bg-ink px-6 py-10 text-white sm:px-10">
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                WhatsApp-dan yazın, konkret paket göndərək.
              </h2>
              <p className="mt-3 text-sm text-white/70 sm:text-base">
                Gizli ödəniş yoxdur. Demo və müddət aydındır.
              </p>
              <a
                href={page.waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-cta px-[22px] py-[14px] text-sm font-semibold text-white hover:bg-cta-deep"
              >
                WhatsApp-a yaz
              </a>
            </div>
          </FadeIn>
        </div>
      </article>
    </PageShell>
  );
}
