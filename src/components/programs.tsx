import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    title: 'Fundamentos de la Sabiduría Antigua',
    description: 'Un viaje a través de textos y filosofías milenarias que han moldeado el pensamiento humano.',
    image: 'https://picsum.photos/600/400?random=1',
    aiHint: 'ancient library'
  },
  {
    title: 'Alquimia Cuántica',
    description: 'Fusiona la física cuántica con principios alquímicos para una transformación personal profunda.',
    image: 'https://picsum.photos/600/400?random=2',
    aiHint: 'quantum physics'
  },
  {
    title: 'Geometría Sagrada Aplicada',
    description: 'Descubre y aplica los patrones universales de la creación en tu vida diaria y proyectos creativos.',
    image: 'https://picsum.photos/600/400?random=3',
    aiHint: 'sacred geometry'
  },
];

export function Programs() {
  return (
    <section id="programas" className="w-full py-16 md:py-24">
      <div className="container px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Nuestros Programas</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Caminos de conocimiento diseñados para iluminar tu mente y espíritu.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <Card key={index} className="flex flex-col overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105">
              <CardHeader className="p-0">
                <div className="relative h-56 w-full">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                    data-ai-hint={program.aiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col p-6">
                <CardTitle className="font-headline text-xl">{program.title}</CardTitle>
                <CardDescription className="mt-2 flex-1">{program.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0 text-primary hover:text-primary/80">
                  Saber más <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
