import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Programs } from "@/components/programs";
import { AiSummary } from "@/components/ai-summary";
import { Instructors } from "@/components/instructors";
import { NotebookPreview } from "@/components/notebook-preview";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import type { Program, Instructor, Testimonial, FaqItem } from "@/lib/types";

const programsData: Program[] = [
  {
    id: '1',
    title: 'Fundamentos de la Sabiduría Antigua',
    description: 'Un viaje a través de textos y filosofías milenarias que han moldeado el pensamiento humano.',
    image: 'https://picsum.photos/600/400?random=1',
    aiHint: 'ancient library'
  },
  {
    id: '2',
    title: 'Alquimia Cuántica',
    description: 'Fusiona la física cuántica con principios alquímicos para una transformación personal profunda.',
    image: 'https://picsum.photos/600/400?random=2',
    aiHint: 'quantum physics'
  },
  {
    id: '3',
    title: 'Geometría Sagrada Aplicada',
    description: 'Descubre y aplica los patrones universales de la creación en tu vida diaria y proyectos creativos.',
    image: 'https://picsum.photos/600/400?random=3',
    aiHint: 'sacred geometry'
  },
];

const instructorsData: Instructor[] = [
  {
    id: '1',
    name: 'Elara Vex',
    title: 'Maestra de Cosmología Antigua',
    avatar: 'https://picsum.photos/100/100?random=4',
    aiHint: 'wise woman',
  },
  {
    id: '2',
    name: 'Orion Kael',
    title: 'Guía de Realidades Cuánticas',
    avatar: 'https://picsum.photos/100/100?random=5',
    aiHint: 'thoughtful man',
  },
  {
    id: '3',
    name: 'Lyra Solara',
    title: 'Arquitecta de Geometría Sagrada',
    avatar: 'https://picsum.photos/100/100?random=6',
    aiHint: 'creative artist',
  },
];

const testimonialsData: Testimonial[] = [
  {
    id: '1',
    quote: "Este curso abrió portales de percepción que no sabía que existían. Una experiencia verdaderamente transformadora.",
    name: 'Anaïs',
    program: 'Alquimia Cuántica',
    avatar: 'https://picsum.photos/100/100?random=7',
    aiHint: 'happy person'
  },
  {
    id: '2',
    quote: "La claridad y profundidad de las enseñanzas son incomparables. Ascenso Ainsophic es un faro en la oscuridad.",
    name: 'Leo',
    program: 'Fundamentos de la Sabiduría Antigua',
    avatar: 'https://picsum.photos/100/100?random=8',
    aiHint: 'smiling student'
  },
  {
    id: '3',
    quote: "Apliqué la geometría sagrada en mi arte y los resultados han sido asombrosos. Mi creatividad ha florecido.",
    name: 'Iris',
    program: 'Geometría Sagrada Aplicada',
    avatar: 'https://picsum.photos/100/100?random=9',
    aiHint: 'joyful woman'
  },
];

const faqsData: FaqItem[] = [
  {
    id: '1',
    question: '¿Qué es "Ainsophic"?',
    answer: 'Ainsophic se deriva de "Ein Sof", un término cabalístico que significa "el infinito" o "sin fin". Representa la naturaleza ilimitada del conocimiento y el potencial que buscamos desbloquear en nuestros estudiantes.',
  },
  {
    id: '2',
    question: '¿Necesito conocimientos previos para inscribirme?',
    answer: 'La mayoría de nuestros programas fundamentales están diseñados para ser accesibles a todos, independientemente de su experiencia previa. Algunos cursos avanzados pueden tener prerrequisitos, los cuales se especifican claramente en su descripción.',
  },
  {
    id: '3',
    question: '¿Los programas son en línea o presenciales?',
    answer: 'Actualmente, todos nuestros programas se ofrecen en un formato en línea flexible, permitiendo a estudiantes de todo el mundo unirse. Utilizamos una combinación de contenido grabado, sesiones en vivo y cuadernos interactivos.',
  },
  {
    id: '4',
    question: '¿Qué tipo de soporte recibo como estudiante?',
    answer: 'Ofrecemos soporte integral a través de foros de comunidad, sesiones de preguntas y respuestas con instructores y acceso a un mentor personal para guiarte en tu viaje de aprendizaje.',
  },
];


export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
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
