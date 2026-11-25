import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// A piece of media. If the file isn't in /public yet, the page shows a "media coming" frame.
const media = z.object({
  kind: z.enum(['image', 'video']),
  src: z.string(), // e.g. /media/stocksnap/stocksnap-demo.mp4 (the video) or the image path
  webm: z.string().optional(), // optional second source for video
  poster: z.string().optional(), // still frame for video (shown first, and for reduced motion)
  alt: z.string(),
  caption: z.string().optional(),
  fit: z.enum(['cover', 'contain']).optional(),
  ratio: z.string().optional(),
  pos: z.string().optional(), // object-position for cover crops
});

// A verified public link that backs a project up. Leave empty until a real URL exists.
const proofLink = z.object({ label: z.string(), href: z.string().url() });

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    context: z.string(), // e.g. "DynaGence Lab, KSU"
    date: z.string(),
    order: z.number().default(99),
    featured: z.boolean().default(false),
    kind: z.enum(['hardware', 'research', 'software']),
    disciplines: z.array(z.enum(['Hardware', 'Research', 'Software'])),
    role: z.string(), // one phrase for the card
    status: z.string(),
    statusWaiting: z.boolean().default(false),
    stack: z.array(z.string()), // hardware and process first
    repo: z.enum(['heartbridge', 'stocksnap']).optional(), // key in config links.repos
    posters: z.array(z.enum(['smarterSignals', 'uavSensors', 'pedestrian'])).default([]),
    // Case-study blocks
    did: z.array(z.string()).default([]),
    team: z.array(z.string()).default([]),
    specs: z.array(z.object({ k: z.string(), v: z.string() })).default([]),
    credits: z.string().optional(),
    // Media
    card: media.optional(), // card thumbnail (4:3)
    cardSlot: z.string().optional(), // file name to show on the "media coming" frame
    figures: z.array(media).default([]),
    figureSlots: z.array(z.string()).default([]), // file names for empty figure frames
    withheld: z.boolean().default(false), // AMIR: images withheld until publication
    schematic: z.boolean().default(false), // use the rig schematic as the card and case-study figure
    widgets: z.array(z.enum(['bistable', 'triage', 'stocksnap'])).default([]), // interactive sections on the case study
    proof: z.array(proofLink).default([]), // extra proof chips; poster links come from `posters`
    badge: z.object({ n: z.number(), label: z.string() }).optional(), // count-up chip on the card
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
    caseStudy: z.string().optional(), // slug in the projects collection
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
  }),
});

export const collections = { projects, research };
