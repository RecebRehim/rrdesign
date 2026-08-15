import type { Metadata } from "next";
import { CampaignBanner } from "@/components/campaign-banner";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Work } from "@/components/work";
import { Includes } from "@/components/includes";
import { Services } from "@/components/services";
import { Campaign } from "@/components/campaign";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { faqItems } from "@/lib/content";
import { seo, buildPageMetadata, getFaqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: seo.title,
    description: seo.description,
    path: "/",
    keywords: seo.keywords,
  }),
  title: { absolute: seo.title },
};

export default function Home() {
  return (
    <>
      <JsonLd data={getFaqJsonLd(faqItems, "/")} />
      <CampaignBanner />
      <Header />
      <main id="main">
        <Hero />
        <Problem />
        <Work />
        <Includes />
        <Services />
        <Campaign />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
