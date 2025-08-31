import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import type { Instructor } from '@/lib/types';

interface InstructorsProps {
  instructors: Instructor[];
}

export function Instructors({ instructors }: InstructorsProps) {
  return (
    <section id="instructores" className="w-full bg-primary/5 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Conoce a los Guías</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Mentores iluminados que te acompañarán en tu ascenso.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {instructors.map((instructor) => (
            <Card key={instructor.id} className="flex flex-col overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Avatar className="h-24 w-24 border-4 border-background shadow-md">
                  <AvatarImage src={instructor.avatar} alt={instructor.name} data-ai-hint={instructor.aiHint}/>
                  <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 font-headline text-xl font-semibold">{instructor.name}</h3>
                <p className="mt-1 text-primary">{instructor.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
