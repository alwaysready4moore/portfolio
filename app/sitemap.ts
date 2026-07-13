import type { MetadataRoute } from "next";
import { fieldNotes } from "@/data/fieldNotes";

const baseUrl = "https://alwaysready4moore.com";
const siteUpdated = new Date("2026-07-12T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: siteUpdated,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: siteUpdated,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/work/aegis`,
      lastModified: siteUpdated,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work/new-analyst-tool`,
      lastModified: siteUpdated,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/work/pirate-ship-knowledge-systems`,
      lastModified: siteUpdated,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/field-notes`,
      lastModified: siteUpdated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/lab`,
      lastModified: siteUpdated,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: siteUpdated,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/field-guide`,
      lastModified: siteUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pictogram-guide`,
      lastModified: siteUpdated,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: siteUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/colophon`,
      lastModified: siteUpdated,
      changeFrequency: "yearly",
      priority: 0.45,
    },
  ];

  const fieldNoteRoutes: MetadataRoute.Sitemap = fieldNotes.map((note) => ({
    url: `${baseUrl}/field-notes/${note.slug}`,
    lastModified: new Date(`${note.publishedAt}T00:00:00.000Z`),
    changeFrequency: "monthly",
    priority: 0.65,
    images: [`${baseUrl}${note.image}`],
  }));

  return [...staticRoutes, ...fieldNoteRoutes];
}
