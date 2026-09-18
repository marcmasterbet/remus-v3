import type { Metadata } from "next";
import Image from "next/image";
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
  [
    "01",
    "SÉCURITÉ & RÉSILIENCE",
    "Identifier les vulnérabilités, dépendances et points critiques afin de préserver la continuité des systèmes."
  ],
  [
    "02",
    "ARCHITECTURES MODULAIRES",
    "Concevoir des architectures évolutives, interopérables et adaptées aux contraintes opérationnelles."
  ],
  [
    "03",
    "SUPERVISION INTELLIGENTE",
    "Transformer les données et signaux dispersés en une compréhension exploitable pour accélérer la décision."
  ],
  [
    "04",
    "DÉCISION AUGMENTÉE",
    "Associer expertise humaine, données et intelligence artificielle pour éclairer l’analyse et agir avec davantage de précision."
  ],
  [
    "05",
    "SYSTÈMES ADAPTATIFS",
    "Faire évoluer les solutions en fonction de leur environnement, de leurs contraintes et des usages terrain."
  ],
  [
    "06",
    "GOUVERNANCE & ORCHESTRATION",
    "Structurer les responsabilités, les flux d’information et les mécanismes d’arbitrage autour d’une vision commune."
  ]
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

        <div className="solutions-hero-visual" aria-hidden="true">
          <Image
            src="/visuals/solutions-remus.png"
            alt=""
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>
      </section>

      <section className="solutions-grid panel-shell">
        {solutions.map(([n, title, text]) => (
          <article className="solution-card" key={title}>
            <span className="solution-index">{n}</span>

            <div className="solution-glyph">
              <span>◇</span>
            </div>

            <h2>{title}</h2>

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
