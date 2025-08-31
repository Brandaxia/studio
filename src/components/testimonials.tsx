import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: "Este curso abrió portales de percepción que no sabía que existían. Una experiencia verdaderamente transformadora.",
    name: 'Anaïs',
    program: 'Alquimia Cuántica',
    avatar: 'https://picsum.photos/100/100?random=7',
    aiHint: 'happy person'
  },
  {
    quote: "La claridad y profundidad de las enseñanzas son incomparables. Ascenso Ainsophic es un faro en la oscuridad.",
    name: 'Leo',
    program: 'Fundamentos de la Sabiduría Antigua',
    avatar: 'https://picsum.photos/100/100?random=8',
    aiHint: 'smiling student'
  },
  {
    quote: "Apliqué la geometría sagrada en mi arte y los resultados han sido asombrosos. Mi creatividad ha florecido.",
    name: 'Iris',
    program: 'Geometría Sagrada Aplicada',
    avatar: 'https://picsum.photos/100/100?random=9',
    aiHint: 'joyful woman'
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Voces de la Ascensión</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Historias de transformación de nuestros estudiantes.
          </p>
        </div>
        <Carousel
          opts={{ align: 'start', loop: true }}
          className="mx-auto mt-12 w-full max-w-4xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full rounded-2xl shadow-lg">
                    <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                      <p className="flex-1 text-base italic text-foreground/80">"{testimonial.quote}"</p>
                      <div className="mt-6 flex items-center">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4 text-left">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.program}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
