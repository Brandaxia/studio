
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
import { CookieBanner } from "@/components/cookie-banner";
import type { Program, Instructor, Testimonial, FaqItem, LearningPath } from "@/lib/types";
import { Footer } from "@/components/footer";

const programsData: Program[] = [
  {
    id: 'p1',
    title: 'Machine Learning Engineering',
    description: 'Build a solid foundation in machine learning, from algorithms to deployment.',
    image: 'https://picsum.photos/600/400?random=1',
    aiHint: 'machine learning'
  },
  {
    id: 'p2',
    title: 'NLP: From Text to Transformers',
    description: 'Master the art of building models that understand and generate human language.',
    image: 'https://picsum.photos/600/400?random=2',
    aiHint: 'natural language processing'
  },
  {
    id: 'p3',
    title: 'Computer Vision & Image Analysis',
    description: 'Teach computers to "see" and interpret the visual world.',
    image: 'https://picsum.photos/600/400?random=3',
    aiHint: 'computer vision'
  },
   {
    id: 'p4',
    title: 'Generative AI & Large Language Models',
    description: 'Explore the cutting-edge of AI with generative models and LLMs.',
    image: 'https://picsum.photos/600/400?random=4',
    aiHint: 'generative ai'
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
    program: 'NLP: From Text to Transformers',
    avatar: 'https://picsum.photos/100/100?random=7',
    aiHint: 'happy person'
  },
  {
    id: '2',
    quote: "The foundational knowledge from the ML course is invaluable. Ainsophic Academy is a beacon for aspiring engineers.",
    name: 'Brenda K.',
    program: 'Machine Learning Engineering',
    avatar: 'https://picsum.photos/100/100?random=8',
    aiHint: 'smiling student'
  },
  {
    id: '3',
    quote: "I applied the computer vision concepts to my startup and the results are amazing. My creativity has flourished.",
    name: 'Carlos M.',
    program: 'Computer Vision & Image Analysis',
    avatar: 'https://picsum.photos/100/100?random=9',
    aiHint: 'joyful man'
  },
];

const faqsData: FaqItem[] = [
  {
    id: '1',
    question: 'What is "Ainsophic Academy"?',
    answer: 'Ainsophic Academy is a learning platform dedicated to providing cutting-edge education in Artificial Intelligence, from foundational concepts to advanced specializations.',
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
