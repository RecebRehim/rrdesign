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
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <>
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
