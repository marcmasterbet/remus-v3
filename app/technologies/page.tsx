import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";
import Link from "next/link";
import FlipCard, { type FlipCardContent } from "../../components/FlipCard";


export const metadata: Metadata = pageMetadata({
  title: "Technologies | LIMES & systèmes complexes",
  description: "Découvrez LIMES, la technologie REMUS Systems qui associe intelligence humaine et artificielle pour analyser, décider et agir dans des systèmes complexes.",
  path: "/technologies",
});


const capabilities: FlipCardContent[] = [
  {
    title: "INTÉGRATION INTELLIGENTE",
    seoTitle: "Intégrer l’IA et l’expertise humaine",
    hook: "L’IA au service de vos experts, pas à leur place.",
    details: "L’intelligence artificielle est puissante, mais elle ne remplace pas l’expérience du terrain. LIMES combine les capacités de l’IA (rapidité, traitement de volumes massifs, détection de tendances) avec le jugement, l’intuition et la connaissance du contexte de vos équipes. Cette intelligence hybride est particulièrement précieuse dans les environnements critiques, où une erreur peut avoir des conséquences lourdes. Nous concevons des architectures où l’humain garde la maîtrise des décisions, tandis que l’IA lui apporte une vision plus complète et plus rapide de la situation.",
  },
  {
    title: "ANALYSE AVANCÉE",
    seoTitle: "Analyse de données complexes et contextualisée",
    hook: "Transformer vos données complexes en compréhension claire.",
    details: "Vos données sont nombreuses, dispersées et souvent difficiles à exploiter. Notre analyse de données avancée les croise, les structure et les remet dans leur contexte pour en extraire ce qui compte vraiment. Au-delà des chiffres, nous cherchons les liens, les tendances et les signaux faibles qui expliquent ce qui se passe et ce qui pourrait arriver. Le résultat : une compréhension fine de votre situation, lisible par vos équipes, et directement utilisable pour orienter vos choix. L’IA traite le volume, l’analyse apporte le sens.",
  },
  {
    title: "DÉCISION AUGMENTÉE",
    seoTitle: "Aide à la décision en temps réel grâce à l’IA",
    hook: "Décider plus vite, avec plus de certitude.",
    details: "Dans un environnement qui évolue en permanence, attendre une information complète n’est pas toujours possible. La décision augmentée vous fournit, en temps réel, une vision consolidée de la situation, des scénarios possibles et de leurs conséquences probables. Notre outil d’aide à la décision ne décide pas à votre place : il éclaire vos choix, signale les risques et propose des options argumentées. Vous gagnez en rapidité sans sacrifier la sécurité, et chaque décision repose sur des éléments vérifiables et compréhensibles.",
  },
  {
    title: "SYSTÈMES ADAPTATIFS",
    seoTitle: "Des solutions IA évolutives qui s’adaptent à votre activité",
    hook: "Des solutions qui apprennent et évoluent avec vous.",
    details: "Votre organisation change, vos besoins aussi. Nos systèmes adaptatifs apprennent de vos données, de vos retours et de l’évolution de votre environnement pour s’ajuster en continu. Plutôt qu’un outil figé qui devient obsolète, vous disposez d’une solution d’intelligence artificielle évolutive, qui gagne en pertinence au fil du temps. Cette capacité d’adaptation garantit une création de valeur durable : vos investissements restent utiles, vos processus s’améliorent et votre organisation gagne en résilience face aux imprévus.",
  },
];

export default function TechnologiesPage() {
  return (
    <main className="limes-page">
      <section className="limes-hero-exact">
        <div className="limes-copy-exact">
          <div className="limes-eyebrow">NOS TECHNOLOGIES</div>
          <div className="limes-rule" />

          <h1>
            L’intelligence
            <br />
            au service des
            <br />
            <span>systèmes</span>
            <br />
            <span>complexes.</span>
          </h1>

          <div className="limes-rule limes-rule--spaced" />

          <p>
            LIMES intègre l’intelligence humaine et artificielle
            <br />
            dans des architectures avancées pour analyser,
            <br />
            décider et agir avec justesse.
          </p>

          <div className="limes-actions">
            <Link
              href="/solutions"
              className="limes-button limes-button--copper"
            >
              DÉCOUVRIR NOS SOLUTIONS <span>→</span>
            </Link>

            <Link
              href="/a-propos"
              className="limes-button limes-button--outline"
            >
              NOTRE VISION <span>→</span>
            </Link>
          </div>
        </div>

        <div className="limes-signature">
          <strong>INTÉGRER. COMPRENDRE. AGIR.</strong>
          <span>L’INTELLIGENCE AU SERVICE DES SYSTÈMES COMPLEXES.</span>
        </div>
      </section>

      <section
        className="limes-capabilities"
        aria-label="Capacités LIMES"
      >
        {capabilities.map((item) => (
          <FlipCard key={item.title} className="limes-capability" {...item} />
        ))}

        <aside className="limes-capability-statement">
          <div className="limes-small-rule" />

          <strong>
            CONNECTER L’HUMAIN,
            <br />
            L’IA ET LA TECHNOLOGIE
            <br />
            POUR UN IMPACT RÉEL.
          </strong>
        </aside>
      </section>
    </main>
  );
}
