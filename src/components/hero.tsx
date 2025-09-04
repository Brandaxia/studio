
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[450px] w-full md:min-h-[500px]">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-black" />
      <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-primary-foreground">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Dominá el Futuro de la IA
        </h1>
        <p className="mt-4 max-w-2xl text-base text-primary-foreground/80 md:text-xl">
          Explorá las fronteras de la Inteligencia Artificial con nuestros programas dirigidos por expertos, diseñados para formar a la próxima generación de líderes en IA.
        </p>
        <Button size="lg" className="mt-8 transition-all" asChild>
          <Link href="#programas">Explorar Programas</Link>
        </Button>
      </div>
    </section>
  );
}
