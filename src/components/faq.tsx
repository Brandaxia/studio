import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: '¿Qué es "Ainsophic"?',
    answer: 'Ainsophic se deriva de "Ein Sof", un término cabalístico que significa "el infinito" o "sin fin". Representa la naturaleza ilimitada del conocimiento y el potencial que buscamos desbloquear en nuestros estudiantes.',
  },
  {
    question: '¿Necesito conocimientos previos para inscribirme?',
    answer: 'La mayoría de nuestros programas fundamentales están diseñados para ser accesibles a todos, independientemente de su experiencia previa. Algunos cursos avanzados pueden tener prerrequisitos, los cuales se especifican claramente en su descripción.',
  },
  {
    question: '¿Los programas son en línea o presenciales?',
    answer: 'Actualmente, todos nuestros programas se ofrecen en un formato en línea flexible, permitiendo a estudiantes de todo el mundo unirse. Utilizamos una combinación de contenido grabado, sesiones en vivo y cuadernos interactivos.',
  },
  {
    question: '¿Qué tipo de soporte recibo como estudiante?',
    answer: 'Ofrecemos soporte integral a través de foros de comunidad, sesiones de preguntas y respuestas con instructores y acceso a un mentor personal para guiarte en tu viaje de aprendizaje.',
  },
];

export function Faq() {
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
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
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
