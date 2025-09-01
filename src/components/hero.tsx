import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-black" />
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
        <h1 className="font-headline text-4xl font-bold md:text-6xl">
          Master the Future of AI
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
          Explore the frontiers of Artificial Intelligence with our expert-led programs, designed to build the next generation of AI leaders.
        </p>
        <Button size="lg" className="mt-8 bg-primary-foreground text-background transition-all hover:bg-primary-foreground/90" asChild>
          <a href="#programas">Explore Programs</a>
        </Button>
      </div>
    </section>
  );
}
