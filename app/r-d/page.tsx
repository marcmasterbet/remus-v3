import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Recherche & Développement",
  description: "La R&D de REMUS Systems explore les interactions entre humains, intelligence artificielle et technologies pour concevoir des architectures intelligentes et résilientes.",
  alternates: {
    canonical: "/r-d",
  },
  openGraph: {
    title: "Recherche & Développement | REMUS Systems",
    description: "La R&D de REMUS Systems explore les interactions entre humains, intelligence artificielle et technologies pour concevoir des architectures intelligentes et résilientes.",
    url: "https://www.remussystems.fr/r-d",
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
    title: "Recherche & Développement | REMUS Systems",
    description: "La R&D de REMUS Systems explore les interactions entre humains, intelligence artificielle et technologies pour concevoir des architectures intelligentes et résilientes.",
    images: ["/visuals/hero-remus.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


const axes = [
  "INTERACTIONS HUMAIN – IA",
  "ARCHITECTURES ADAPTATIVES",
  "DÉTECTION PRÉCOCE",
  "GOUVERNANCE DES SYSTÈMES"
];

export default function RDPage() {
  return (
    <main className="remus-inner-page rd-page">

      <section className="rd-hero panel-shell">

        <div className="rd-copy">
          <div className="panel-kicker">
            RECHERCHE & DÉVELOPPEMENT
          </div>

          <span className="micro-line" />

          <h1>
            Explorer aujourd’hui
            <br />
            <strong>pour comprendre demain.</strong>
          </h1>

          <p>
             La  recherche et le développement de REMUS Systems explore les interactions entre humains, IA et technologies afin de concevoir des architectures plus intelligentes, plus résilientes et mieux préparées aux défis de demain.
          </p>
        </div>

        <div className="rd-visual">

          <Image
            src="/visuals/rd-hero.png"
            alt="Réseau de recherche et développement REMUS Systems"
            width={1536}
            height={1024}
            priority
            className="rd-hero-image"
          />

        </div>

      </section>

      <section className="research-axes panel-shell">

        <div className="panel-kicker">
          NOS AXES DE RECHERCHE
        </div>

        <div className="research-layout">

          <div className="research-list">

            {axes.map((axis, i) => (
              <div className="research-row" key={axis}>

                <span className="research-index">
                  0{i + 1}
                </span>

                <span className="research-symbol">
                  ◇
                </span>

                <strong>
                  {axis}
                </strong>

                <span className="research-line" />

              </div>
            ))}

          </div>

          <div className="research-side">

            <p>
              La recherche REMUS nourrit directement
              nos méthodes, nos audits et nos architectures.
            </p>

            <Link
              href="/technologies"
              className="button button-copper rd-button"
            >
              DÉCOUVRIR NOS TRAVAUX
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
