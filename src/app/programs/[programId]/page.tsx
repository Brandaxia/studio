
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
    id: 'p1',
    title: 'Machine Learning Engineering',
    description: 'Build a solid foundation in machine learning, from algorithms to deployment. This program is designed to give you a solid footing in the world of machine learning, covering both theoretical knowledge and practical application. You will learn how to build, train, and deploy various ML models.',
    image: 'https://picsum.photos/1200/600?random=1',
    aiHint: 'machine learning',
    courseIds: ['c1', 'c2', 'c3', 'c4'],
  },
  {
    id: 'p2',
    title: 'NLP: From Text to Transformers',
    description: 'Master the art of building models that understand and generate human language. Delve into the fascinating world of NLP, from classic techniques to modern architectures like transformers. You will work on projects like sentiment analysis, text summarization, and chatbots.',
    image: 'https://picsum.photos/1200/600?random=2',
    aiHint: 'natural language processing',
    courseIds: ['c5', 'c6', 'c7'],
  },
  {
    id: 'p3',
    title: 'Computer Vision & Image Analysis',
    description: 'Teach computers to "see" and interpret the visual world with deep learning. This program covers everything from image processing fundamentals to advanced topics like object detection, image segmentation, and facial recognition using convolutional neural networks.',
    image: 'https://picsum.photos/1200/600?random=3',
    aiHint: 'computer vision',
    courseIds: ['c8', 'c9', 'c10'],
  },
   {
    id: 'p4',
    title: 'Generative AI & Large Language Models',
    description: 'Explore the cutting-edge of AI with generative models and LLMs. This program covers the theory behind models like VAEs, GANs, and LLMs, as well as practical skills like prompt engineering.',
    image: 'https://picsum.photos/1200/600?random=4',
    aiHint: 'generative ai',
    courseIds: ['c11', 'c12', 'c13'],
  },
];

const coursesData: Course[] = [
  { id: 'c1', programId: 'p1', title: 'Statistical Foundations for Machine Learning', description: 'Core statistical concepts that underpin machine learning algorithms.'},
  { id: 'c2', programId: 'p1', title: 'Supervised Learning: From Regression to Classification', description: 'A deep dive into supervised learning models and their applications.'},
  { id: 'c3', programId: 'p1', title: 'Unsupervised Learning & Dimensionality Reduction', description: 'Explore clustering, anomaly detection, and feature reduction.'},
  { id: 'c4', programId: 'p1', title: 'Introduction to Neural Networks & Deep Learning', description: 'Build your first neural networks from scratch.'},
  { id: 'c5', programId: 'p2', title: 'Text Preprocessing & Vectorization Techniques', description: 'Learn how to process and represent text for ML models.'},
  { id: 'c6', programId: 'p2', title: 'Understanding Transformers & the Attention Mechanism', description: 'The core architecture behind modern LLMs.'},
  { id: 'c7', programId: 'p2', title: 'Fine-tuning Language Models for Downstream Tasks', description: 'Adapt pre-trained models for specific applications like sentiment analysis.'},
  { id: 'c8', programId: 'p3', title: 'Fundamentals of Image Processing', description: 'Learn about pixels, filters, and transformations.'},
  { id: 'c9', programId: 'p3', title: 'Convolutional Neural Networks (CNNs) for Image Recognition', description: 'Build and train models for classifying images.'},
  { id: 'c10', programId: 'p3', title: 'Object Detection and Image Segmentation', description: 'Go beyond classification to identify and segment objects.'},
  { id: 'c11', programId: 'p4', title: 'Introduction to Generative Models: VAEs and GANs', description: 'Understand the principles behind generative AI.'},
  { id: 'c12', programId: 'p4', title: 'The Architecture of Large Language Models (LLMs)', description: 'A detailed look at what makes LLMs work.'},
  { id: 'c13', programId: 'p4', title: 'Prompt Engineering & In-Context Learning', description: 'Master the art of crafting effective prompts for LLMs.'},
];


export default function ProgramDetailPage({ params }: { params: { programId: string } }) {
  const program = programsData.find(p => p.id === params.programId);
  const programCourses = program ? coursesData.filter(c => program.courseIds?.includes(c.id)) : [];

  if (!program) {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background">
            <Header />
            <main className="flex-1">
                <div className="container flex min-h-[calc(100vh-12rem)] items-center justify-center py-16 text-center md:py-24">
                    <div>
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
                <div className="space-y-8 md:col-span-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Courses Included</CardTitle>
                            <CardDescription>This program includes the following courses.</CardDescription>
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
