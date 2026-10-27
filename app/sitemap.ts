import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/seo";

const pages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/audit-remus", priority: 0.9, changeFrequency: "monthly" },
  { path: "/technologies", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions", priority: 0.8, changeFrequency: "monthly" },
  { path: "/r-d", priority: 0.7, changeFrequency: "monthly" },
  { path: "/references", priority: 0.7, changeFrequency: "weekly" },
  { path: "/references/ia-gouvernance-decisionnelle", priority: 0.7, changeFrequency: "monthly" },
  { path: "/references/allier-technologie-impact-durable", priority: 0.7, changeFrequency: "monthly" },
  { path: "/references/quantique-intelligence-artificielle", priority: 0.7, changeFrequency: "monthly" },
  { path: "/a-propos", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/mentions-legales", priority: 0.2, changeFrequency: "yearly" },
  { path: "/confidentialite", priority: 0.2, changeFrequency: "yearly" },
  { path: "/cgu", priority: 0.2, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
