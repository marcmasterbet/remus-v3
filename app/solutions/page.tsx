import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Solutions | Sécurité, résilience & architectures modulaires",
  description: "REMUS Systems conçoit et intègre des architectures technologiques réunissant systèmes, données et expertise humaine pour les environnements critiques.",
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "Solutions | Sécurité, résilience & architectures modulaires",
    description: "REMUS Systems conçoit et intègre des architectures technologiques réunissant systèmes, données et expertise humaine pour les environnements critiques.",
    url: "https://www.remussystems.fr/solutions",
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
    title: "Solutions | Sécurité, résilience & architectures modulaires",
    description: "REMUS Systems conçoit et intègre des architectures technologiques réunissant systèmes, données et expertise humaine pour les environnements critiques.",
    images: ["/visuals/hero-remus.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


const solutions = [
  {
    title: "SÉCURITÉ & RÉSILIENCE",
    lead: "Préserver ce qui doit continuer à fonctionner.",
    text: "Identifier les vulnérabilités, dépendances sensibles et points critiques afin d’anticiper les ruptures, réduire les fragilités et renforcer la continuité du système."
  },
  {
    title: "ARCHITECTURES MODULAIRES",
    lead: "Concevoir des systèmes capables d’évoluer.",
    text: "Structurer des architectures interopérables et adaptables, pensées pour intégrer de nouvelles contraintes, technologies ou usages sans remettre en cause l’ensemble du système."
  },
  {
    title: "SUPERVISION INTELLIGENTE",
    lead: "Transformer l’information en compréhension.",
    text: "Relier les données, événements et signaux dispersés afin de faire émerger une lecture exploitable du système et d’améliorer la rapidité comme la qualité des décisions."
  },
  {
    title: "DÉCISION AUGMENTÉE",
    lead: "Renforcer l’analyse sans remplacer l’humain.",
    text: "Associer expertise humaine, données et intelligence artificielle pour éclairer les choix, comparer les scénarios et agir avec davantage de précision dans des environnements complexes."
  },
  {
    title: "SYSTÈMES ADAPTATIFS",
    lead: "Faire évoluer la solution avec son environnement.",
    text: "Concevoir des systèmes capables de s’ajuster aux usages, aux contraintes opérationnelles et aux changements de contexte sans perdre leur cohérence ni leur maîtrise."
  },
  {
    title: "GOUVERNANCE & ORCHESTRATION",
    lead: "Faire travailler les différentes composantes dans la même direction.",
    text: "Structurer les responsabilités, les flux d’information, les règles d’interaction et les mécanismes d’arbitrage afin de maintenir une vision commune et une action coordonnée."
  }
];

export default function SolutionsPage() {
  return (
    <main className="remus-inner-page solutions-page">

      <section className="solutions-hero panel-shell">
        <div className="solutions-hero-copy">
          <div className="panel-kicker">SOLUTIONS</div>

          <span className="micro-line" />

          <h1>
            Concevoir l’architecture<br />
            <strong>des missions de demain.</strong>
          </h1>

          <p>
            REMUS Systems conçoit et intègre des architectures technologiques où
            systèmes, données et expertise humaine convergent pour répondre aux
            enjeux des environnements critiques.
          </p>
        </div>
      </section>

      <section className="solutions-grid panel-shell">
        {solutions.map(({ title, lead, text }) => (
          <article className="solution-card" key={title}>
            <h2>{title}</h2>
            <p className="solution-lead">{lead}</p>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="solutions-closing panel-shell">
        <div>
          <div className="panel-kicker">
            UNE APPROCHE SUR MESURE
          </div>

          <h2>
            Comprendre d’abord.<br />
            <strong>Concevoir ensuite.</strong>
          </h2>
        </div>

        <p>
          Chaque intervention commence par la compréhension du système réel,
          de ses interactions et de ses contraintes. La solution vient après
          le diagnostic, jamais avant.
        </p>

        <Link
          href="/audit-remus"
          className="button button-copper"
        >
          DÉCOUVRIR L’AUDIT REMUS <span>→</span>
        </Link>
      </section>

    </main>
  );
}
