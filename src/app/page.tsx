import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Programs } from "@/components/programs";
import { AiSummary } from "@/components/ai-summary";
import { Instructors } from "@/components/instructors";
import { NotebookEmbed } from "@/components/notebook-embed";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Programs />
        <AiSummary />
        <Instructors />
        <NotebookEmbed />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
