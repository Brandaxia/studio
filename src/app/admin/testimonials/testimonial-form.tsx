
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { Testimonial } from '@/lib/types';
import { useEffect } from 'react';

interface TestimonialFormProps {
  testimonial: Testimonial | null;
  onSave: (testimonial: Testimonial) => void;
  onCancel: () => void;
}

const formSchema = z.object({
  quote: z.string().min(10, { message: 'La cita es requerida.' }),
  name: z.string().min(3, { message: 'El nombre es requerido.' }),
  program: z.string().min(3, { message: 'El programa es requerido.' }),
  avatar: z.string().url({ message: 'Debe ser una URL válida.' }),
  aiHint: z.string().optional(),
});

type TestimonialFormValues = z.infer<typeof formSchema>;

export function TestimonialForm({ testimonial, onSave, onCancel }: TestimonialFormProps) {
  const form = useForm<TestimonialFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quote: '',
      name: '',
      program: '',
      avatar: '',
      aiHint: '',
    },
  });
  
  useEffect(() => {
    if (testimonial) {
        form.reset(testimonial);
    } else {
        form.reset({
            quote: '',
            name: '',
            program: '',
            avatar: '',
            aiHint: '',
        });
    }
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
                <Textarea placeholder="El testimonio del estudiante..." {...field} />
              </FormControl>
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
                <Input placeholder="Nombre del estudiante" {...field} />
              </FormControl>
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
              <FormControl>
                <Input placeholder="Programa que cursó" {...field} />
              </FormControl>
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
