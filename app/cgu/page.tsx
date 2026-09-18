import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales d’utilisation",
  description: "Conditions générales d’utilisation du site REMUS SYSTEMS.",
  alternates: { canonical: "/cgu" },
  robots: { index: true, follow: true },
};

export default function CguPage() {
  return (
    <main className="content-page legal-page">
      <section className="page-hero compact">
        <div className="eyebrow">INFORMATIONS LÉGALES</div>
        <h1>CONDITIONS GÉNÉRALES D’UTILISATION</h1>
        <p>Règles applicables à la consultation et à l’utilisation du site remussystems.fr.</p>
      </section>

      <section className="legal-copy">
        <h2>1. OBJET</h2>
        <p>
          Les présentes conditions générales d’utilisation encadrent l’accès et l’utilisation du site remussystems.fr,
          site de présentation de REMUS SYSTEMS, de ses activités, technologies, travaux de recherche et moyens de contact.
        </p>

        <h2>2. ACCÈS AU SITE</h2>
        <p>
          L’accès au site est normalement libre et gratuit. REMUS SYSTEMS peut interrompre temporairement tout ou partie du site,
          notamment pour des raisons de maintenance, de sécurité ou d’évolution technique, sans que cette interruption ouvre droit à indemnisation.
        </p>

        <h2>3. UTILISATION DES CONTENUS</h2>
        <p>
          L’utilisateur s’engage à ne pas détourner le site de sa finalité, tenter d’en compromettre le fonctionnement,
          extraire abusivement ses contenus ou porter atteinte aux droits de REMUS SYSTEMS ou de tiers.
        </p>

        <h2>4. PROPRIÉTÉ INTELLECTUELLE</h2>
        <p>
          Les éléments du site sont protégés par les dispositions applicables à la propriété intellectuelle.
          Toute utilisation allant au-delà de la consultation personnelle et normale du site nécessite une autorisation préalable lorsqu’elle est requise par la loi.
        </p>

        <h2>5. LIENS EXTERNES</h2>
        <p>
          Le site peut proposer des liens vers des services ou sites tiers. REMUS SYSTEMS n’exerce pas de contrôle permanent sur ces services
          et ne peut être tenue responsable de leur contenu, de leur disponibilité ou de leurs pratiques propres.
        </p>

        <h2>6. DONNÉES PERSONNELLES</h2>
        <p>
          Les modalités de traitement des données personnelles sont détaillées dans la <a href="/confidentialite">Politique de confidentialité</a>.
          Les informations relatives aux cookies et traceurs sont disponibles sur la page <a href="/cookies">Gestion des cookies</a>.
        </p>

        <h2>7. DROIT APPLICABLE</h2>
        <p>
          Le site et les présentes conditions sont soumis au droit français, sous réserve des règles impératives éventuellement applicables à l’utilisateur.
        </p>
      </section>
    </main>
  );
}
