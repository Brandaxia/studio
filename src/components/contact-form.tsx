

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, ingresá una dirección de correo válida." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmissionError(false);
    
    // In a real app, this would be process.env.NEXT_PUBLIC_API_URL
    const apiUrl = '/api/contact'; 
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        // This will be caught by the catch block
        throw new Error("La respuesta de la red no fue correcta");
      }
      
      toast({
        title: "Mensaje Enviado",
        description: "Gracias por contactarnos. Te responderemos a la brevedad.",
      });
      form.reset();

    } catch (error) {
      console.error("Error en el envío del formulario:", error);
      setSubmissionError(true);
      toast({
        title: "Error de Envío",
        description: "No se pudo enviar tu mensaje. Por favor, intentá enviar un correo directamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Tu nombre completo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="tu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensaje</FormLabel>
                <FormControl>
                  <Textarea placeholder="Tu pregunta o mensaje..." className="min-h-[120px]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
          </Button>
        </form>
      </Form>
      
      <div className="mt-6 text-center text-sm text-muted-foreground">
        {submissionError ? (
            <p>
                O si preferís, envianos un correo directamente.
            </p>
        ) : (
            <p>Si preferís, también podés enviarnos un correo.</p>
        )}
        <a
          href="mailto:contacto@ainsophic.com"
          className="mt-1 inline-flex items-center text-primary underline-offset-4 hover:underline"
        >
          <Mail className="mr-2 h-4 w-4" />
          contacto@ainsophic.com
        </a>
      </div>
    </div>
  );
}
