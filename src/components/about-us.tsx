
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import type { Instructor } from '@/lib/types';
import { Users, BookOpen, Handshake, Code2, HeartHandshake, Box } from 'lucide-react';

interface AboutUsProps {
  instructors: Instructor[];
}

const collectiveBranches = [
    { name: 'Ainsophic Academy', icon: BookOpen, description: 'Cutting-edge AI education to train the next generation of leaders.' },
    { name: 'Ainsophic Community', icon: Users, description: 'A global network for collaboration, knowledge sharing, and networking.' },
    { name: 'Ainsophic Foundation', icon: Handshake, description: 'Promoting ethical AI and ensuring technology serves humanity.' },
    { name: 'Ainsophic OpenSource', icon: Code2, description: 'Developing and sharing open-source tools to democratize AI.' },
    { name: 'Ainsophic Volunteer', icon: HeartHandshake, description: 'Connecting AI experts with non-profits to create a positive impact.' },
];

export function AboutUs({ instructors }: AboutUsProps) {
  return (
    <section id="sobre-nosotros" className="w-full bg-muted py-16 md:py-24">
      <div className="container px-4">
        {/* Ainsophic Collective Introduction */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">The Ainsophic Collective</h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Ainsophic is more than an academy; it's a vast ecosystem dedicated to the advancement of Artificial Intelligence for the benefit of all.
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
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Meet the Instructors</h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Industry experts and leading researchers who will guide you on your journey.
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
      </div>
    </section>
  );
}
