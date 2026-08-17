import type { MetadataRoute } from "next";
import { fieldNotes } from "@/data/fieldNotes";

const baseUrl = "https://www.alwaysready4moore.com";
const siteUpdated = new Date("2026-08-17T23:15:00.000Z");

type StaticRoute = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  images?: string[];
};

const staticRoutes: StaticRoute[] = [
  { path: "/", priority: 1, changeFrequency: "monthly", images: ["/brand/the-mark-clarity-icon-1024.png"] },
  { path: "/work", priority: 0.95, changeFrequency: "monthly" },
  { path: "/technical-writing", priority: 0.95, changeFrequency: "monthly" },
  { path: "/work/aegis", priority: 0.92, changeFrequency: "monthly", images: ["/screenshots/aegis/aegis-02-sample-results.png"] },
  { path: "/work/knowledge-systems", priority: 0.9, changeFrequency: "monthly", images: ["/logos/knowledge-systems-logo.png"] },
  { path: "/work/new-analyst-tool", priority: 0.9, changeFrequency: "monthly", images: ["/work/new-analyst.png"] },
  { path: "/work/launchpad", priority: 0.88, changeFrequency: "monthly", images: ["/logos/launchpad-logo.png"] },
  { path: "/work/nice-little-click-lab", priority: 0.86, changeFrequency: "monthly" },
  { path: "/work/suspicious-email-triage", priority: 0.9, changeFrequency: "monthly" },
  { path: "/work/access-request-provisioning", priority: 0.86, changeFrequency: "monthly" },
  { path: "/work/knowledge-base-governance", priority: 0.86, changeFrequency: "monthly" },
  { path: "/work/chartfinder", priority: 0.72, changeFrequency: "monthly" },
  { path: "/work/sail-snapper", priority: 0.72, changeFrequency: "monthly" },
  { path: "/work/small-wins/cookies-and-cache", priority: 0.66, changeFrequency: "yearly" },
  { path: "/work/small-wins/how-to-translate", priority: 0.66, changeFrequency: "yearly" },
  { path: "/work/small-wins/outdated-browser", priority: 0.66, changeFrequency: "yearly" },
  { path: "/work/small-wins/solution-resistance", priority: 0.66, changeFrequency: "yearly" },
  { path: "/work/small-wins/spicy-users", priority: 0.66, changeFrequency: "yearly" },
  { path: "/work/small-wins/tracking-email-verification", priority: 0.66, changeFrequency: "yearly" },
  { path: "/field-notes", priority: 0.9, changeFrequency: "weekly" },
  { path: "/lab", priority: 0.82, changeFrequency: "monthly" },
  { path: "/lab/damali-street", priority: 0.86, changeFrequency: "monthly", images: ["/damali/Solar-Psychosis.png"] },
  { path: "/lab/merge-the-union", priority: 0.8, changeFrequency: "monthly", images: ["/lab/merge-the-union/logo.png"] },
  { path: "/lab/moore-family-print-shop", priority: 0.8, changeFrequency: "monthly", images: ["/lab/moore-family-print-shop/moore-family-print-shop-logo.png"] },
  { path: "/about", priority: 0.82, changeFrequency: "monthly" },
  { path: "/resume", priority: 0.76, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.72, changeFrequency: "monthly" },
  { path: "/field-guide", priority: 0.65, changeFrequency: "yearly" },
  { path: "/pictogram-guide", priority: 0.6, changeFrequency: "yearly" },
  { path: "/colophon", priority: 0.45, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: siteUpdated,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images: route.images?.map((image) => `${baseUrl}${image}`),
  }));

  const fieldNoteRoutes: MetadataRoute.Sitemap = fieldNotes.map((note) => ({
    url: `${baseUrl}/field-notes/${note.slug}`,
    lastModified: new Date(`${note.publishedAt}T00:00:00.000Z`),
    changeFrequency: "monthly",
    priority: 0.76,
    images: [`${baseUrl}${note.image}`],
  }));

  return [...pages, ...fieldNoteRoutes];
}
