
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
import { Footer } from "@/components/footer";
import { initialPrograms, initialLearningPaths, initialInstructors, initialTestimonials, initialFaqs } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <LearningPaths learningPaths={initialLearningPaths} programs={initialPrograms} />
        <Programs programs={initialPrograms} />
        <AiSummary />
        <Instructors instructors={initialInstructors} />
        <NotebookPreview />
        <Testimonials testimonials={initialTestimonials} />
        <Faq faqs={initialFaqs} />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
