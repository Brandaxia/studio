
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
import { ArrowRight, GitMerge } from 'lucide-react';
import type { LearningPath, Program } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface LearningPathsProps {
  learningPaths: LearningPath[];
  programs: Program[];
}

export function LearningPaths({ learningPaths, programs }: LearningPathsProps) {
  const getProgramTitle = (programId: string) => {
    return programs.find(p => p.id === programId)?.title || '';
  };
  
  return (
    <section id="rutas" className="w-full bg-muted py-16 md:py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Curated Learning Paths</h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Follow our curated program sequences to guide your journey from beginner to expert.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {learningPaths.map((path) => (
            <Card key={path.id} className="flex flex-col overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105">
              <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <GitMerge className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{path.title}</CardTitle>
                  </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <CardDescription className="mt-2 flex-1">{path.description}</CardDescription>
                 <div className="mt-4">
                    <h4 className="mb-2 text-sm font-semibold text-foreground">Included Programs:</h4>
                    <div className="flex flex-wrap gap-2">
                        {path.programIds.map(programId => (
                            <Badge key={programId} variant="secondary">{getProgramTitle(programId)}</Badge>
                        ))}
                    </div>
                 </div>
              </CardContent>
              <CardFooter>
                 <Button asChild variant="link" className="p-0 text-primary hover:text-primary/80">
                  <Link href={`/learning-paths/${path.id}`}>
                    View Full Path <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
