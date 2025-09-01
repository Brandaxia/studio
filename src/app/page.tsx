import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { LearningPaths } from "@/components/learning-paths";
import { Programs } from "@/components/programs";
import { AiSummary } from "@/components/ai-summary";
import { Instructors } from "@/components/instructors";
import { NotebookPreview } from "@/components/notebook-preview";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import type { Program, Instructor, Testimonial, FaqItem, LearningPath } from "@/lib/types";

const programsData: Program[] = [
  {
    id: '1',
    title: 'Machine Learning Foundations',
    description: 'Explore core ML concepts, from supervised learning to neural networks.',
    image: 'https://picsum.photos/600/400?random=1',
    aiHint: 'machine learning'
  },
  {
    id: '2',
    title: 'Natural Language Processing',
    description: 'Build models that understand, process, and generate human language.',
    image: 'https://picsum.photos/600/400?random=2',
    aiHint: 'natural language processing'
  },
  {
    id: '3',
    title: 'Computer Vision',
    description: 'Teach computers to see and interpret the visual world with deep learning.',
    image: 'https://picsum.photos/600/400?random=3',
    aiHint: 'computer vision'
  },
];

const learningPathsData: LearningPath[] = [
  { id: 'lp1', title: 'AI Engineer Path', description: 'A comprehensive path to becoming an AI Engineer, covering ML, NLP, and deployment.', programIds: ['1', '2'] },
  { id: 'lp2', title: 'Data Scientist with Python', description: 'Master the skills to extract insights from data, combining ML and data analysis.', programIds: ['1'] },
];

const instructorsData: Instructor[] = [
  {
    id: '1',
    name: 'Dr. Evelyn Reed',
    title: 'Principal AI Scientist',
    avatar: 'https://picsum.photos/100/100?random=4',
    aiHint: 'female scientist',
  },
  {
    id: '2',
    name: 'Dr. Kenji Tanaka',
    title: 'Head of NLP Research',
    avatar: 'https://picsum.photos/100/100?random=5',
    aiHint: 'male researcher',
  },
  {
    id: '3',
    name: 'Dr. Lena Petrova',
    title: 'Computer Vision Architect',
    avatar: 'https://picsum.photos/100/100?random=6',
    aiHint: 'creative technologist',
  },
];

const testimonialsData: Testimonial[] = [
  {
    id: '1',
    quote: "The NLP course opened my eyes to the power of language models. Truly transformational.",
    name: 'Alex C.',
    program: 'Natural Language Processing',
    avatar: 'https://picsum.photos/100/100?random=7',
    aiHint: 'happy person'
  },
  {
    id: '2',
    quote: "The foundational knowledge from the ML course is invaluable. AI Academy is a beacon for aspiring engineers.",
    name: 'Brenda K.',
    program: 'Machine Learning Foundations',
    avatar: 'https://picsum.photos/100/100?random=8',
    aiHint: 'smiling student'
  },
  {
    id: '3',
    quote: "I applied the computer vision concepts to my startup and the results are amazing. My creativity has flourished.",
    name: 'Carlos M.',
    program: 'Computer Vision',
    avatar: 'https://picsum.photos/100/100?random=9',
    aiHint: 'joyful man'
  },
];

const faqsData: FaqItem[] = [
  {
    id: '1',
    question: 'What is "AI Academy"?',
    answer: 'AI Academy is a learning platform dedicated to providing cutting-edge education in Artificial Intelligence, from foundational concepts to advanced specializations.',
  },
  {
    id: '2',
    question: 'Do I need a background in programming to enroll?',
    answer: 'While our foundational courses are designed to be accessible, a basic understanding of Python is recommended to get the most out of the material. We offer prep courses for beginners.',
  },
  {
    id: '3',
    question: 'Are the programs online or in-person?',
    answer: 'Currently, all our programs are offered in a flexible online format, allowing students from around the world to join. We use a combination of recorded content, live sessions, and interactive notebooks.',
  },
  {
    id: '4',
    question: 'What kind of support do I get as a student?',
    answer: 'We offer comprehensive support through community forums, Q&A sessions with instructors, and access to a personal mentor to guide you on your learning journey.',
  },
];


export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <LearningPaths learningPaths={learningPathsData} programs={programsData} />
        <Programs programs={programsData} />
        <AiSummary />
        <Instructors instructors={instructorsData} />
        <NotebookPreview />
        <Testimonials testimonials={testimonialsData} />
        <Faq faqs={faqsData} />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
