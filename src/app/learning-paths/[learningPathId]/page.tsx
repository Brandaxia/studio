
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { LearningPath, Program } from "@/lib/types";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';
import { initialLearningPaths, initialPrograms } from "@/lib/data";


export default function LearningPathDetailPage({ params }: { params: { learningPathId: string } }) {
  const learningPath = initialLearningPaths.find(lp => lp.id === params.learningPathId);
  const includedPrograms = learningPath ? initialPrograms.filter(p => learningPath.programIds.includes(p.id)) : [];

  if (!learningPath) {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background">
            <Header />
            <main className="flex-1">
                <div className="container flex min-h-[calc(100vh-12rem)] flex-col items-center justify-center py-16 text-center md:py-24">
                    <h1 className="text-4xl font-bold">Ruta de Aprendizaje No Encontrada</h1>
                    <p className="mt-4 text-muted-foreground">Lo sentimos, no pudimos encontrar la ruta de aprendizaje que estás buscando.</p>
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
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
            <div className="container px-4 text-center md:px-6">
                <Badge>Ruta de Aprendizaje</Badge>
                <h1 className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {learningPath.title}
                </h1>
                <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg lg:text-xl">
                    {learningPath.description}
                </p>
            </div>
        </section>

        <section className="w-full py-16 md:py-24">
            <div className="container px-4 md:px-6">
                 <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Programas en esta Ruta</h2>
                <div className="mx-auto grid max-w-5xl gap-8">
                    {includedPrograms.map((program, index) => (
                        <Card key={program.id} className="overflow-hidden rounded-2xl shadow-lg">
                            <div className="grid md:grid-cols-2">
                                <div className="relative h-60 w-full md:h-full">
                                    <Image
                                        src={program.image}
                                        alt={program.title}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={program.aiHint}
                                    />
                                </div>
                                <div className="flex flex-col p-6">
                                     <Badge variant="secondary" className="mb-2 w-fit">Paso {index + 1}</Badge>
                                    <h3 className="text-2xl font-bold">{program.title}</h3>
                                    <p className="mt-2 flex-1 text-muted-foreground">{program.description}</p>
                                    <div className="mt-6">
                                        <Link href={`/programs/${program.id}`} className="font-semibold text-primary hover:text-primary/80">
                                            Ver Detalles del Programa <ArrowRight className="ml-1 inline h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
