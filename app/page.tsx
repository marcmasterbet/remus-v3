import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Systèmes complexes, architectures technologiques & résilience",
  description: "REMUS Systems conçoit des architectures technologiques avancées pour sécuriser, comprendre et piloter les systèmes complexes.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Systèmes complexes, architectures technologiques & résilience",
    description: "REMUS Systems conçoit des architectures technologiques avancées pour sécuriser, comprendre et piloter les systèmes complexes.",
    url: "https://www.remussystems.fr",
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
    title: "Systèmes complexes, architectures technologiques & résilience",
    description: "REMUS Systems conçoit des architectures technologiques avancées pour sécuriser, comprendre et piloter les systèmes complexes.",
    images: ["/visuals/hero-remus.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


const features = [
  {
    icon: "lock",
    title: "SÉCURITÉ & RÉSILIENCE",
    text: "Protection avancée des systèmes critiques et des infrastructures sensibles."
  },
  {
    icon: "layers",
    title: "ARCHITECTURES MODULAIRES",
    text: "Conception de systèmes évolutifs, interopérables et adaptés à vos enjeux opérationnels."
  },
  {
    icon: "dot",
    title: "SUPERVISION INTELLIGENTE",
    text: "Collecte, analyse et compréhension en temps réel pour des décisions éclairées."
  },
  {
    icon: "hex",
    title: "INNOVATION CONTINUE",
    text: "R&D appliquée pour anticiper les défis technologiques de demain."
  }
];

function FeatureIcon({ type }: { type: string }) {
  return (
    <span
      className={`home-feature-icon home-feature-icon--${type}`}
      aria-hidden="true"
    >
      <span />
    </span>
  );
}

export default function Home() {
  return (
    <main className="home-reference">

      <section className="home-hero">

        <div className="home-copy">

          <p className="home-kicker">
            QUAND LES SYSTÈMES SE RENCONTRENT.
          </p>

          <span
            className="home-rule"
            aria-hidden="true"
          />

          <h1 className="home-title">
            <span>Le futur n’est pas</span>
            <span>une technologie.</span>

            <span className="home-title-copper">
              C’est un système.
            </span>
          </h1>

          <span
            className="home-rule home-rule--after-title"
            aria-hidden="true"
          />

          <p className="home-intro">
            REMUS Systems conçoit des architectures technologiques avancées
            pour sécuriser, comprendre et piloter les systèmes complexes de
            demain.
          </p>

          <div className="home-actions">

            <Link
              href="/technologies"
              className="home-button home-button--solid"
            >
              DÉCOUVRIR NOS TECHNOLOGIES
              <span>→</span>
            </Link>

            <Link
              href="/solutions"
              className="home-button home-button--outline"
            >
              VOIR NOS SOLUTIONS
              <span>→</span>
            </Link>

          </div>

        </div>

        <div
          className="home-network"
          aria-hidden="true"
        >
          <img
            src="/visuals/remus-v2-earth-network.png"
            alt=""
          />
        </div>

      </section>


      <section
        className="home-feature-strip"
        aria-label="Expertises REMUS Systems"
      >

        {features.map((feature) => (
          <article
            className="home-feature"
            key={feature.title}
          >

            <FeatureIcon type={feature.icon} />

            <div>
              <h2>{feature.title}</h2>
              <p>{feature.text}</p>
            </div>

          </article>
        ))}


        <aside className="home-feature-statement">

          <span
            className="home-rule"
            aria-hidden="true"
          />

          <strong>
            DES TECHNOLOGIES
            <br />
            AU SERVICE DE VOS
            <br />
            MISSIONS CRITIQUES.
          </strong>

          <span
            className="home-rule"
            aria-hidden="true"
          />

        </aside>

      </section>

    </main>
  );
}
