import type { Metadata } from "next";
import CookieSettingsButton from "../../components/CookieSettingsButton";

export const metadata: Metadata = {
  title: "Gestion des cookies",
  description: "Informations et paramètres relatifs aux cookies et traceurs utilisés par REMUS SYSTEMS.",
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <main className="content-page legal-page">
      <section className="page-hero compact">
        <div className="eyebrow">CONFIDENTIALITÉ</div>
        <h1>GESTION DES COOKIES</h1>
        <p>La mesure d’audience Google Analytics reste bloquée tant que vous ne l’avez pas acceptée.</p>
      </section>

      <section className="legal-copy">
        <h2>GÉRER VOS PRÉFÉRENCES</h2>
        <p>Vous pouvez accepter, refuser ou modifier à tout moment votre choix. Le refus des traceurs de mesure d’audience n’empêche pas l’accès au site.</p>
        <div className="legal-cookie-action"><CookieSettingsButton /></div>

        <h2>TRACEURS UTILISÉS</h2>
        <div className="cookie-status-grid">
          <div className="cookie-status-card">
            <strong>Préférence de confidentialité</strong>
            <span className="cookie-badge cookie-badge-on">NÉCESSAIRE</span>
            <p>Le site mémorise localement votre choix de consentement afin de ne pas vous le redemander à chaque page.</p>
          </div>
          <div className="cookie-status-card">
            <strong>Mesure d’audience</strong>
            <span className="cookie-badge cookie-badge-optional">SUR CONSENTEMENT</span>
            <p>Google Analytics 4 permet de produire des statistiques de fréquentation et de navigation. Il n’est chargé qu’après votre accord.</p>
          </div>
          <div className="cookie-status-card">
            <strong>Publicité et profilage</strong>
            <span className="cookie-badge">NON UTILISÉS</span>
            <p>Le site n’active pas de traceur publicitaire dans sa configuration actuelle.</p>
          </div>
        </div>

        <h2>GOOGLE ANALYTICS 4</h2>
        <p>
          Après consentement, Google Analytics peut traiter des informations techniques et de navigation, telles que les pages consultées,
          les événements de navigation, le type d’appareil, des informations relatives au navigateur et la provenance de la visite.
        </p>
        <p>Dans l’intégration actuelle, les catégories publicitaires de Google Consent Mode restent désactivées.</p>

        <h2>BASE JURIDIQUE</h2>
        <p>Les traceurs Google Analytics sont activés sur la base de votre consentement. Vous pouvez retirer ce consentement à tout moment.</p>

        <h2>DURÉE DU CHOIX</h2>
        <p>
          Votre préférence est enregistrée localement dans votre navigateur jusqu’à ce que vous la modifiiez, supprimiez les données de votre navigateur
          ou qu’une évolution du mécanisme de consentement nécessite un nouveau choix.
        </p>

        <h2>CONTACT</h2>
        <p>Pour toute question relative aux cookies ou à la confidentialité : <a href="mailto:contact@remus-systems.com">contact@remus-systems.com</a>.</p>
      </section>
    </main>
  );
}
