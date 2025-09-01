
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
  title: z.string().min(3, { message: 'Title is required.' }),
  description: z.string().min(10, { message: 'Description is required.' }),
  programId: z.string({ required_error: 'You must select a program.' }),
});

type CourseFormValues = z.infer<typeof formSchema>;

export function CourseForm({ course, programs, onSave, onCancel }: CourseFormProps) {
  const form = useForm<CourseFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      programId: '',
    },
  });
  
  useEffect(() => {
    if (course) {
        form.reset(course);
    } else {
        form.reset({
            title: '',
            description: '',
            programId: '',
        });
    }
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
              <FormLabel>Program</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a program for this course" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {programs.map(program => (
                    <SelectItem key={program.id} value={program.id}>{program.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                The course will belong to this program.
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
              <FormLabel>Course Title</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Introduction to Transformers" {...field} />
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
              <FormLabel>Course Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Briefly describe the course content..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="ghost" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">Save Course</Button>
        </div>
      </form>
    </Form>
  );
}
