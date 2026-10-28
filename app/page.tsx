import type { Metadata } from "next";
import { pageMetadata } from "../lib/seo";
import Image from "next/image";
import Link from "next/link";
import FlipCard, { type FlipCardContent } from "../components/FlipCard";

export const metadata: Metadata = pageMetadata({
  title: "REMUS Systems | Systèmes complexes, architectures & résilience",
  description: "REMUS Systems conçoit des architectures technologiques avancées pour sécuriser, comprendre et piloter les systèmes complexes.",
  path: "/",
  absoluteTitle: true,
});

// Titres alternatifs proposés (pour éviter les doublons avec la page Solutions) :
// SÉCURITÉ & RÉSILIENCE -> PROTECTION DES SYSTÈMES CRITIQUES
// ARCHITECTURES MODULAIRES -> INTÉGRATION SUR MESURE
// SUPERVISION INTELLIGENTE -> ANALYSE EN TEMPS RÉEL
const features: FlipCardContent[] = [
  {
    title: "SÉCURITÉ & RÉSILIENCE",
    seoTitle: "Protection des systèmes critiques et des infrastructures sensibles",
    hook: "Protéger les systèmes qui ne peuvent pas s’arrêter.",
    details: "Certains systèmes n’ont pas le droit à la panne : réseaux d’énergie, chaînes de production, services de santé, centres de commandement… Nous concevons des solutions de protection avancée pour ces systèmes critiques et infrastructures sensibles. Cela passe par la sécurisation des accès et des données, la surveillance des comportements anormaux, la redondance des fonctions essentielles et des procédures de reprise rapide en cas d’incident. La cybersécurité est intégrée dès la conception, et non ajoutée après coup. Vos opérations restent protégées, même face à des menaces en constante évolution.",
  },
  {
    title: "ARCHITECTURES MODULAIRES",
    seoTitle: "Des systèmes sur mesure qui s’intègrent à votre existant",
    hook: "Des solutions qui s’intègrent à vos outils, sans tout reconstruire.",
    details: "Vous disposez déjà d’outils, de logiciels et de processus qui fonctionnent. Plutôt que de tout remplacer, nous concevons des systèmes qui s’intègrent à votre environnement existant et s’adaptent à vos enjeux opérationnels. Chaque module répond à un besoin précis et peut être déployé progressivement, ce qui limite les risques, les coûts et les perturbations pour vos équipes. Grâce à leur interopérabilité, nos solutions communiquent avec vos systèmes actuels et accompagnent leur évolution, au lieu de créer de nouvelles contraintes.",
  },
  {
    title: "SUPERVISION INTELLIGENTE",
    seoTitle: "Collecte et analyse de données en temps réel",
    hook: "Voir ce qui se passe, au moment où ça se passe.",
    details: "Pour bien décider, il faut une information à jour. Nos solutions assurent la collecte de données en temps réel depuis vos différentes sources : capteurs, logiciels métiers, équipements connectés ou remontées du terrain. Ces données sont ensuite filtrées, analysées et mises en forme pour faire ressortir l’essentiel, sans submerger vos équipes d’alertes inutiles. Vous disposez d’une vision fiable et instantanée de la situation, qui permet de réagir rapidement et de prendre des décisions éclairées, même lorsque les événements s’enchaînent.",
  },
  {
    title: "INNOVATION CONTINUE",
    seoTitle: "R&D appliquée et innovation technologique continue",
    hook: "Préparer dès aujourd’hui les solutions de demain.",
    details: "La technologie évolue vite, et les défis de vos missions aussi. C’est pourquoi une part importante de notre activité est consacrée à la R&D appliquée : nous testons de nouvelles approches, explorons les avancées de l’intelligence artificielle et transformons les résultats de nos recherches en améliorations concrètes. Cette démarche d’innovation continue profite directement à nos clients : leurs solutions bénéficient régulièrement de nouvelles fonctionnalités et restent à la pointe, sans qu’ils aient à changer d’outil. Anticiper, plutôt que subir.",
  },
];

export default function Home() {
  return (
    <main className="home-clean-v3">
      <Image
        className="home-clean-v3-bg"
        src="/visuals/remus-v2-earth-network-hd.webp"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        quality={80}
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
          {features.map((item) => (
            <FlipCard key={item.title} className="home-clean-v3-card" {...item} />
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
