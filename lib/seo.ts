import type { Metadata } from "next";

/** Domaine de référence unique du site (version www). */
export const SITE_URL = "https://www.remussystems.fr";
export const SITE_NAME = "REMUS Systems";
export const DEFAULT_OG_IMAGE = "/og-image.jpg";

type PageSeo = {
  /** Titre de la page (le suffixe « | REMUS Systems » est ajouté automatiquement). */
  title: string;
  description: string;
  /** Chemin de la page, ex. "/audit-remus" ("/" pour l'accueil). */
  path: string;
  /** true : le titre est utilisé tel quel, sans suffixe. */
  absoluteTitle?: boolean;
  image?: { url: string; alt: string };
  type?: "website" | "article";
  noindex?: boolean;
};

export function absoluteUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  image = { url: DEFAULT_OG_IMAGE, alt: SITE_NAME },
  type = "website",
  noindex = false,
}: PageSeo): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  const robots = noindex ? { index: false, follow: true } : { index: true, follow: true };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    robots,
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      type,
      locale: "fr_FR",
      images: [{ url: image.url, alt: image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  };
}

type ArticleSchema = {
  title: string;
  description: string;
  path: string;
  image: string;
  author?: { name: string; jobTitle?: string };
};

/** Données structurées Article + fil d'Ariane pour une page de référence. */
export function articleJsonLd({ title, description, path, image, author }: ArticleSchema) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: title,
        description,
        image: absoluteUrl(image),
        url,
        mainEntityOfPage: url,
        inLanguage: "fr-FR",
        author: author
          ? { "@type": "Person", name: author.name, ...(author.jobTitle ? { jobTitle: author.jobTitle } : {}) }
          : { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Références", item: `${SITE_URL}/references` },
          { "@type": "ListItem", position: 3, name: title, item: url },
        ],
      },
    ],
  };
}
