
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { LearningPath, Program } from '@/lib/types';
import { useEffect } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

interface LearningPathFormProps {
  learningPath: LearningPath | null;
  programs: Program[];
  onSave: (learningPath: LearningPath) => void;
  onCancel: () => void;
}

const formSchema = z.object({
  title: z.string().min(3, { message: 'El título es requerido.' }),
  description: z.string().min(10, { message: 'La descripción es requerida.' }),
  programIds: z.array(z.string()).refine(value => value.some(item => item), {
    message: 'Tienes que seleccionar al menos un programa.',
  }),
});

type LearningPathFormValues = z.infer<typeof formSchema>;

export function LearningPathForm({ learningPath, programs, onSave, onCancel }: LearningPathFormProps) {
  const form = useForm<LearningPathFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      programIds: [],
    },
  });
  
  useEffect(() => {
    if (learningPath) {
        form.reset(learningPath);
    } else {
        form.reset({
            title: '',
            description: '',
            programIds: [],
        });
    }
  }, [learningPath, form]);


  const onSubmit = (values: LearningPathFormValues) => {
    onSave({
        id: learningPath?.id || Date.now().toString(),
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
              <FormLabel>Título de la Ruta</FormLabel>
              <FormControl>
                <Input placeholder="Ej: Camino del Conocimiento Esotérico" {...field} />
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
              <FormLabel>Descripción de la Ruta</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe el objetivo de esta ruta de aprendizaje..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="programIds"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Programas Incluidos</FormLabel>
                <FormDescription>
                  Selecciona los programas que formarán parte de esta ruta de aprendizaje.
                </FormDescription>
              </div>
              {programs.map((program) => (
                <FormField
                  key={program.id}
                  control={form.control}
                  name="programIds"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={program.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(program.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, program.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== program.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {program.title}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="ghost" onClick={onCancel}>
            Cancelar
          </Button>
          <Button type="submit">Guardar Ruta</Button>
        </div>
      </form>
    </Form>
  );
}
