'use server';

/**
 * @fileOverview A flow for generating summaries of educational content using AI.
 *
 * - generateEducationalContentSummary - A function that handles the generation of educational content summaries.
 * - GenerateEducationalContentSummaryInput - The input type for the generateEducationalContentSummary function.
 * - GenerateEducationalContentSummaryOutput - The return type for the generateEducationalContentSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateEducationalContentSummaryInputSchema = z.object({
  content: z.string().describe('The educational content to summarize.'),
});
export type GenerateEducationalContentSummaryInput = z.infer<typeof GenerateEducationalContentSummaryInputSchema>;

const GenerateEducationalContentSummaryOutputSchema = z.object({
  summary: z.string().describe('The generated summary of the educational content.'),
});
export type GenerateEducationalContentSummaryOutput = z.infer<typeof GenerateEducationalContentSummaryOutputSchema>;

export async function generateEducationalContentSummary(input: GenerateEducationalContentSummaryInput): Promise<GenerateEducationalContentSummaryOutput> {
  return generateEducationalContentSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateEducationalContentSummaryPrompt',
  input: {schema: GenerateEducationalContentSummaryInputSchema},
  output: {schema: GenerateEducationalContentSummaryOutputSchema},
  prompt: `You are an AI assistant designed to summarize educational content.  Provide a concise summary of the following content, highlighting the key points and insights:

  Content:
  {{content}}
  `,
});

const generateEducationalContentSummaryFlow = ai.defineFlow(
  {
    name: 'generateEducationalContentSummaryFlow',
    inputSchema: GenerateEducationalContentSummaryInputSchema,
    outputSchema: GenerateEducationalContentSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
