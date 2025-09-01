
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const colabUrl = "https://colab.research.google.com/notebooks/intro.ipynb";

export function NotebookPreview() {
  return (
    <section id="notebook" className="w-full bg-muted py-16 md:py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Interactive Lab</h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Experiment directly with the concepts. Open our welcome notebook, run code, and learn by doing. No installation required.
          </p>
        </div>
        <Card className="mx-auto mt-12 max-w-3xl overflow-hidden shadow-lg transition-transform hover:scale-105">
          <CardContent className="p-4 md:p-6">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
              <Image 
                src="https://picsum.photos/800/450?random=10"
                alt="Colab Notebook Preview"
                fill
                className="object-cover"
                data-ai-hint="code editor"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-4 text-center text-white">
                <h3 className="text-xl font-bold md:text-2xl">Introduction Notebook</h3>
                <p className="max-w-md text-sm md:text-base">
                  An interactive tour of the fundamental concepts you'll see in our programs.
                </p>
                <Button size="lg" asChild className="bg-white text-blue-600 transition-all hover:bg-white/90">
                  <a href={colabUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Open in Google Colab
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
