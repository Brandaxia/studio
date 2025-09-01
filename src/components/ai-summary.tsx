
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Wand2 } from "lucide-react";
import { generateEducationalContentSummary } from "@/ai/flows/generate-educational-content-summary";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  content: z.string().min(50, { message: "Content must be at least 50 characters." }),
});

export function AiSummary() {
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSummary("");
    try {
      const result = await generateEducationalContentSummary({ content: values.content });
      setSummary(result.summary);
    } catch (error) {
      console.error("Error generating summary:", error);
      toast({
        title: "Error Generating Summary",
        description: "There was a problem contacting the AI. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="ai-summary" className="w-full py-16 md:py-24">
      <div className="container grid gap-8 px-4 md:grid-cols-2 md:items-start md:gap-12">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">AI-Powered Summarizer</h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Paste any technical text and let our AI extract the key insights for you.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content to summarize</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Paste your text, article, or class notes here..."
                        className="min-h-[200px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
                <Wand2 className="mr-2 h-4 w-4" />
                {isLoading ? "Generating..." : "Generate Summary"}
              </Button>
            </form>
          </Form>
        </div>
        <div className="md:pt-16">
          <Card className="min-h-[300px]">
            <CardHeader>
              <CardTitle>Your Summary</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading && (
                <div className="space-y-3">
                  <Skeleton className="h-4 w-[80%]" />
                  <Skeleton className="h-4 w-[90%]" />
                  <Skeleton className="h-4 w-[75%]" />
                  <Skeleton className="h-4 w-[85%]" />
                </div>
              )}
              {summary && <p className="text-muted-foreground">{summary}</p>}
              {!isLoading && !summary && (
                <p className="text-muted-foreground">The AI-generated summary will appear here.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
