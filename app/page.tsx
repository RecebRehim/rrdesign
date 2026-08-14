import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { Industries } from "@/components/industries";
import { Process } from "@/components/process";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <Industries />
        <Services />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
