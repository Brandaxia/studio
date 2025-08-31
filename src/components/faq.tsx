import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { FaqItem } from '@/lib/types';

interface FaqProps {
  faqs: FaqItem[];
}

export function Faq({ faqs }: FaqProps) {
  return (
    <section id="faq" className="w-full py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Preguntas Frecuentes</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Respuestas a las dudas que orbitan tu curiosidad.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
