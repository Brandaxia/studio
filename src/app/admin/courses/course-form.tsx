
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { Course, Program } from '@/lib/types';
import { useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CourseFormProps {
  course: Course | null;
  programs: Program[];
  onSave: (course: Course) => void;
  onCancel: () => void;
}

const formSchema = z.object({
  title: z.string().min(3, { message: 'El título es requerido.' }),
  description: z.string().min(10, { message: 'La descripción es requerida.' }),
  programId: z.string({ required_error: 'Tenés que seleccionar un programa.' }),
});

type CourseFormValues = z.infer<typeof formSchema>;

export function CourseForm({ course, programs, onSave, onCancel }: CourseFormProps) {
  const form = useForm<CourseFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: course || {
      title: '',
      description: '',
      programId: '',
    },
  });
  
  useEffect(() => {
    form.reset(course || {
      title: '',
      description: '',
      programId: '',
    });
  }, [course, form]);


  const onSubmit = (values: CourseFormValues) => {
    onSave({
        id: course?.id || Date.now().toString(),
        ...values
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="programId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Programa</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccioná un programa para este curso" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {programs.map(program => (
                    <SelectItem key={program.id} value={program.id}>{program.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                El curso pertenecerá a este programa.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título del Curso</FormLabel>
              <FormControl>
                <Input placeholder="Ej: Introducción a Transformers" {...field} />
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
              <FormLabel>Descripción del Curso</FormLabel>
              <FormControl>
                <Textarea placeholder="Describí brevemente el contenido del curso..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="ghost" onClick={onCancel}>
            Cancelar
          </Button>
          <Button type="submit">Guardar Curso</Button>
        </div>
      </form>
    </Form>
  );
}
