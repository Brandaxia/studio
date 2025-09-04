
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { Notebook } from '@/lib/types';
import { useEffect } from 'react';

interface NotebookFormProps {
  notebook: Notebook | null;
  onSave: (notebook: Notebook) => void;
  onCancel: () => void;
}

const formSchema = z.object({
  title: z.string().min(3, { message: 'El título es requerido.' }),
  description: z.string().min(10, { message: 'La descripción es requerida.' }),
  url: z.string().url({ message: 'Debe ser una URL de Colab válida.' }),
});

type NotebookFormValues = z.infer<typeof formSchema>;

export function NotebookForm({ notebook, onSave, onCancel }: NotebookFormProps) {
  const form = useForm<NotebookFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: notebook || {
      title: '',
      description: '',
      url: '',
    },
  });
  
  useEffect(() => {
    form.reset(notebook || {
        title: '',
        description: '',
        url: '',
    });
  }, [notebook, form]);


  const onSubmit = (values: NotebookFormValues) => {
    onSave({
        id: notebook?.id || Date.now().toString(),
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
              <FormLabel>Título del Notebook</FormLabel>
              <FormControl>
                <Input placeholder="Ej: Introducción a Tensores" {...field} />
              </FormControl>
              <FormDescription>
                El nombre del notebook.
              </FormDescription>
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
                <Textarea placeholder="Describí el contenido y los objetivos del notebook..." {...field} />
              </FormControl>
              <FormDescription>
                Un resumen del contenido del notebook.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL de Google Colab</FormLabel>
              <FormControl>
                <Input placeholder="https://colab.research.google.com/..." {...field} />
              </FormControl>
               <FormDescription>
                El enlace directo al notebook en Google Colab.
              </FormDescription>
               <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="ghost" onClick={onCancel}>
            Cancelar
          </Button>
          <Button type="submit">Guardar Notebook</Button>
        </div>
      </form>
    </Form>
  );
}
