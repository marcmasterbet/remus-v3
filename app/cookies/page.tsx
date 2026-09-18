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
        <p>Vous gardez le contrôle : Google Analytics reste bloqué tant que vous ne l’avez pas accepté.</p>
      </section>

      <section className="legal-copy">
        <h2>VOS PRÉFÉRENCES</h2>
        <p>
          Vous pouvez accepter, refuser ou modifier à tout moment l’utilisation des traceurs de mesure d’audience.
          Un refus n’empêche pas l’accès au site.
        </p>
        <div className="legal-cookie-action"><CookieSettingsButton /></div>

        <h2>TRACEURS UTILISÉS</h2>
        <div className="cookie-status-grid">
          <div className="cookie-status-card">
            <strong>Strictement nécessaires</strong>
            <span className="cookie-badge cookie-badge-on">TOUJOURS ACTIFS</span>
            <p>
              Ils servent notamment à mémoriser votre choix de confidentialité et au fonctionnement essentiel du site.
              Le choix est enregistré localement dans votre navigateur sous la clé <code>remus_cookie_consent_v1</code>.
            </p>
          </div>
          <div className="cookie-status-card">
            <strong>Mesure d’audience</strong>
            <span className="cookie-badge cookie-badge-optional">SUR CONSENTEMENT</span>
            <p>
              Google Analytics 4 (identifiant de mesure G-1GSNLQ0864) permet à REMUS SYSTEMS de comprendre la fréquentation
              et la navigation sur le site. La balise Google n’est chargée qu’après votre accord.
            </p>
          </div>
          <div className="cookie-status-card">
            <strong>Publicité / marketing</strong>
            <span className="cookie-badge">NON UTILISÉ</span>
            <p>
              REMUS SYSTEMS n’active actuellement aucun Meta Pixel, LinkedIn Insight Tag ni dispositif de profilage publicitaire.
            </p>
          </div>
        </div>

        <h2>GOOGLE ANALYTICS</h2>
        <p>
          Lorsque vous autorisez la mesure d’audience, le site charge Google Analytics 4, un service fourni par Google.
          Des informations relatives à votre appareil, à votre navigation, aux pages consultées et à l’origine de la visite
          peuvent alors être traitées afin de produire des statistiques d’audience.
        </p>
        <p>
          Les catégories publicitaires de Google Consent Mode restent désactivées sur ce site : <strong>ad_storage</strong>,
          <strong> ad_user_data</strong> et <strong> ad_personalization</strong> sont maintenus sur « denied ».
        </p>

        <h2>BASE JURIDIQUE</h2>
        <p>
          Les traceurs de mesure d’audience Google Analytics sont activés sur la base de votre consentement.
          Vous pouvez retirer ce consentement aussi facilement que vous l’avez donné grâce au bouton de paramétrage disponible sur cette page et dans le pied de page.
        </p>

        <h2>DURÉE DU CHOIX</h2>
        <p>
          Votre préférence est conservée dans le stockage local de votre navigateur jusqu’à ce que vous la modifiiez,
          supprimiez les données de votre navigateur ou qu’une nouvelle version du mécanisme de consentement rende nécessaire un nouveau choix.
        </p>

        <h2>PRESTATAIRE ET TRANSFERTS</h2>
        <p>
          Google peut traiter certaines données en dehors de l’Espace économique européen selon les conditions et garanties applicables à ses services.
          Pour en savoir davantage, consultez la documentation et la politique de confidentialité de Google.
        </p>
        <p>
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Politique de confidentialité de Google</a>
        </p>

        <h2>CONTACT</h2>
        <p>Pour toute question relative aux cookies ou à la confidentialité : <a href="mailto:contact@remussystems.fr">contact@remussystems.fr</a>.</p>
      </section>
    </main>
  );
}
