import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section id="contacto" className="w-full py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Conecta con Nosotros</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ¿Tienes preguntas o estás listo para comenzar tu viaje? Envíanos un mensaje.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
