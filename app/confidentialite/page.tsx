import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et protection des données personnelles de REMUS SYSTEMS.",
  alternates: { canonical: "/confidentialite" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="content-page legal-page">
      <section className="page-hero compact">
        <div className="eyebrow">CONFIDENTIALITÉ</div>
        <h1>PROTECTION DES DONNÉES</h1>
        <p>REMUS SYSTEMS limite la collecte de données au strict nécessaire au fonctionnement du site et au traitement des demandes.</p>
      </section>

      <section className="legal-copy">
        <h2>RESPONSABLE DU TRAITEMENT</h2>
        <p>
          Le responsable du traitement est <strong>REMUS SYSTEMS</strong>, SAS en cours d’immatriculation,
          11 rue de la Vieille Ill, 67640 Fegersheim, France.
        </p>
        <p>Contact relatif aux données personnelles : <a href="mailto:contact@remussystems.fr">contact@remussystems.fr</a>.</p>

        <h2>DONNÉES COLLECTÉES</h2>
        <p>
          Lorsqu’un visiteur utilise le formulaire de contact, les données susceptibles d’être traitées sont son nom,
          son entreprise lorsqu’elle est renseignée, son adresse e-mail et le contenu de son message.
        </p>
        <p>Le site ne propose actuellement ni newsletter, ni espace client, ni création de compte utilisateur.</p>

        <h2>FINALITÉS ET BASES JURIDIQUES</h2>
        <p>
          Les données transmises via le formulaire sont utilisées uniquement pour recevoir la demande, y répondre,
          assurer son suivi et, lorsque cela est pertinent, préparer des échanges précontractuels.
        </p>
        <p>
          Selon la nature de la demande, le traitement repose sur l’intérêt légitime de REMUS SYSTEMS à répondre aux sollicitations
          qui lui sont adressées ou sur l’exécution de mesures précontractuelles demandées par la personne concernée.
        </p>

        <h2>DESTINATAIRES ET PRESTATAIRES</h2>
        <p>
          Les informations sont destinées aux personnes habilitées au sein de REMUS SYSTEMS. Le site est hébergé par Vercel.
          L’envoi technique des messages du formulaire est prévu via le service Resend. Ces prestataires peuvent traiter certaines
          données techniques nécessaires à la fourniture de leurs services conformément à leurs propres engagements de protection des données.
        </p>
        <p>
          Vercel : <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer">politique de confidentialité</a><br />
          Resend : <a href="https://resend.com/legal" target="_blank" rel="noopener noreferrer">informations légales et confidentialité</a>
        </p>

        <h2>TRANSFERTS HORS DE L’ESPACE ÉCONOMIQUE EUROPÉEN</h2>
        <p>
          Certains prestataires techniques sont établis aux États-Unis. Lorsque des données sont transférées hors de l’Espace économique européen,
          ces transferts doivent être encadrés par les mécanismes de protection prévus par la réglementation applicable et par les engagements contractuels des prestataires concernés.
        </p>

        <h2>DURÉE DE CONSERVATION</h2>
        <p>
          Les demandes de contact sont conservées pendant le temps nécessaire à leur traitement et à leur suivi. Lorsque les échanges relèvent
          d’une prospection ou d’une relation précontractuelle sans suite, les données ne sont pas destinées à être conservées au-delà de la durée nécessaire,
          et au maximum trois ans à compter du dernier contact pertinent, sauf obligation légale imposant une durée différente.
        </p>

        <h2>VOS DROITS</h2>
        <p>
          Conformément à la réglementation applicable, vous pouvez, selon votre situation, demander l’accès à vos données,
          leur rectification, leur effacement, la limitation du traitement, vous opposer à certains traitements ou exercer votre droit à la portabilité.
        </p>
        <p>
          Pour exercer vos droits : <a href="mailto:contact@remussystems.fr">contact@remussystems.fr</a>.
          Vous disposez également du droit d’introduire une réclamation auprès de la CNIL.
        </p>

        <h2>MESURE D’AUDIENCE, COOKIES ET TRACEURS</h2>
        <p>
          REMUS SYSTEMS utilise Google Analytics 4 afin de mesurer la fréquentation du site, uniquement lorsque le visiteur
          a donné son consentement. La balise Google Analytics n’est pas chargée avant cet accord. Les finalités publicitaires
          de Google ne sont pas activées par REMUS SYSTEMS dans cette intégration.
        </p>
        <p>
          Le consentement peut être refusé ou retiré à tout moment depuis la page <a href="/cookies">Gestion des cookies</a>
          ou grâce au lien de paramétrage présent dans le pied de page.
        </p>

        <h2>DONNÉES DE MESURE D’AUDIENCE</h2>
        <p>
          Après consentement, Google Analytics peut traiter des informations techniques et de navigation telles que les pages consultées,
          les événements de navigation, le type d’appareil, des informations de navigateur et la provenance de la visite afin de produire
          des statistiques d’utilisation du site. Google agit en qualité de prestataire pour ce service et peut également être soumis à ses propres obligations.
        </p>
        <p>
          Google : <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">politique de confidentialité</a>.
        </p>
      </section>
    </main>
  );
}
