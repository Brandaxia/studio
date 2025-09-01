
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { LearningPath, Program } from "@/lib/types";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';

// Mock data, in a real app this would be fetched from a DB/CMS
const programsData: Program[] = [
  {
    id: 'p1',
    title: 'Machine Learning Engineering',
    description: 'Build a solid foundation in machine learning, from algorithms to deployment.',
    image: 'https://picsum.photos/600/400?random=1',
    aiHint: 'machine learning',
    courseIds: ['c1', 'c2', 'c3', 'c4'],
  },
  {
    id: 'p2',
    title: 'NLP: From Text to Transformers',
    description: 'Master the art of building models that understand and generate human language.',
    image: 'https://picsum.photos/600/400?random=2',
    aiHint: 'natural language processing',
    courseIds: ['c5', 'c6', 'c7'],
  },
  {
    id: 'p3',
    title: 'Computer Vision & Image Analysis',
    description: 'Teach computers to "see" and interpret the visual world.',
    image: 'https://picsum.photos/600/400?random=3',
    aiHint: 'computer vision',
    courseIds: ['c8', 'c9', 'c10'],
  },
   {
    id: 'p4',
    title: 'Generative AI & Large Language Models',
    description: 'Explore the cutting-edge of AI with generative models and LLMs.',
    image: 'https://picsum.photos/600/400?random=4',
    aiHint: 'generative ai',
    courseIds: ['c11', 'c12', 'c13'],
  },
];

const learningPathsData: LearningPath[] = [
  { 
    id: 'lp1', 
    title: 'Foundations of AI Engineering', 
    description: 'A comprehensive path covering foundational ML and NLP to start your career in AI.', 
    programIds: ['p1', 'p2'] 
  },
  { 
    id: 'lp2', 
    title: 'Advanced AI Specialization', 
    description: 'Deepen your expertise with advanced topics in computer vision and generative AI.', 
    programIds: ['p3', 'p4'] 
  },
  {
    id: 'lp3',
    title: 'AI for Business & Product Leaders',
    description: 'Understand the strategic implications of AI and how to lead AI-driven projects without deep technical expertise.',
    programIds: ['p1', 'p4']
  }
];


export default function LearningPathDetailPage({ params }: { params: { learningPathId: string } }) {
  const learningPath = learningPathsData.find(lp => lp.id === params.learningPathId);
  const includedPrograms = learningPath ? programsData.filter(p => learningPath.programIds.includes(p.id)) : [];

  if (!learningPath) {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background">
            <Header />
            <main className="flex-1">
                <div className="container flex min-h-[calc(100vh-12rem)] items-center justify-center py-16 text-center md:py-24">
                    <div>
                        <h1 className="text-4xl font-bold">Learning Path Not Found</h1>
                        <p className="mt-4 text-muted-foreground">Sorry, we couldn't find the learning path you're looking for.</p>
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
        <section className="w-full bg-muted py-12 md:py-24">
            <div className="container px-4 text-center">
                <Badge>Learning Path</Badge>
                <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-5xl">
                {learningPath.title}
                </h1>
                <p className="mx-auto mt-4 max-w-3xl text-base text-muted-foreground md:text-lg">
                    {learningPath.description}
                </p>
            </div>
        </section>

        <section className="w-full py-16 md:py-24">
            <div className="container px-4">
                 <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Programs in this Path</h2>
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
                                     <Badge variant="secondary" className="mb-2 w-fit">Step {index + 1}</Badge>
                                    <h3 className="text-2xl font-bold">{program.title}</h3>
                                    <p className="mt-2 flex-1 text-muted-foreground">{program.description}</p>
                                    <div className="mt-6">
                                        <Link href={`/programs/${program.id}`} className="font-semibold text-primary hover:text-primary/80">
                                            View Program Details <ArrowRight className="ml-1 inline h-4 w-4" />
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
