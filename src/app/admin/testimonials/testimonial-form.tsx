
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { Testimonial, Program } from '@/lib/types';
import { useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface TestimonialFormProps {
  testimonial: Testimonial | null;
  programs: Program[];
  onSave: (testimonial: Testimonial) => void;
  onCancel: () => void;
}

const formSchema = z.object({
  quote: z.string().min(10, { message: 'La cita es requerida.' }),
  name: z.string().min(3, { message: 'El nombre es requerido.' }),
  program: z.string().min(1, { message: 'El programa es requerido.' }),
  avatar: z.string().url({ message: 'Debe ser una URL válida.' }),
  aiHint: z.string().optional(),
});

type TestimonialFormValues = z.infer<typeof formSchema>;

export function TestimonialForm({ testimonial, programs, onSave, onCancel }: TestimonialFormProps) {
  const form = useForm<TestimonialFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: testimonial || {
      quote: '',
      name: '',
      program: '',
      avatar: '',
      aiHint: '',
    },
  });
  
  useEffect(() => {
    form.reset(testimonial || {
        quote: '',
        name: '',
        program: '',
        avatar: '',
        aiHint: '',
    });
  }, [testimonial, form]);


  const onSubmit = (values: TestimonialFormValues) => {
    onSave({
        id: testimonial?.id || Date.now().toString(),
        ...values
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="quote"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cita</FormLabel>
              <FormControl>
                <Textarea placeholder="El testimonio del alumno..." {...field} />
              </FormControl>
              <FormDescription>
                La cita textual del testimonio.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre del autor</FormLabel>
              <FormControl>
                <Input placeholder="Nombre del alumno" {...field} />
              </FormControl>
              <FormDescription>
                El nombre de la persona que da el testimonio.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="program"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Programa</FormLabel>
               <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccioná el programa cursado" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {programs.map(program => (
                    <SelectItem key={program.id} value={program.id}>{program.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                El programa al que se asocia el testimonio.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="avatar"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL del Avatar</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/avatar.jpg" {...field} />
              </FormControl>
              <FormDescription>
                 Un enlace a una imagen de perfil (cuadrada).
              </FormDescription>
               <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="aiHint"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pista para la IA (Imagen)</FormLabel>
              <FormControl>
                <Input placeholder="Ej: happy person" {...field} />
              </FormControl>
              <FormDescription>
                Palabras clave para una posible generación de imagen por IA.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="ghost" onClick={onCancel}>
            Cancelar
          </Button>
          <Button type="submit">Guardar</Button>
        </div>
      </form>
    </Form>
  );
}
