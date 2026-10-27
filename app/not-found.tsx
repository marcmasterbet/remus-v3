import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable",
  description: "La page demandée n’existe pas ou a été déplacée.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="remus-inner-page not-found-page">
      <section className="not-found-content">
        <span className="not-found-code">ERREUR 404</span>
        <h1>Cette page est introuvable.</h1>
        <p>La page que vous cherchez n’existe pas ou a été déplacée.</p>
        <div className="not-found-links">
          <Link href="/">RETOUR À L’ACCUEIL <span aria-hidden="true">→</span></Link>
          <Link href="/contact">NOUS CONTACTER <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </main>
  );
}
