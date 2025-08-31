import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500" />
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
        <h1 className="font-headline text-4xl font-bold md:text-6xl">
          Eleva Tu Conocimiento
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl">
          Descubre una nueva dimensión de aprendizaje con nuestros programas Ainsophicos, diseñados para la ascensión intelectual y espiritual.
        </p>
        <Button size="lg" className="mt-8 bg-white text-blue-600 transition-all hover:bg-white/90" asChild>
          <a href="#programas">Explorar Programas</a>
        </Button>
      </div>
    </section>
  );
}
