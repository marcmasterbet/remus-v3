import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";
import Image from "next/image";
import Link from "next/link";
import AuditFlipCard from "../../components/AuditFlipCard";


export const metadata: Metadata = pageMetadata({
  title: "Audit organisationnel et analyse systémique | REMUS Systems",
  description: "L’Audit REMUS cartographie votre organisation, détecte les fragilités et dépendances critiques, hiérarchise les risques et vous livre un plan d’action concret.",
  path: "/audit-remus",
  absoluteTitle: true,
});


type Step = {
  title: string;
  seoTitle: string;
  hook: string;
  details: string;
};

const steps: Step[] = [
  {
    title: "COMPRENDRE",
    seoTitle: "Analyse systémique de votre organisation",
    hook: "Cartographier votre organisation pour voir comment tout est relié.",
    details: "Notre analyse systémique commence par une vision complète de votre organisation. Nous identifions les acteurs, les processus, les flux d’information, les contraintes et les dépendances qui structurent réellement votre fonctionnement. L’essentiel n’est pas la liste des éléments, mais la manière dont ils interagissent : un retard fournisseur, une donnée mal partagée ou un outil mal intégré influence l’ensemble. Cette cartographie organisationnelle vous offre une vision claire et partagée de votre système, la base indispensable de tout audit organisationnel fiable.",
  },
  {
    title: "DÉTECTER",
    seoTitle: "Détection des fragilités et dépendances critiques",
    hook: "Révéler les fragilités invisibles quand on regarde chaque élément séparément.",
    details: "Certains risques n’apparaissent que lorsqu’on observe le système dans son ensemble. Nous recherchons les incohérences, les dépendances critiques, les points de fragilité et les signaux faibles susceptibles de perturber votre activité. Un processus reposant sur une seule personne, une information qui circule mal entre deux services, une contrainte mal anticipée : ces détails sont souvent à l’origine des difficultés majeures. Une détection précoce des risques vous donne le temps d’agir avant que ces fragilités ne deviennent des crises.",
  },
  {
    title: "PRIORISER",
    seoTitle: "Évaluation et hiérarchisation des risques",
    hook: "Distinguer ce qui est urgent de ce qui peut attendre.",
    details: "Tous les risques n’ont pas la même importance. Nous évaluons chaque point selon son impact, son niveau de criticité, ses interactions avec le reste du système et sa capacité à provoquer des effets en cascade. Une fragilité mineure en apparence peut devenir décisive si elle touche un point central. Cette hiérarchisation des risques vous permet de concentrer vos ressources là où elles comptent vraiment, et de construire une cartographie des risques directement exploitable par vos équipes dirigeantes.",
  },
  {
    title: "RECOMMANDER",
    seoTitle: "Recommandations et plan d’action pour décider sereinement",
    hook: "Des pistes d’action concrètes, adaptées à votre réalité.",
    details: "Une analyse n’a de valeur que si elle aide à décider. Nous transformons nos constats en un plan d’action concret, hiérarchisé et adapté à votre environnement, à vos moyens et à vos contraintes. Nos recommandations visent à réduire vos fragilités, renforcer la résilience de votre organisation et sécuriser vos décisions stratégiques. Chaque action est justifiée et reliée aux enjeux identifiés : vous savez quoi faire, pourquoi, et dans quel ordre. C’est le cœur de notre approche d’aide à la décision.",
  },
];

export default function AuditRemusPage() {
  return (
    <main className="audit-remus-page">

      {/* HERO AUDIT */}
      <section className="audit-premium-hero">
        <div className="audit-premium-copy">

          <div className="audit-kicker">
            AUDIT REMUS
          </div>

          <span className="audit-small-line" />

          <h1>
            Une lecture systémique.
            <strong>Des décisions plus justes.</strong>
          </h1>

          <p className="audit-intro">
            L’Audit REMUS, soutenu par le moteur LIMES, révèle ce que les analyses classiques ne voient pas : les interactions, les incohérences, les fragilités et les dynamiques qui façonnent réellement vos systèmes.
          </p>

          <Link href="/contact" className="audit-main-button">
            DEMANDER UN AUDIT
            <span>→</span>
          </Link>

        </div>

        {/* VISUEL */}
        <div className="audit-premium-visual">

          <Image
            src="/visuals/audit-remus-v2-bg.webp"
            alt="Architecture systémique REMUS — interactions, dépendances, données, processus et humain & IA"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 55vw"
            className="audit-cube-image"
          />

          <div className="audit-visual-light" />

        </div>
      </section>


      {/* APPROCHE */}
      <section className="audit-approach">

        <div className="audit-section-heading">
          <span>NOTRE APPROCHE</span>
          <div />
        </div>

        <div className="audit-steps">

          {steps.map((step) => (
            <AuditFlipCard key={step.title} {...step} />
          ))}

        </div>


        {/* BLOC FINAL */}
        <div className="audit-final-block">

          <div className="audit-final-copy">

            <span>
              UNE LECTURE GLOBALE
            </span>

            <h2>
              Comprendre les interactions.
              <br />
              Identifier les fragilités.
              <br />
              <strong>
                Décider avec justesse.
              </strong>
            </h2>

            <p>
              REMUS analyse le système dans son ensemble afin de faire
              apparaître les dépendances, les signaux faibles et les
              dynamiques qui ne sont pas visibles lorsqu’on observe
              chaque élément séparément.
            </p>

          </div>

          <Link
            href="/contact"
            className="audit-main-button"
          >
            PARLER DE VOTRE SYSTÈME
            <span>→</span>
          </Link>

        </div>

      </section>

    </main>
  );
}
