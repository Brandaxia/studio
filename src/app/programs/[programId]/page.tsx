
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Program, Course } from "@/lib/types";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import { initialPrograms, initialCourses } from "@/lib/data";

export default function ProgramDetailPage({ params }: { params: { programId: string } }) {
  const program = initialPrograms.find(p => p.id === params.programId);
  const programCourses = program ? initialCourses.filter(c => program.courseIds?.includes(c.id)) : [];

  if (!program) {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background">
            <Header />
            <main className="flex-1">
                <div className="container flex min-h-[calc(100vh-12rem)] items-center justify-center py-16 text-center md:py-24">
                    <div>
                        <h1 className="text-4xl font-bold">Programa No Encontrado</h1>
                        <p className="mt-4 text-muted-foreground">Lo sentimos, no pudimos encontrar el programa que estás buscando.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative h-[30vh] min-h-[250px] w-full md:h-[40vh]">
            <div className="absolute inset-0 bg-black/50" />
            <Image 
                src={program.image}
                alt={program.title}
                fill
                className="object-cover"
                data-ai-hint={program.aiHint}
            />
            <div className="container relative z-10 flex h-full flex-col items-start justify-end px-4 pb-8 md:pb-12">
                <Badge>Programa</Badge>
                <h1 className="mt-2 text-3xl font-bold text-primary-foreground md:text-5xl">
                {program.title}
                </h1>
            </div>
        </section>

        <section className="w-full py-12 md:py-24">
            <div className="container grid gap-8 px-4 md:grid-cols-3 md:gap-12">
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold tracking-tight">Sobre este Programa</h2>
                    <p className="mt-4 text-base text-muted-foreground md:text-lg">{program.description}</p>
                </div>
                <div className="space-y-8 md:col-span-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Cursos Incluidos</CardTitle>
                            <CardDescription>Este programa incluye los siguientes cursos.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {programCourses.map(course => (
                                <div key={course.id} className="flex items-start gap-4">
                                    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <BookOpen className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">{course.title}</h3>
                                        <p className="text-sm text-muted-foreground">{course.description}</p>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
