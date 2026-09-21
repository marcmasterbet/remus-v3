import Link from "next/link";

const articles = [
  {
    slug: "audit-ia-en-entreprise",
    title: "Audit IA en entreprise : méthode, risques et points de contrôle",
  },
  {
    slug: "analyse-systemique-en-entreprise",
    title: "Analyse systémique en entreprise : comprendre les interactions avant de décider",
  },
  {
    slug: "signaux-faibles-en-entreprise",
    title: "Signaux faibles en entreprise : les détecter avant qu’ils deviennent critiques",
  },
];

export default function ReferencesPage() {
  return (
    <main className="references-v3">
      <section className="references-v3-hero">
        <div className="references-v3-copy">
          <span className="references-v3-kicker">RÉFÉRENCES</span>
          <h1>
            Comprendre aujourd’hui<br />
            pour anticiper<br />
            <em>demain.</em>
          </h1>
          <p>
            REMUS SYSTEMS partage ses analyses et perspectives sur les systèmes
            complexes, l’intelligence artificielle, les risques et la résilience.
            Des réflexions pour mieux comprendre les transformations en cours et
            éclairer les décisions de demain.
          </p>
        </div>
      </section>

      <section className="references-v3-list">
        <header className="references-v3-list-head">
          <span>ANALYSES &amp; PERSPECTIVES</span>
        </header>

        <div className="references-v3-grid">
          {articles.map((article, index) => (
            <article className="references-v3-card" key={article.slug}>
              <span className="references-v3-number">0{index + 1}</span>
              <h3>{article.title}</h3>
              <Link href={`/references/${article.slug}`}>
                Lire l’article <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
