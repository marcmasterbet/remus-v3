import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Allier technologie et impact durable | REMUS SYSTEMS",
  description: "Innover ne suffit pas. Une technologie n’a de valeur que si elle améliore durablement ce qu’elle touche.",
};

export default function AllierTechnologieImpactDurablePage() {
  return (
    <main className="remus-article">
      <section className="remus-article-cover" aria-label="Illustration de l’article">
        <Image
          src="/visuals/articles/allier-technologie-impact-durable.webp"
          alt="Turbine technologique et réseau lumineux cuivre"
          width={1920}
          height={819}
          priority
          className="remus-article-cover-image"
        />
      </section>

      <article className="remus-article-paper">
        <header className="remus-article-heading">
          <span className="remus-article-label">ARTICLE</span>
          <h1>ALLIER TECHNOLOGIE ET IMPACT DURABLE</h1>
          <p className="remus-article-deck">Innover ne suffit pas. Il faut renforcer ce qui doit durer.</p>
        </header>

        <div className="remus-article-intro">
          <p>Une technologie n’a de valeur que si elle améliore durablement ce qu’elle touche.</p>
          <p>Chez REMUS Systems, nous partons d’une conviction simple : la performance ne doit jamais être dissociée de la résilience.</p>
          <p>Comprendre un système, détecter ses fragilités, anticiper ses transitions et éclairer la décision, c’est aussi éviter des ruptures, préserver des ressources et prolonger la viabilité de ce qui existe déjà.</p>
        </div>

        <div className="remus-article-divider" aria-hidden="true">⸻</div>

        <div className="remus-article-columns">
          <section className="remus-article-section">
            <h2>L’impact durable commence dès la conception</h2>
            <p>L’impact durable ne se résume donc pas à une promesse environnementale ajoutée après coup. Il commence dès la conception :</p>
            <p className="remus-article-dashes">— construire des solutions réellement utiles ;<br />— rendre les risques visibles avant qu’ils deviennent critiques ;<br />— renforcer la capacité d’adaptation sans ajouter de complexité inutile ;<br />— faire de la technologie un outil de continuité, pas seulement d’accélération.</p>
          </section>

          <section className="remus-article-section">
            <h2>Relier innovation, maîtrise du risque et responsabilité</h2>
            <p>Notre approche vise à relier innovation, maîtrise du risque et responsabilité.</p>
            <p>Parce qu’un progrès réel n’est pas celui qui impressionne un instant.</p>
            <p className="remus-article-emphasis">C’est celui qui continue d’avoir du sens lorsqu’il rencontre le monde réel.</p>
          </section>
        </div>
      </article>

      <section className="remus-article-conclusion">
        <div className="remus-article-conclusion-inner">
          <div className="remus-article-manifesto">
            <strong>Comprendre.</strong>
            <strong>Anticiper.</strong>
            <strong>Préserver.</strong>
          </div>
          <nav className="remus-article-next" aria-label="Navigation entre les articles">
            <Link href="/references/quantique-intelligence-artificielle">ARTICLE SUIVANT <span aria-hidden="true">→</span></Link>
          </nav>

        </div>
      </section>
    </main>
  );
}
