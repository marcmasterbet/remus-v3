import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recherche & Développement",
  description: "La R&D de REMUS Systems explore les interactions entre l’humain, l’IA et les systèmes complexes pour concevoir des architectures plus intelligentes et résilientes.",
  alternates: { canonical: "/r-d" },
  openGraph: {
    title: "Recherche & Développement | REMUS Systems",
    description: "La R&D de REMUS Systems explore les interactions entre l’humain, l’IA et les systèmes complexes.",
    url: "https://www.remussystems.fr/r-d",
    type: "website",
    locale: "fr_FR",
    siteName: "REMUS Systems",
    images: [{ url: "/visuals/rd-v3-background.jpeg", alt: "Recherche & Développement — REMUS Systems" }],
  },
  robots: { index: true, follow: true },
};

const axes = [
  {
    title: "INTERACTIONS HUMAIN – IA",
    text: "Comprendre comment l’humain et l’intelligence artificielle peuvent coopérer de manière utile, lisible et maîtrisée.",
  },
  {
    title: "ARCHITECTURES ADAPTATIVES",
    text: "Concevoir des systèmes capables d’évoluer sans perdre leur cohérence face aux changements de contexte, d’usage ou de contrainte.",
  },
  {
    title: "DÉTECTION PRÉCOCE",
    text: "Faire émerger les signaux faibles, fragilités et dérives avant qu’ils ne deviennent des points de rupture.",
  },
  {
    title: "GOUVERNANCE DES SYSTÈMES",
    text: "Structurer la décision, les responsabilités et les flux d’action dans des environnements complexes.",
  },
];

export default function RDPage() {
  return (
    <main className="remus-inner-page rd-page rd-final">
      <section className="rd-final-hero">
        <div className="rd-final-copy">
          <div className="panel-kicker">RECHERCHE &amp; DÉVELOPPEMENT</div>
          <span className="micro-line" />

          <h1>
            Explorer aujourd’hui
            <br />
            <span>pour comprendre demain.</span>
          </h1>

          <div className="rd-final-intro">
            <p>
              La R&amp;D de REMUS Systems explore les interactions entre l’humain, l’IA et les systèmes complexes pour mieux comprendre ce qui relie, influence, fragilise ou transforme un environnement.
            </p>
            <p>
              Notre objectif n’est pas seulement d’innover, mais de concevoir des architectures plus intelligentes, plus résilientes et plus adaptées aux enjeux réels, afin d’éclairer l’action et d’améliorer la qualité des décisions.
            </p>
          </div>
        </div>
      </section>

      <section className="rd-final-axes">
        <div className="panel-kicker">NOS AXES DE RECHERCHE</div>
        <span className="micro-line" />

        <div className="rd-final-list">
          {axes.map((axis) => (
            <article className="rd-final-row" key={axis.title}>
              <h2>{axis.title}</h2>
              <p>{axis.text}</p>
            </article>
          ))}
        </div>

        <div className="rd-final-conclusion">
          <strong>Chez REMUS, la recherche n’est pas séparée de l’action.</strong>
          <p>
            Elle alimente directement nos méthodes, nos audits et nos architectures afin de transformer la compréhension en capacité concrète d’analyse, de conception et de décision.
          </p>
        </div>
      </section>
    </main>
  );
}
