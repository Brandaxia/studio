import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="Fondo celestial inspirador"
        fill
        className="object-cover"
        data-ai-hint="celestial learning"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
        <h1 className="font-headline text-4xl font-bold md:text-6xl">
          Eleva Tu Conocimiento
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl">
          Descubre una nueva dimensión de aprendizaje con nuestros programas Ainsophicos, diseñados para la ascensión intelectual y espiritual.
        </p>
        <Button size="lg" className="mt-8 bg-accent text-accent-foreground transition-all hover:bg-accent/90" asChild>
          <a href="#programas">Explorar Programas</a>
        </Button>
      </div>
    </section>
  );
}
