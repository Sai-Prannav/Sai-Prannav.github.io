import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const slot = z.object({ title: z.string(), need: z.string() });

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    context: z.string(), // e.g. "HackGT 13 · team of 3"
    date: z.string(),
    order: z.number().default(99),
    featured: z.boolean().default(false),
    stack: z.array(z.string()),
    repo: z.enum(['heartbridge', 'stocksnap']).optional(), // key in config links.repos
    status: z.string().optional(),
    slot: slot.optional(),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    lab: z.string(),
    pi: z.string(),
    role: z.string(),
    period: z.string(),
    order: z.number().default(99),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    papers: z
      .array(z.object({ title: z.string(), venue: z.string(), position: z.string(), status: z.string() }))
      .default([]),
    posters: z
      .array(
        z.object({
          title: z.string(),
          position: z.string(),
          when: z.string(),
          link: z.enum(['smarterSignals', 'uavSensors', 'pedestrian']), // key in config links.posters
        }),
      )
      .default([]),
    slot: slot.optional(),
  }),
});

export const collections = { projects, research };
