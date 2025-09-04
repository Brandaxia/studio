
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import type { Instructor } from '@/lib/types';
import { useEffect } from 'react';

interface InstructorFormProps {
  instructor: Instructor | null;
  onSave: (instructor: Instructor) => void;
  onCancel: () => void;
}

const formSchema = z.object({
  name: z.string().min(3, { message: 'El nombre es requerido.' }),
  title: z.string().min(3, { message: 'El título es requerido.' }),
  avatar: z.string().url({ message: 'Debe ser una URL válida.' }),
  aiHint: z.string().optional(),
});

type InstructorFormValues = z.infer<typeof formSchema>;

export function InstructorForm({ instructor, onSave, onCancel }: InstructorFormProps) {
  const form = useForm<InstructorFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: instructor || {
      name: '',
      title: '',
      avatar: '',
      aiHint: '',
    },
  });
  
  useEffect(() => {
    form.reset(instructor || {
      name: '',
      title: '',
      avatar: '',
      aiHint: '',
    });
  }, [instructor, form]);


  const onSubmit = (values: InstructorFormValues) => {
    onSave({
        id: instructor?.id || Date.now().toString(),
        ...values
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Nombre del instructor" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input placeholder="Título o especialidad, ej: Principal AI Scientist" {...field} />
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
                <Input placeholder="Ej: wise woman" {...field} />
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
