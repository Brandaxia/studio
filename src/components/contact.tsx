import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section id="contacto" className="w-full bg-primary/5 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Conecta con Nosotros</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ¿Tienes preguntas o estás listo para comenzar tu viaje? Envíanos un mensaje.
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
