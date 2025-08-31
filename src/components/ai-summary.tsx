"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Wand2 } from "lucide-react";
import { generateEducationalContentSummary } from "@/ai/flows/generate-educational-content-summary";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  content: z.string().min(50, { message: "El contenido debe tener al menos 50 caracteres." }),
});

export function AiSummary() {
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSummary("");
    try {
      const result = await generateEducationalContentSummary({ content: values.content });
      setSummary(result.summary);
    } catch (error) {
      console.error("Error generating summary:", error);
      toast({
        title: "Error al generar resumen",
        description: "Hubo un problema al contactar la IA. Por favor, inténtalo de nuevo más tarde.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="ai-summary" className="w-full py-16 md:py-24">
      <div className="container grid gap-12 md:grid-cols-2 md:items-start">
        <div className="flex flex-col">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Resumen con IA</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Pega un texto educativo y deja que nuestra IA Ainsophic extraiga la esencia del conocimiento para ti.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contenido a resumir</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Pega aquí tu texto, artículo o notas de clase..."
                        className="min-h-[200px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                <Wand2 className="mr-2 h-4 w-4" />
                {isLoading ? "Generando..." : "Generar Resumen"}
              </Button>
            </form>
          </Form>
        </div>
        <div className="md:pt-16">
          <Card className="min-h-[300px]">
            <CardHeader>
              <CardTitle>Tu Resumen</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading && (
                <div className="space-y-3">
                  <Skeleton className="h-4 w-[80%]" />
                  <Skeleton className="h-4 w-[90%]" />
                  <Skeleton className="h-4 w-[75%]" />
                  <Skeleton className="h-4 w-[85%]" />
                </div>
              )}
              {summary && <p className="text-muted-foreground">{summary}</p>}
              {!isLoading && !summary && (
                <p className="text-muted-foreground">El resumen generado por la IA aparecerá aquí.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
