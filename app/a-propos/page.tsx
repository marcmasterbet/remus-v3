import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "À propos",
  description: "Découvrez REMUS Systems, son équipe, sa vision et l’origine d’une approche centrée sur les systèmes, leurs interactions et les technologies de demain.",
  alternates: {
    canonical: "/a-propos",
  },
  openGraph: {
    title: "À propos | REMUS Systems",
    description: "Découvrez REMUS Systems, son équipe, sa vision et l’origine d’une approche centrée sur les systèmes, leurs interactions et les technologies de demain.",
    url: "https://www.remussystems.fr/a-propos",
    type: "website",
    locale: "fr_FR",
    siteName: "REMUS Systems",
    images: [
      {
        url: "/visuals/hero-remus.png",
        alt: "REMUS Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos | REMUS Systems",
    description: "Découvrez REMUS Systems, son équipe, sa vision et l’origine d’une approche centrée sur les systèmes, leurs interactions et les technologies de demain.",
    images: ["/visuals/hero-remus.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function AboutPage() {
  return (
    <main className="remus-inner-page about-page">
      <section className="about-hero panel-shell">
        <div className="panel-kicker">QUI SOMMES-NOUS ?</div>

        <div className="about-simple-content">
          <h1>Qui sommes-nous ?</h1>

          <p>REMUS SYSTEMS est née d'une conviction partagée entre deux esprits complémentaires.</p>

          <p>D'un côté, une vision stratégique et humaine — comprendre les systèmes complexes, identifier ce qui freine les professionnels, et traduire ces enjeux en solutions concrètes.</p>

          <p>De l'autre, une sensibilité technique et créative — un associé dont l'imagination structure les idées et leur donne une forme ambitieuse.</p>

          <p>Ensemble, nous avons construit REMUS SYSTEMS autour d'une ambition claire : concevoir des outils technologiques de pointe qui réduisent le bruit décisionnel et permettent aux professionnels de se concentrer là où leur expertise compte vraiment.</p>

          <p>Notre conviction : ce que nous construisons aujourd'hui, nous pouvons le construire pour tous les secteurs où la décision critique ne tolère pas l'erreur.</p>

          <p>Nous sommes deux. Nous avançons vite. Nous pensons loin.</p>

          <div className="about-signature">
            <strong>Séverine Kayser</strong>
            <span>Présidente — REMUS SYSTEMS</span>
          </div>
        </div>
      </section>
    </main>
  );
}
