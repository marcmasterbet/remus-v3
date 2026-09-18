import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.remussystems.fr";
  const pages = [
    "",
    "/audit-remus",
    "/technologies",
    "/solutions",
    "/r-d",
    "/a-propos",
    "/contact",
    "/mentions-legales",
    "/confidentialite",
    "/cgu",
    "/cookies",
  ];

  return pages.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/mentions") || path.startsWith("/confidentialite") || path.startsWith("/cgu") || path.startsWith("/cookies") ? 0.3 : 0.8,
  }));
}
