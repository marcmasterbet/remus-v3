import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IA et gouvernance décisionnelle",
  description: "Une IA peut proposer. Mais qui autorise l’action ? Une analyse d’Alexandre Flamand sur la gouvernance des systèmes décisionnels intégrant l’intelligence artificielle.",
};

export default function IAGouvernanceDecisionnellePage() {
  return (
    <main className="remus-article">
      <section className="remus-article-hero">
        <div className="remus-article-hero-shade" />
        <div className="remus-article-hero-copy">
          <span className="remus-article-author">ALEXANDRE FLAMAND</span>
          <h1>IA ET GOUVERNANCE<br />DÉCISIONNELLE</h1>
          <p>Une IA peut proposer. Mais qui autorise l’action ?</p>
          <div className="remus-article-tags">ARCHITECTURE <i /> TRAÇABILITÉ <i /> AUTORITÉ HUMAINE</div>
        </div>
      </section>

      <article className="remus-article-body">
        <div className="remus-article-intro">
          <p>Nous parlons beaucoup de la performance des intelligences artificielles.</p>
          <p>Précision, vitesse, capacité d’analyse, apprentissage…</p>
          <p>Mais lorsqu’une IA intervient dans un système complexe, une autre question devient essentielle :</p>
          <p className="remus-article-question">que se passe-t-il entre sa recommandation et l’action réelle ?</p>
          <p>Car une sortie algorithmique n’est pas encore une décision.</p>
          <p>Pour devenir exploitable, elle doit être contextualisée, confrontée aux contraintes du système, accompagnée de son niveau d’incertitude et soumise à une autorité clairement identifiée.</p>
          <div className="remus-article-callout">
            <span>LE VÉRITABLE ENJEU N’EST DONC PAS SEULEMENT :</span>
            <strong>« Que recommande l’IA ? »</strong>
            <span>MAIS ÉGALEMENT :</span>
            <strong>« Cette recommandation est-elle recevable ici, maintenant et dans ces conditions ? »</strong>
          </div>
        </div>

        <div className="remus-article-grid">
          <section>
            <span className="remus-article-section-no">01</span>
            <h2>AJOUTER UN HUMAIN<br />NE SUFFIT PAS</h2>
            <p>La supervision humaine reste indispensable dans de nombreux environnements critiques.</p>
            <p>Mais placer un bouton de validation à la fin du processus ne garantit pas une véritable gouvernance.</p>
            <p>Si la personne reçoit une recommandation opaque, sans origine, sans alternative et sans temps pour en comprendre les conséquences, elle ne décide plus réellement.</p>
            <blockquote>Elle devient le dernier clic d’une décision construite ailleurs.</blockquote>
            <p>L’humain ne peut conserver son autorité que s’il dispose des informations nécessaires pour comprendre, refuser, demander une analyse complémentaire et justifier son choix.</p>
          </section>

          <section>
            <span className="remus-article-section-no">02</span>
            <h2>LA GOUVERNANCE DOIT ÊTRE PRÉSENTE DANS L’ARCHITECTURE</h2>
            <p>La gouvernance ne peut pas être uniquement une règle écrite ou une couche éthique ajoutée après le développement.</p>
            <p>Elle doit être intégrée au fonctionnement réel du système.</p>
            <p>L’architecture doit déterminer :</p>
            <ul>
              <li>quelles données font autorité ;</li>
              <li>qui peut produire et consulter une recommandation ;</li>
              <li>qui peut la valider ;</li>
              <li>dans quelles conditions elle peut devenir une action ;</li>
              <li>comment une erreur, un refus ou une dérogation sont traités ;</li>
              <li>comment chaque événement est tracé.</li>
            </ul>
            <p>Une interface ne devrait jamais inventer une décision que le système central n’a pas produite.</p>
            <p>Et un indicateur ne devrait jamais être présenté comme une preuve s’il ne repose pas sur une source vérifiable.</p>
            <blockquote>La gouvernance n’est pas ce que le système affirme faire. Elle est ce que son architecture rend réellement possible — ou impossible.</blockquote>
          </section>

          <section>
            <span className="remus-article-section-no">03</span>
            <h2>UNE IA PERFORMANTE PEUT PARTICIPER À UN SYSTÈME FRAGILE</h2>
            <p>Plus une technologie devient puissante, plus elle peut accélérer les effets d’une erreur.</p>
            <p>Une mauvaise recommandation intégrée à un système automatisé peut être répétée rapidement, simultanément et à grande échelle.</p>
            <p>La robustesse d’un système ne peut donc pas être déduite de la seule précision de son intelligence artificielle.</p>
            <p>Elle apparaît surtout lorsque les données manquent, que deux composants se contredisent ou que l’environnement change.</p>
            <p>Une architecture mature doit alors savoir signaler l’incertitude, demander une intervention humaine ou refuser une action insuffisamment qualifiée.</p>
            <blockquote>Savoir ne pas décider est aussi une capacité décisionnelle.</blockquote>
          </section>
        </div>
      </article>

      <section className="remus-article-conclusion">
        <div>
          <p>La gouvernance ne cherche pas à ralentir l’intelligence artificielle.</p>
          <p>Elle cherche à transformer sa puissance en capacité réellement maîtrisée.</p>
          <div className="remus-article-manifesto">
            <strong>L’IA propose.</strong>
            <strong>L’architecture qualifie.</strong>
            <strong>La gouvernance autorise ou refuse.</strong>
            <strong>Dans les décisions critiques, l’humain conserve l’autorité et la responsabilité.</strong>
          </div>
          <footer>
            <b>Alexandre Flamand</b>
            <span>Architecte en systèmes complexes</span>
          </footer>
        </div>
      </section>
    </main>
  );
}
