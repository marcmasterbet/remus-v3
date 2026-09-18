import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Audit REMUS | Analyse systémique avec LIMES",
  description: "L’Audit REMUS, soutenu par le moteur LIMES, analyse les interactions, incohérences, fragilités et dynamiques qui façonnent les systèmes.",
  alternates: {
    canonical: "/audit-remus",
  },
  openGraph: {
    title: "Audit REMUS | Analyse systémique avec LIMES",
    description: "L’Audit REMUS, soutenu par le moteur LIMES, analyse les interactions, incohérences, fragilités et dynamiques qui façonnent les systèmes.",
    url: "https://www.remussystems.fr/audit-remus",
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
    title: "Audit REMUS | Analyse systémique avec LIMES",
    description: "L’Audit REMUS, soutenu par le moteur LIMES, analyse les interactions, incohérences, fragilités et dynamiques qui façonnent les systèmes.",
    images: ["/visuals/hero-remus.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


const steps = [
  {
    title: "COMPRENDRE",
    text: "Nous analysons votre environnement dans son ensemble.",
  },
  {
    title: "DÉTECTER",
    text: "Nous identifions les incohérences, fragilités et dérives.",
  },
  {
    title: "PRIORISER",
    text: "Nous classons les points critiques selon leur impact.",
  },
  {
    title: "RECOMMANDER",
    text: "Nous formulons des pistes d’action concrètes et applicables.",
  },
];

export default function AuditRemusPage() {
  return (
    <main className="audit-remus-page">

      {/* HERO AUDIT */}
      <section className="audit-premium-hero">
        <div className="audit-premium-copy">

          <div className="audit-kicker">
            AUDIT REMUS
          </div>

          <span className="audit-small-line" />

          <h1>
            Une lecture systémique.
            <strong>Des décisions plus justes.</strong>
          </h1>

          <p className="audit-intro">
            L’Audit REMUS, soutenu par le moteur LIMES, révèle ce que les analyses classiques ne voient pas : les interactions, les incohérences, les fragilités et les dynamiques qui façonnent réellement vos systèmes.
          </p>

          <Link href="/contact" className="audit-main-button">
            DEMANDER UN AUDIT
            <span>→</span>
          </Link>

        </div>

        {/* VISUEL */}
        <div className="audit-premium-visual">

          <Image
            src="/visuals/audit-remus-v2-bg.jpg"
            alt="Architecture systémique REMUS — interactions, dépendances, données, processus et humain & IA"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 55vw"
            className="audit-cube-image"
          />

          <div className="audit-visual-light" />

        </div>
      </section>


      {/* APPROCHE */}
      <section className="audit-approach">

        <div className="audit-section-heading">
          <span>NOTRE APPROCHE</span>
          <div />
        </div>

        <div className="audit-steps">

          {steps.map((step, index) => (
            <article
              className="audit-step"
              key={step.title}
            >

              {/* Numéro uniquement dans le symbole */}
              <div className="audit-step-symbol">
                <span>{index + 1}</span>
              </div>

              <h2>
                {step.title}
              </h2>

              <p>
                {step.text}
              </p>

              {index < steps.length - 1 && (
                <div className="audit-step-arrow">
                  →
                </div>
              )}

            </article>
          ))}

        </div>


        {/* BLOC FINAL */}
        <div className="audit-final-block">

          <div className="audit-final-copy">

            <span>
              UNE LECTURE GLOBALE
            </span>

            <h2>
              Comprendre les interactions.
              <br />
              Identifier les fragilités.
              <br />
              <strong>
                Décider avec justesse.
              </strong>
            </h2>

            <p>
              REMUS analyse le système dans son ensemble afin de faire
              apparaître les dépendances, les signaux faibles et les
              dynamiques qui ne sont pas visibles lorsqu’on observe
              chaque élément séparément.
            </p>

          </div>

          <Link
            href="/contact"
            className="audit-main-button"
          >
            PARLER DE VOTRE SYSTÈME
            <span>→</span>
          </Link>

        </div>

      </section>

    </main>
  );
}
