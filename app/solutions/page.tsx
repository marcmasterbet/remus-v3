import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";
import Link from "next/link";
import FlipCard, { type FlipCardContent } from "../../components/FlipCard";


export const metadata: Metadata = pageMetadata({
  title: "Solutions : sécurité, résilience, architectures",
  description: "REMUS Systems conçoit et intègre des architectures technologiques réunissant systèmes, données et expertise humaine pour les environnements critiques.",
  path: "/solutions",
});


const solutions: FlipCardContent[] = [
  {
    title: "SÉCURITÉ & RÉSILIENCE",
    seoTitle: "Sécurité, résilience et continuité d’activité",
    hook: "Préserver ce qui doit continuer à fonctionner.",
    details: "Une organisation résiliente n’est pas une organisation sans incident : c’est une organisation qui continue de fonctionner quand l’imprévu survient. Nous identifions les vulnérabilités, les dépendances sensibles et les points critiques de votre système afin d’anticiper les ruptures avant qu’elles ne se produisent. Panne technique, défaillance d’un fournisseur, perte d’une compétence clé : chaque scénario est étudié pour réduire son impact. Vous renforcez ainsi la continuité de votre activité et la résilience de votre organisation, tout en protégeant ce qui est vraiment essentiel.",
  },
  {
    title: "ARCHITECTURES MODULAIRES",
    seoTitle: "Architectures modulaires, interopérables et évolutives",
    hook: "Concevoir des systèmes capables d’évoluer.",
    details: "Un système rigide devient vite un frein. Nous concevons des architectures modulaires où chaque composant peut être ajouté, remplacé ou amélioré sans remettre en cause l’ensemble. Grâce à leur interopérabilité, vos outils, vos données et vos processus communiquent entre eux, même lorsqu’ils proviennent de sources différentes. Nouvelle réglementation, nouvelle technologie, nouveaux usages : votre système s’adapte au lieu de se reconstruire. Vous limitez les coûts de transformation et gardez la liberté de faire évoluer votre organisation à votre rythme.",
  },
  {
    title: "SUPERVISION INTELLIGENTE",
    seoTitle: "Supervision intelligente et pilotage en temps réel",
    hook: "Transformer l’information en compréhension.",
    details: "Les informations utiles existent souvent déjà, mais elles sont dispersées entre plusieurs outils, services ou sources. Notre supervision intelligente relie ces données, événements et signaux pour offrir une lecture claire et exploitable de votre système. Plutôt que de multiplier les tableaux de bord, vous disposez d’une vue consolidée qui met en avant ce qui demande votre attention. Résultat : vous détectez plus tôt les anomalies, comprenez plus vite leur origine et améliorez à la fois la rapidité et la qualité de vos décisions grâce à un pilotage en temps réel.",
  },
  {
    title: "DÉCISION AUGMENTÉE",
    seoTitle: "Décision augmentée : l’humain au cœur de l’analyse",
    hook: "Renforcer l’analyse sans remplacer l’humain.",
    details: "Face à des situations complexes, les meilleures décisions naissent de la rencontre entre l’expérience humaine et la puissance de l’analyse. Nous associons l’expertise de vos équipes, vos données et l’intelligence artificielle pour comparer différents scénarios, mesurer leurs conséquences et identifier les options les plus solides. L’IA apporte des éléments objectifs et une vision élargie ; l’humain apporte le jugement, le contexte et la responsabilité du choix final. Vous décidez avec davantage de précision, même dans des environnements incertains ou en forte évolution.",
  },
  {
    title: "SYSTÈMES ADAPTATIFS",
    seoTitle: "Des systèmes qui s’adaptent à vos contraintes opérationnelles",
    hook: "Faire évoluer la solution avec son environnement.",
    details: "Un système efficace aujourd’hui peut devenir inadapté demain. Nous concevons des solutions adaptatives capables de s’ajuster aux usages réels, aux contraintes opérationnelles et aux changements de contexte, sans perdre leur cohérence ni votre maîtrise. Les règles, les priorités et les paramètres évoluent selon les retours du terrain, tout en restant compréhensibles et contrôlables par vos équipes. Votre solution reste pertinente dans la durée, accompagne la croissance de votre organisation et vous évite des refontes coûteuses.",
  },
  {
    title: "GOUVERNANCE & ORCHESTRATION",
    seoTitle: "Gouvernance et orchestration des systèmes complexes",
    hook: "Faire travailler chaque composante dans la même direction.",
    details: "Plus une organisation est complexe, plus le risque est grand que chacun avance dans une direction différente. Nous structurons les responsabilités, les flux d’information, les règles d’interaction et les mécanismes d’arbitrage pour que vos équipes, vos outils et vos partenaires agissent de manière coordonnée. Cette gouvernance claire évite les doublons, les zones grises et les conflits de priorités. L’orchestration de l’ensemble garantit une vision commune, une action cohérente et une organisation capable de tenir le cap, même en période de changement.",
  },
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

      <section className="solutions-grid panel-shell">
        {solutions.map((item) => (
          <FlipCard key={item.title} className="solution-card" {...item} />
        ))}
      </section>

    </main>
  );
}
