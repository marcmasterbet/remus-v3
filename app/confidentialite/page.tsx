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
        <p>REMUS SYSTEMS traite uniquement les données nécessaires au fonctionnement du site, aux échanges professionnels et à la mesure d’audience consentie.</p>
      </section>

      <section className="legal-copy">
        <h2>RESPONSABLE DU TRAITEMENT</h2>
        <p>
          <strong>REMUS SYSTEMS</strong>, SASU au capital de 2 000 €, dont le siège social est situé 11 rue de la Vieille Ill,
          67640 Fegersheim, France, est responsable des traitements réalisés au moyen du site.
        </p>
        <p>Contact pour toute question relative aux données personnelles : <a href="mailto:contact@remus-systems.com">contact@remus-systems.com</a>.</p>
        <p>REMUS SYSTEMS n’a pas désigné de délégué à la protection des données (DPO) à ce jour.</p>

        <h2>DONNÉES COLLECTÉES</h2>
        <p>
          Le formulaire de contact peut recueillir : nom, entreprise, adresse e-mail, numéro de téléphone lorsqu’il est renseigné,
          ainsi que le contenu du message. Des données techniques et de navigation peuvent également être traitées lorsque vous
          acceptez la mesure d’audience Google Analytics.
        </p>
        <p>Le site ne propose actuellement ni newsletter, ni espace client, ni création de compte, ni commande ou paiement en ligne.</p>

        <h2>FINALITÉS ET BASES JURIDIQUES</h2>
        <p>
          Les données du formulaire sont utilisées pour recevoir les demandes, y répondre et assurer le suivi des échanges professionnels.
          Selon la nature de la demande, ces traitements reposent sur l’intérêt légitime de REMUS SYSTEMS à répondre aux sollicitations
          professionnelles ou sur l’exécution de mesures précontractuelles demandées par l’interlocuteur.
        </p>
        <p>La mesure d’audience Google Analytics repose sur votre consentement et reste désactivée tant que vous ne l’avez pas acceptée.</p>

        <h2>DESTINATAIRES ET PRESTATAIRES TECHNIQUES</h2>
        <p>Les données sont accessibles uniquement aux personnes habilitées au sein de REMUS SYSTEMS et, lorsque cela est techniquement nécessaire, à ses prestataires.</p>
        <p>
          <strong>Vercel</strong> assure l’hébergement du site. <strong>IONOS</strong> fournit la messagerie professionnelle de REMUS SYSTEMS.
          Le formulaire du site utilise actuellement <strong>Resend</strong> comme service technique d’acheminement afin de transmettre
          les demandes à la messagerie de REMUS SYSTEMS. <strong>Google Analytics</strong> intervient uniquement après consentement pour la mesure d’audience.
        </p>

        <h2>TRANSFERTS HORS DE L’ESPACE ÉCONOMIQUE EUROPÉEN</h2>
        <p>
          Certains prestataires techniques peuvent traiter des données depuis des pays situés hors de l’Espace économique européen.
          Lorsque cela est nécessaire, ces transferts doivent reposer sur les mécanismes et garanties prévus par la réglementation applicable.
        </p>

        <h2>DURÉES DE CONSERVATION</h2>
        <p>
          Les demandes de contact sont conservées pendant le temps nécessaire à leur traitement et à leur suivi. Pour les échanges de prospection
          ou précontractuels n’aboutissant pas à une relation commerciale, les données sont conservées au maximum trois ans à compter du dernier
          contact pertinent, sauf obligation légale ou nécessité particulière justifiant une durée différente.
        </p>
        <p>Les préférences relatives aux cookies sont conservées localement dans le navigateur jusqu’à leur modification ou suppression.</p>

        <h2>VOS DROITS</h2>
        <p>
          Selon les conditions prévues par la réglementation, vous disposez notamment de droits d’accès, de rectification, d’effacement,
          de limitation, d’opposition et, lorsque applicable, de portabilité de vos données. Vous pouvez également retirer à tout moment
          un consentement donné pour l’avenir.
        </p>
        <p>
          Pour exercer vos droits : <a href="mailto:contact@remus-systems.com">contact@remus-systems.com</a>. Vous pouvez également introduire
          une réclamation auprès de la CNIL si vous estimez que vos droits ne sont pas respectés.
        </p>

        <h2>COOKIES ET MESURE D’AUDIENCE</h2>
        <p>
          Google Analytics 4 est chargé uniquement après votre accord. Les finalités publicitaires ne sont pas activées dans l’intégration actuelle.
          Vous pouvez refuser ou retirer votre consentement à tout moment depuis la page <a href="/cookies">Gestion des cookies</a>.
        </p>

        <h2>SÉCURITÉ</h2>
        <p>
          REMUS SYSTEMS met en œuvre des mesures organisationnelles et techniques raisonnables destinées à protéger les données traitées via le site.
          Aucun système connecté à Internet ne pouvant offrir une sécurité absolue, ces mesures sont adaptées à la nature des traitements et aux risques identifiés.
        </p>

        <h2>MISE À JOUR</h2>
        <p>Cette politique peut évoluer afin de refléter les changements du site, des outils utilisés ou des obligations applicables.</p>
      </section>
    </main>
  );
}
