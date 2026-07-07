import type { MetadataRoute } from "next";
import { fieldNotes } from "@/data/fieldNotes";

const baseUrl = "https://alwaysready4moore.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/work`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/work/aegis`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work/new-analyst-tool`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/work/pirate-ship-knowledge-systems`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/field-notes`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/lab`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/colophon`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.45,
    },
  ];

  const fieldNoteRoutes: MetadataRoute.Sitemap = fieldNotes.map((note) => ({
    url: `${baseUrl}/field-notes/${note.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticRoutes, ...fieldNoteRoutes];
}