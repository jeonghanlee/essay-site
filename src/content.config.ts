import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const essays = defineCollection({
  loader: glob({
    base: "./src/content/essays",
    pattern: "**/*.{md,mdx}",
    generateId: ({ data, entry }) => {
      const language = typeof data.language === "string" ? data.language : "unknown";
      const slug = typeof data.slug === "string" ? data.slug : entry.replace(/\.(md|mdx)$/, "");
      return `${language}-${slug}`;
    },
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    language: z.enum(["ko", "en"]),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    canonicalId: z.string(),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    tags: z.array(z.string()).default([]),
    author: z.string().optional(),
    sortOrder: z.number().default(0),
    related: z
      .array(
        z.object({
          canonicalId: z.string(),
          label: z.string(),
          note: z.string().optional(),
        }),
      )
      .default([]),
    draft: z.boolean().default(false),
    feature: z.boolean().default(false),
    heroImage: z.string().optional(),
    social: z
      .object({
        status: z.enum(["none", "drafted", "posted"]).default("none"),
      })
      .default({ status: "none" }),
  }),
});

export const collections = { essays };
