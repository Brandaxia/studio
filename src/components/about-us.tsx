
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import type { Instructor, FaqItem } from '@/lib/types';
import { Users, BookOpen, Handshake, Code2, HeartHandshake } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface AboutUsProps {
  instructors: Instructor[];
  faqs: FaqItem[];
}

const collectiveBranches = [
    { name: 'Ainsophic Academy', icon: BookOpen, description: 'Educación de vanguardia en IA para formar a la próxima generación de líderes.' },
    { name: 'Ainsophic Community', icon: Users, description: 'Una red global para colaboración, intercambio de conocimiento y networking.' },
    { name: 'Ainsophic Foundation', icon: Handshake, description: 'Promoviendo una IA ética y asegurando que la tecnología sirva a la humanidad.' },
    { name: 'Ainsophic OpenSource', icon: Code2, description: 'Desarrollando y compartiendo herramientas de código abierto para democratizar la IA.' },
    { name: 'Ainsophic Volunteer', icon: HeartHandshake, description: 'Conectando expertos en IA con ONGs para crear un impacto positivo.' },
];

export function AboutUs({ instructors, faqs }: AboutUsProps) {
  return (
    <section id="about" className="w-full bg-muted py-16 md:py-24">
      <div className="container px-4">
        {/* Ainsophic Collective Introduction */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">El Colectivo Ainsophic</h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Ainsophic es más que una academia; es un vasto ecosistema dedicado al avance de la Inteligencia Artificial para el beneficio de todos.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {collectiveBranches.map((branch) => (
            <div key={branch.name} className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <branch.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{branch.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{branch.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instructors Section */}
        <div className="mx-auto mt-20 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Conocé a los Instructores</h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Expertos de la industria e investigadores líderes que te guiarán en tu viaje.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {instructors.map((instructor) => (
            <Card key={instructor.id} className="flex flex-col overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Avatar className="h-24 w-24 border-4 border-background shadow-md">
                  <AvatarImage src={instructor.avatar} alt={instructor.name} data-ai-hint={instructor.aiHint}/>
                  <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-xl font-semibold">{instructor.name}</h3>
                <p className="mt-1 text-primary">{instructor.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Preguntas Frecuentes</h2>
                <p className="mt-4 text-base text-muted-foreground md:text-lg">
                    Respuestas a las consultas más comunes sobre nuestros programas de IA.
                </p>
            </div>
            <div className="mx-auto mt-12 max-w-3xl">
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq) => (
                    <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                        <AccordionTrigger className="text-left text-base font-semibold hover:no-underline md:text-lg">
                        {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground md:text-base">
                        {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
      </div>
    </section>
  );
}
