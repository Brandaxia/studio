
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Testimonial } from '@/lib/types';
import { initialPrograms } from '@/lib/data';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  const getProgramTitle = (programId: string) => {
    return initialPrograms.find(p => p.id === programId)?.title || 'Related Program';
  };
  return (
    <section id="testimonials" className="w-full py-16 md:py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Voices from the Field</h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Success stories from our students.
          </p>
        </div>
        <Carousel
          opts={{ align: 'start', loop: true }}
          className="mx-auto mt-12 w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="sm:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full rounded-2xl shadow-lg">
                    <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                      <p className="flex-1 text-sm italic text-foreground/80 md:text-base">"{testimonial.quote}"</p>
                      <div className="mt-6 flex items-center">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4 text-left">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{getProgramTitle(testimonial.program)}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
