
import type { Course, Program } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { Button } from './ui/button';

interface CoursesProps {
  courses: Course[];
  programs: Program[];
}

export function Courses({ courses, programs }: CoursesProps) {
  const getProgramTitle = (programId: string) => {
    return programs.find(p => p.id === programId)?.title || 'General';
  };

  return (
    <section id="cursos" className="w-full bg-muted py-16 md:py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Cursos Destacados</h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Explorá algunos de los cursos individuales que forman los pilares de nuestros programas.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => ( 
            <Link key={course.id} href={`/programs/${course.programId}`} className="group block">
                <Card className="flex h-full flex-col overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105">
                <CardHeader>
                    <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <BookOpen className="h-6 w-6" />
                    </div>
                    <div>
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <Badge variant="secondary" className="mt-2">{getProgramTitle(course.programId)}</Badge>
                    </div>
                    </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                    <CardDescription>{course.description}</CardDescription>
                </CardContent>
                <CardFooter>
                    <div className="flex items-center text-sm font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Ver Programa <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                </CardFooter>
                </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
