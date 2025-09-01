
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section id="contacto" className="w-full bg-muted py-16 md:py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Connect with Us</h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Have questions or are you ready to start your journey? Send us a message.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-xl">
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6 md:p-8">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
