
import type { Course, Program } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';
import { Badge } from './ui/badge';

interface CoursesProps {
  courses: Course[];
  programs: Program[];
}

export function Courses({ courses, programs }: CoursesProps) {
  const getProgramTitle = (programId: string) => {
    return programs.find(p => p.id === programId)?.title || 'General';
  };

  return (
    <section id="courses" className="w-full bg-muted py-16 md:py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Featured Courses</h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Explore some of the individual courses that form the building blocks of our programs.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 6).map((course) => ( // Show a selection of courses
            <Card key={course.id} className="flex flex-col overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105">
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
