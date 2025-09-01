
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import type { Integration } from '@/lib/types';
import { useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

interface IntegrationFormProps {
  integration: Integration | null;
  onSave: (integration: Integration) => void;
  onCancel: () => void;
}

const formSchema = z.object({
  apiKey: z.string().min(1, { message: 'API Key cannot be empty.' }),
  enabled: z.boolean(),
});

type IntegrationFormValues = z.infer<typeof formSchema>;

export function IntegrationForm({ integration, onSave, onCancel }: IntegrationFormProps) {
  const form = useForm<IntegrationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      apiKey: '',
      enabled: false,
    },
  });
  
  useEffect(() => {
    if (integration) {
        form.reset({
            apiKey: integration.apiKey,
            enabled: integration.enabled,
        });
    }
  }, [integration, form]);


  const onSubmit = (values: IntegrationFormValues) => {
    if (integration) {
        onSave({
            ...integration,
            ...values,
        });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="apiKey"
          render={({ field }) => (
            <FormItem>
              <FormLabel>API Key</FormLabel>
              <FormControl>
                <Input placeholder="Enter the new API key" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="enabled"
          render={({ field }) => (
             <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Enable Integration</FormLabel>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="ghost" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </Form>
  );
}
