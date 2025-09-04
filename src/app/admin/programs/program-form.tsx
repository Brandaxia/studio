
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { Program } from '@/lib/types';
import { useEffect } from 'react';

interface ProgramFormProps {
  program: Program | null;
  onSave: (program: Program) => void;
  onCancel: () => void;
}

const formSchema = z.object({
  title: z.string().min(3, { message: 'El título es requerido.' }),
  description: z.string().min(10, { message: 'La descripción es requerida.' }),
  image: z.string().url({ message: 'Debe ser una URL válida.' }),
  aiHint: z.string().optional(),
});

type ProgramFormValues = z.infer<typeof formSchema>;

export function ProgramForm({ program, onSave, onCancel }: ProgramFormProps) {
  const form = useForm<ProgramFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: program || {
      title: '',
      description: '',
      image: '',
      aiHint: '',
    },
  });
  
  useEffect(() => {
    form.reset(program || {
      title: '',
      description: '',
      image: '',
      aiHint: '',
    });
  }, [program, form]);


  const onSubmit = (values: ProgramFormValues) => {
    onSave({
        id: program?.id || Date.now().toString(),
        courseIds: program?.courseIds || [],
        ...values
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input placeholder="Título del programa" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Textarea placeholder="Descripción detallada" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL de la Imagen</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/image.jpg" {...field} />
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
                <Input placeholder="Ej: ancient library" {...field} />
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
