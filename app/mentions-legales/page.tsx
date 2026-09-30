import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site REMUS SYSTEMS.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: true, follow: true },
};

export default function LegalPage() {
  return (
    <main className="content-page legal-page">
      <section className="page-hero compact">
        <div className="eyebrow">INFORMATIONS LÉGALES</div>
        <h1>MENTIONS LÉGALES</h1>
        <p>Informations relatives à l’éditeur, à la direction de la publication, à l’hébergement et au site.</p>
      </section>

      <section className="legal-copy">
        <h2>ÉDITEUR DU SITE</h2>
        <p><strong>Dénomination sociale :</strong> REMUS SYSTEMS</p>
        <p><strong>Forme juridique :</strong> Société par actions simplifiée unipersonnelle (SASU)</p>
        <p><strong>Capital social :</strong> 2 000 €</p>
        <p><strong>Siège social :</strong> 11 rue de la Vieille Ill, 67640 Fegersheim, France</p>
        <p><strong>RCS :</strong> Strasbourg — immatriculation en cours</p>
        <p><strong>SIREN :</strong> en cours d’attribution</p>
        <p><strong>SIRET :</strong> en cours d’attribution</p>
        <p><strong>TVA intracommunautaire :</strong> non attribuée à ce jour</p>
        <p><strong>Présidente :</strong> Séverine KAYSER</p>
        <p><strong>Adresse électronique :</strong> <a href="mailto:contact@remus-systems.com">contact@remus-systems.com</a></p>

        <h2>DIRECTION DE LA PUBLICATION</h2>
        <p><strong>Directrice de la publication :</strong> Séverine KAYSER, Présidente de REMUS SYSTEMS.</p>

        <h2>HÉBERGEMENT</h2>
        <p>Le site <strong>www.remussystems.fr</strong> est hébergé par :</p>
        <p>
          <strong>Vercel Inc.</strong><br />
          440 N Barranca Avenue #4133<br />
          Covina, CA 91723<br />
          États-Unis<br />
          Téléphone : +1 559 288 7060
        </p>
        <p>
          <a href="https://vercel.com/legal" target="_blank" rel="noopener noreferrer">Informations légales de Vercel</a>
        </p>

        <h2>MESSAGERIE</h2>
        <p>La messagerie professionnelle associée à l’adresse <strong>contact@remus-systems.com</strong> est fournie par IONOS.</p>

        <h2>SITE WEB</h2>
        <p><strong>Développement et gestion du site web :</strong> Marc Bretzner.</p>

        <h2>PROPRIÉTÉ INTELLECTUELLE</h2>
        <p>
          Sauf mention contraire, les textes, analyses, illustrations, éléments graphiques, signes distinctifs, logos,
          mises en page et autres contenus publiés sur ce site appartiennent à REMUS SYSTEMS ou sont utilisés avec les droits nécessaires.
          Toute utilisation doit respecter les droits de propriété intellectuelle applicables.
        </p>

        <h2>INFORMATIONS PUBLIÉES</h2>
        <p>
          REMUS SYSTEMS s’efforce de maintenir les informations du site exactes et à jour. Les contenus publiés ont une vocation
          informative et institutionnelle. Ils ne constituent ni une offre contractuelle, ni un engagement de résultat, ni un conseil
          adapté à une situation particulière. Toute prestation fait l’objet d’échanges et, le cas échéant, de documents contractuels distincts.
        </p>

        <h2>LIENS EXTERNES</h2>
        <p>
          Le site peut contenir des liens vers des ressources tierces. REMUS SYSTEMS ne contrôle pas en permanence ces ressources
          et ne peut être tenue responsable de leur contenu, de leur disponibilité ou de leurs propres pratiques.
        </p>

        <p className="legal-note">
          <strong>Immatriculation en cours :</strong> les numéros SIREN, SIRET, RCS définitif et, le cas échéant, le numéro de TVA
          intracommunautaire seront complétés dès leur attribution.
        </p>
      </section>
    </main>
  );
}
