
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import type { Student } from '@/lib/types';
import { useEffect } from 'react';

interface StudentFormProps {
  student: Student | null;
  onSave: (student: Student) => void;
  onCancel: () => void;
}

const formSchema = z.object({
  name: z.string().min(3, { message: 'El nombre es requerido.' }),
  email: z.string().email({ message: 'El correo electrónico no es válido.' }),
  avatar: z.string().url({ message: 'Debe ser una URL válida.' }),
  aiHint: z.string().optional(),
});

type StudentFormValues = z.infer<typeof formSchema>;

export function StudentForm({ student, onSave, onCancel }: StudentFormProps) {
  const form = useForm<StudentFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: student || {
      name: '',
      email: '',
      avatar: '',
      aiHint: '',
    },
  });
  
  useEffect(() => {
    form.reset(student || {
      name: '',
      email: '',
      avatar: '',
      aiHint: '',
    });
  }, [student, form]);


  const onSubmit = (values: StudentFormValues) => {
    onSave({
        id: student?.id || Date.now().toString(),
        enrolledDate: student?.enrolledDate || new Date().toISOString().split('T')[0],
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
                <Input placeholder="Nombre del alumno" {...field} />
              </FormControl>
              <FormDescription>
                El nombre completo del alumno.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo Electrónico</FormLabel>
              <FormControl>
                <Input type="email" placeholder="alumno@email.com" {...field} />
              </FormControl>
              <FormDescription>
                La dirección de correo del alumno.
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
                <Input placeholder="Ej: male student" {...field} />
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
