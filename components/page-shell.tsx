import { CampaignBanner } from "@/components/campaign-banner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CampaignBanner />
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
