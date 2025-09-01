
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Program, Course } from "@/lib/types";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

// This data would typically be fetched from a database or CMS
const programsData: Program[] = [
  {
    id: '1',
    title: 'Machine Learning Foundations',
    description: 'Explore core ML concepts, from supervised learning to neural networks. This program is designed to give you a solid footing in the world of machine learning, covering both theoretical knowledge and practical application. You will learn how to build, train, and deploy various ML models.',
    image: 'https://picsum.photos/1200/600?random=1',
    aiHint: 'machine learning',
    courseIds: ['c1', 'c2'],
  },
  {
    id: '2',
    title: 'Natural Language Processing',
    description: 'Build models that understand, process, and generate human language. Delve into the fascinating world of NLP, from classic techniques to modern architectures like transformers. You will work on projects like sentiment analysis, text summarization, and chatbots.',
    image: 'https://picsum.photos/1200/600?random=2',
    aiHint: 'natural language processing',
    courseIds: ['c3', 'c4'],
  },
  {
    id: '3',
    title: 'Computer Vision',
    description: 'Teach computers to see and interpret the visual world with deep learning. This program covers everything from image processing fundamentals to advanced topics like object detection, image segmentation, and facial recognition using convolutional neural networks.',
    image: 'https://picsum.photos/1200/600?random=3',
    aiHint: 'computer vision',
    courseIds: ['c5'],
  },
];

const coursesData: Course[] = [
  { id: 'c1', programId: '1', title: 'Introduction to Supervised Learning', description: 'Learn about regression and classification.'},
  { id: 'c2', programId: '1', title: 'Unsupervised Learning Techniques', description: 'Explore clustering and dimensionality reduction.'},
  { id: 'c3', programId: '2', title: 'Transformers and Attention Mechanism', description: 'Deep dive into the architecture that powers modern LLMs.'},
  { id: 'c4', programId: '2', title: 'Text Generation and Summarization', description: 'Build models that can write and summarize.'},
  { id: 'c5', programId: '3', title: 'Convolutional Neural Networks (CNNs)', description: 'Understand the building blocks of image recognition.'},
];


export default function ProgramDetailPage({ params }: { params: { programId: string } }) {
  const program = programsData.find(p => p.id === params.programId);
  const programCourses = program ? coursesData.filter(c => program.courseIds?.includes(c.id)) : [];

  if (!program) {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background">
            <Header />
            <main className="flex-1">
                <div className="container flex min-h-[calc(100vh-12rem)] items-center justify-center py-16 md:py-24">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Program Not Found</h1>
                        <p className="mt-4 text-muted-foreground">Sorry, we couldn't find the program you're looking for.</p>
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
        <section className="relative h-[30vh] min-h-[250px] w-full md:h-[40vh] md:min-h-[300px]">
            <div className="absolute inset-0 bg-black/50" />
            <Image 
                src={program.image}
                alt={program.title}
                fill
                className="object-cover"
                data-ai-hint={program.aiHint}
            />
            <div className="container relative z-10 flex h-full flex-col items-start justify-end px-4 pb-8 md:pb-12">
                <Badge>Program</Badge>
                <h1 className="mt-2 text-3xl font-bold text-primary-foreground md:text-5xl">
                {program.title}
                </h1>
            </div>
        </section>

        <section className="w-full py-12 md:py-24">
            <div className="container grid gap-8 px-4 md:grid-cols-3 md:gap-12">
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold tracking-tight">About this Program</h2>
                    <p className="mt-4 text-base text-muted-foreground md:text-lg">{program.description}</p>
                </div>
                <div className="md:col-span-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Courses Included</CardTitle>
                            <CardDescription>This program includes the following courses.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {programCourses.map(course => (
                                <div key={course.id} className="flex items-start gap-4">
                                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-1">
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
