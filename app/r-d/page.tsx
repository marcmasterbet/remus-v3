import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";
import FlipCard, { type FlipCardContent } from "../../components/FlipCard";

export const metadata: Metadata = pageMetadata({
  title: "Recherche & Développement",
  description: "La R&D de REMUS Systems explore les interactions entre l’humain, l’IA et les systèmes complexes pour mieux comprendre ce qui les relie, les fragilise ou les transforme.",
  path: "/r-d",
});

const axes: FlipCardContent[] = [
  {
    title: "INTERACTIONS HUMAIN – IA",
    seoTitle: "Recherche sur l’interaction humain-IA et l’IA de confiance",
    hook: "Faire coopérer l’humain et l’IA de façon utile, lisible et maîtrisée.",
    details: "Une IA performante n’a de valeur que si les personnes qui l’utilisent la comprennent et lui font confiance. Nos travaux portent sur l’interaction humain-machine : comment présenter les résultats d’une IA pour qu’ils soient lisibles, comment expliquer ses recommandations, et comment garantir que l’humain garde le contrôle des décisions importantes. Nous étudions notamment l’IA explicable, le juste partage des rôles entre l’opérateur et la machine, et les situations où l’IA doit s’effacer. L’objectif : une IA de confiance, qui renforce les compétences humaines au lieu de les contourner.",
  },
  {
    title: "ARCHITECTURES ADAPTATIVES",
    seoTitle: "Recherche sur les architectures adaptatives et résilientes",
    hook: "Des systèmes qui évoluent sans perdre leur cohérence.",
    details: "Comment un système peut-il se transformer en permanence tout en restant stable et contrôlable ? C’est la question au cœur de nos recherches sur les architectures adaptatives. Nous explorons les méthodes qui permettent à un système d’intégrer de nouvelles contraintes, de nouveaux usages ou de nouvelles technologies sans perte de cohérence ni de performance. Ces travaux portent sur la modularité, l’auto-ajustement et les mécanismes de contrôle qui encadrent l’évolution. Ils alimentent directement nos solutions et anticipent les besoins des organisations confrontées à des environnements de plus en plus instables.",
  },
  {
    title: "DÉTECTION PRÉCOCE",
    seoTitle: "Recherche sur la détection des signaux faibles et l’anticipation des risques",
    hook: "Repérer les signaux faibles avant qu’ils ne deviennent des ruptures.",
    details: "Les crises ne surgissent presque jamais sans prévenir : elles sont précédées de signaux discrets, souvent noyés dans la masse d’informations. Nos recherches visent à mieux détecter les signaux faibles, les dérives lentes et les fragilités émergentes au sein des systèmes complexes. Nous développons des approches qui croisent analyse de données, modélisation et expertise humaine pour distinguer un simple bruit d’une tendance réellement préoccupante. Ces travaux permettent une anticipation des risques plus fiable et laissent aux organisations le temps d’agir avant le point de rupture.",
  },
  {
    title: "GOUVERNANCE DES SYSTÈMES",
    seoTitle: "Recherche sur la gouvernance des systèmes complexes",
    hook: "Structurer la décision dans des environnements complexes.",
    details: "Lorsque les décisions impliquent de nombreux acteurs, des outils automatisés et des informations en continu, qui décide, sur quelle base et avec quelle responsabilité ? Nos travaux sur la gouvernance des systèmes complexes étudient la manière d’organiser la décision, les responsabilités et les flux d’action pour qu’ils restent clairs et efficaces. Nous nous intéressons particulièrement à la place de l’IA dans ces processus : traçabilité des choix, règles d’arbitrage, contrôle humain. L’enjeu est de construire des organisations à la fois agiles, responsables et capables de rendre compte de leurs décisions.",
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
            <FlipCard key={axis.title} className="rd-rebuilt-axis" headingLevel={3} {...axis} />
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
