
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { LearningPaths } from "@/components/learning-paths";
import { Programs } from "@/components/programs";
import { Courses } from "@/components/courses";
import { AiSummary } from "@/components/ai-summary";
import { AboutUs } from "@/components/about-us";
import { NotebookPreview } from "@/components/notebook-preview";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { CookieBanner } from "@/components/cookie-banner";
import { Footer } from "@/components/footer";
import { initialPrograms, initialLearningPaths, initialInstructors, initialTestimonials, initialFaqs, initialCourses } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <LearningPaths learningPaths={initialLearningPaths} programs={initialPrograms} />
        <Programs programs={initialPrograms} />
        <Courses courses={initialCourses} programs={initialPrograms} />
        <AiSummary />
        <AboutUs instructors={initialInstructors} faqs={initialFaqs} />
        <NotebookPreview />
        <Testimonials testimonials={initialTestimonials} programs={initialPrograms} />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
