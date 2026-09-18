import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import CookieConsent from "../components/CookieConsent";
import GoogleAnalytics from "../components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.remussystems.fr"),
  title: {
    default: "REMUS Systems",
    template: "%s | REMUS Systems"
  },
  description:
    "REMUS Systems analyse les systèmes complexes, leurs interactions, leurs fragilités et leurs dynamiques de fonctionnement.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "REMUS Systems",
    description: "Quand les systèmes se rencontrent.",
    url: "https://www.remussystems.fr",
    siteName: "REMUS Systems",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/visuals/hero-remus.png", alt: "REMUS Systems" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "REMUS Systems",
    description: "Quand les systèmes se rencontrent.",
    images: ["/visuals/hero-remus.png"],
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"Organization\", \"@id\": \"https://www.remussystems.fr/#organization\", \"name\": \"REMUS Systems\", \"url\": \"https://www.remussystems.fr/\", \"email\": \"contact@remussystems.fr\", \"address\": {\"@type\": \"PostalAddress\", \"streetAddress\": \"11 rue de la Vieille Ill\", \"postalCode\": \"67640\", \"addressLocality\": \"Fegersheim\", \"addressCountry\": \"FR\"}}, {\"@type\": \"WebSite\", \"@id\": \"https://www.remussystems.fr/#website\", \"url\": \"https://www.remussystems.fr/\", \"name\": \"REMUS Systems\", \"inLanguage\": \"fr-FR\", \"publisher\": {\"@id\": \"https://www.remussystems.fr/#organization\"}}]}" }}
        />
      </head>
      <body>
        <div className="site-shell">
          <Header />
          {children}
          <nav className="v3-legal-nav" aria-label="Informations légales">
            <a href="/mentions-legales">Mentions légales</a>
            <a href="/confidentialite">Confidentialité</a>
            <a href="/cgu">CGU</a>
            <a href="/cookies">Cookies</a>
          </nav>
        </div>
        <GoogleAnalytics />
        <CookieConsent />
      </body>
    </html>
  );
}
