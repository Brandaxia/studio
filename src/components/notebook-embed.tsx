import { Card, CardContent } from "@/components/ui/card";

export function NotebookEmbed() {
  return (
    <section id="notebook" className="w-full bg-primary/5 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Aprendizaje Interactivo</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Experimenta directamente con los conceptos. Ejecuta código, visualiza datos y aprende haciendo con nuestros cuadernos interactivos.
          </p>
        </div>
        <Card className="mx-auto mt-12 max-w-5xl overflow-hidden shadow-lg">
          <CardContent className="p-2">
            <iframe
              src="https://colab.research.google.com/notebooks/intro.ipynb"
              className="h-[70vh] w-full rounded-md border"
              title="Google Colab Intro"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
