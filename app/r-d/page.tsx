import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recherche & Développement",
  description: "La R&D de REMUS Systems explore les interactions entre l’humain, l’IA et les systèmes complexes pour concevoir des architectures plus intelligentes et résilientes.",
  alternates: { canonical: "/r-d" },
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
    <main className="rd-v2-page">
      <section className="rd-v2-hero">
        <div className="rd-v2-kicker">RECHERCHE &amp; DÉVELOPPEMENT</div>
        <span className="rd-v2-rule" />

        <h1>
          Explorer aujourd’hui
          <br />
          <strong>pour comprendre demain.</strong>
        </h1>

        <div className="rd-v2-intro">
          <p>
            La R&amp;D de REMUS Systems explore les interactions entre l’humain, l’IA et les systèmes complexes pour mieux comprendre ce qui relie, influence, fragilise ou transforme un environnement.
          </p>
          <p>
            Notre objectif n’est pas seulement d’innover, mais de concevoir des architectures plus intelligentes, plus résilientes et plus adaptées aux enjeux réels, afin d’éclairer l’action et d’améliorer la qualité des décisions.
          </p>
        </div>
      </section>

      <section className="rd-v2-axes">
        <div className="rd-v2-section-title">NOS AXES DE RECHERCHE</div>

        <div className="rd-v2-list">
          {axes.map((axis) => (
            <article className="rd-v2-row" key={axis.title}>
              <h2>{axis.title}</h2>
              <p>{axis.text}</p>
              <span className="rd-v2-row-accent" aria-hidden="true" />
            </article>
          ))}
        </div>

        <div className="rd-v2-closing">
          <strong>Chez REMUS, la recherche n’est pas séparée de l’action.</strong>
          <p>
            Elle alimente directement nos méthodes, nos audits et nos architectures afin de transformer la compréhension en capacité concrète d’analyse, de conception et de décision.
          </p>
        </div>
      </section>
    </main>
  );
}
