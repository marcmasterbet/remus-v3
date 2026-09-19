import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Systèmes complexes, architectures technologiques & résilience",
  description: "REMUS Systems conçoit des architectures technologiques avancées pour sécuriser, comprendre et piloter les systèmes complexes.",
  alternates: { canonical: "/" },
};

const features = [
  ["SÉCURITÉ & RÉSILIENCE", "Protection avancée des systèmes critiques et des infrastructures sensibles."],
  ["ARCHITECTURES MODULAIRES", "Conception de systèmes évolutifs, interopérables et adaptés à vos enjeux opérationnels."],
  ["SUPERVISION INTELLIGENTE", "Collecte, analyse et compréhension en temps réel pour des décisions éclairées."],
  ["INNOVATION CONTINUE", "R&D appliquée pour anticiper les défis technologiques de demain."],
];

export default function Home() {
  return (
    <main className="home-clean-v3">
      <img
        className="home-clean-v3-bg"
        src="/visuals/remus-v2-earth-network-hd.jpg"
        alt=""
        aria-hidden="true"
      />

      <div className="home-clean-v3-content">
        <section className="home-clean-v3-intro">
          <p className="home-clean-v3-kicker">QUAND LES SYSTÈMES SE RENCONTRENT.</p>
          <span className="home-clean-v3-rule" />
          <h1>
            Le futur n’est pas<br />une technologie.<br />
            <strong>C’est un système.</strong>
          </h1>
          <span className="home-clean-v3-rule" />
          <p className="home-clean-v3-lead">
            REMUS Systems conçoit des architectures technologiques avancées pour sécuriser,
            comprendre et piloter les systèmes complexes de demain.
          </p>
          <div className="home-clean-v3-actions">
            <Link href="/technologies">DÉCOUVRIR NOS TECHNOLOGIES <span>→</span></Link>
            <Link href="/solutions">VOIR NOS SOLUTIONS <span>→</span></Link>
          </div>
        </section>

        <section className="home-clean-v3-grid" aria-label="Expertises REMUS Systems">
          {features.map(([title, text], index) => (
            <article key={title} className="home-clean-v3-card">
              <span className="home-clean-v3-number">0{index + 1}</span>
              <h2>{title}</h2>
              <span className="home-clean-v3-card-rule" />
              <p>{text}</p>
            </article>
          ))}
          <aside className="home-clean-v3-card">
            <span className="home-clean-v3-card-rule" />
            <strong>DES TECHNOLOGIES<br />AU SERVICE DE VOS<br />MISSIONS CRITIQUES.</strong>
            <span className="home-clean-v3-card-rule" />
          </aside>
        </section>
      </div>
    </main>
  );
}
