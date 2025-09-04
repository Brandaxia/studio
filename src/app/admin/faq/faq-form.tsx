
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { FaqItem } from '@/lib/types';
import { useEffect } from 'react';

interface FaqFormProps {
  faq: FaqItem | null;
  onSave: (faq: FaqItem) => void;
  onCancel: () => void;
}

const formSchema = z.object({
  question: z.string().min(10, { message: 'La pregunta es requerida.' }),
  answer: z.string().min(10, { message: 'La respuesta es requerida.' }),
});

type FaqFormValues = z.infer<typeof formSchema>;

export function FaqForm({ faq, onSave, onCancel }: FaqFormProps) {
  const form = useForm<FaqFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: faq || {
      question: '',
      answer: '',
    },
  });
  
  useEffect(() => {
    form.reset(faq || {
        question: '',
        answer: '',
    });
  }, [faq, form]);


  const onSubmit = (values: FaqFormValues) => {
    onSave({
        id: faq?.id || Date.now().toString(),
        ...values
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pregunta</FormLabel>
              <FormControl>
                <Input placeholder="¿Cuál es la pregunta?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Respuesta</FormLabel>
              <FormControl>
                <Textarea placeholder="La respuesta a la pregunta..." {...field} />
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
