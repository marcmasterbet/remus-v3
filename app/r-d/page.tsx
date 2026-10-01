import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recherche & Développement",
  description: "La R&D de REMUS Systems explore les interactions entre l’humain, l’IA et les systèmes complexes.",
  alternates: { canonical: "/r-d" },
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
    <main className="rd-rebuilt-page">
      <section className="rd-rebuilt-visual" aria-label="Recherche et développement REMUS Systems" />

      <section className="rd-rebuilt-content">
        <div className="rd-rebuilt-kicker">RECHERCHE &amp; DÉVELOPPEMENT</div>
        <span className="rd-rebuilt-rule" />

        <h1>
          Explorer aujourd’hui<br />
          <strong>pour comprendre demain.</strong>
        </h1>

        <div className="rd-rebuilt-intro">
          <p>
            La R&amp;D de REMUS Systems explore les interactions entre l’humain, l’IA et les systèmes complexes pour mieux comprendre ce qui relie, influence, fragilise ou transforme un environnement.
          </p>
          <p>
            Notre objectif n’est pas seulement d’innover, mais de concevoir des architectures plus intelligentes, plus résilientes et plus adaptées aux enjeux réels, afin d’éclairer l’action et d’améliorer la qualité des décisions.
          </p>
        </div>

        <h2 className="rd-rebuilt-axes-title">NOS AXES DE RECHERCHE</h2>

        <div className="rd-rebuilt-axes">
          {axes.map((axis) => (
            <article className="rd-rebuilt-axis" key={axis.title}>
              <h3>{axis.title}</h3>
              <p>{axis.text}</p>
            </article>
          ))}
        </div>

        <div className="rd-rebuilt-closing">
          <h2>Chez REMUS, la recherche n’est pas séparée de l’action.</h2>
          <p>
            Elle alimente directement nos méthodes, nos audits et nos architectures afin de transformer la compréhension en capacité concrète d’analyse, de conception et de décision.
          </p>
        </div>
      </section>
    </main>
  );
}
