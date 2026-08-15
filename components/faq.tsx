import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/fade-in";
import { faqItems } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="px-5 py-12 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Tez-tez verilən suallar
          </h2>
        </FadeIn>
        <Accordion type="single" collapsible className="mt-10 border-y border-line">
          {faqItems.map((item) => (
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
      </div>
    </section>
  );
}
