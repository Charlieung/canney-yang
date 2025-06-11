import { z, defineCollection } from 'astro:content';

const testimonialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string(),
  }),
});

const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.number(),
    title: z.string(),
    subtitle: z.string(),
    image: z.string(), // Optional since not all services may have an image
  }),
});

export const collections = {
  'testimonials': testimonialsCollection,
  'services': servicesCollection,
};