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
    text: "Nous analysons votre environnement dans son ensemble afin d’identifier les acteurs, les processus, les flux, les contraintes et les dépendances qui structurent réellement votre système.L’objectif est de comprendre non seulement chaque élément, mais surtout la manière dont ils interagissent entre eux.",
  },
  {
    title: "DÉTECTER",
    text: "Nous recherchons les incohérences, fragilités, tensions, dépendances critiques et signaux faibles susceptibles d’affecter le fonctionnement du système.
L’analyse permet de faire apparaître des problèmes qui peuvent rester invisibles lorsqu’ils sont observés séparément.",
  },
  {
    title: "PRIORISER",
    text: "Nous évaluons les points identifiés selon leur impact, leur niveau de criticité, leurs interactions et leur capacité à provoquer des effets en cascade.
L’objectif est de distinguer ce qui est simplement perfectible de ce qui nécessite une attention ou une action prioritaire.",
  },
  {
    title: "RECOMMANDER",
    text: "Nous transformons l’analyse en pistes d’action concrètes, hiérarchisées et adaptées à votre environnement opérationnel.
Les recommandations visent à réduire les fragilités, améliorer la maîtrise du système et sécuriser les décisions à venir.",
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
