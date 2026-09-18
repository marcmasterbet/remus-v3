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
        <p>Informations relatives à l’éditeur, à la publication, à l’hébergement et à la réalisation du site.</p>
      </section>

      <section className="legal-copy">
        <h2>ÉDITEUR DU SITE</h2>
        <p><strong>Dénomination :</strong> REMUS SYSTEMS</p>
        <p><strong>Forme juridique :</strong> Société par actions simplifiée (SAS), en cours d’immatriculation</p>
        <p><strong>Capital social :</strong> 2 000 €</p>
        <p><strong>Siège social :</strong> 11 rue de la Vieille Ill, 67640 Fegersheim, France</p>
        <p><strong>SIREN / SIRET :</strong> en cours d’immatriculation</p>
        <p><strong>RCS :</strong> en cours d’immatriculation</p>
        <p><strong>Adresse électronique :</strong> <a href="mailto:contact@remussystems.fr">contact@remussystems.fr</a></p>

        <h2>DIRECTION DE LA PUBLICATION</h2>
        <p><strong>Directrice de la publication :</strong> Séverine KAYSER, Présidente de REMUS SYSTEMS.</p>

        <h2>HÉBERGEMENT</h2>
        <p>Le site est hébergé par :</p>
        <p>
          <strong>Vercel Inc.</strong><br />
          440 N Barranca Avenue #4133<br />
          Covina, CA 91723<br />
          États-Unis
        </p>
        <p>
          Informations légales de l’hébergeur :{" "}
          <a href="https://vercel.com/legal" target="_blank" rel="noopener noreferrer">vercel.com/legal</a>
        </p>

        <h2>CONCEPTION ET RÉALISATION</h2>
        <p><strong>Conception et réalisation du site :</strong> Marc Bretzner – EI BRETZNER MARC.</p>

        <h2>PROPRIÉTÉ INTELLECTUELLE</h2>
        <p>
          Sauf mention contraire, l’ensemble des contenus présents sur ce site, notamment les textes, éléments graphiques,
          signes distinctifs, mises en page et créations visuelles, est protégé par les règles applicables à la propriété intellectuelle.
          Toute reproduction, représentation, adaptation ou exploitation non autorisée est interdite.
        </p>

        <h2>RESPONSABILITÉ</h2>
        <p>
          REMUS SYSTEMS s’efforce de fournir des informations exactes et à jour. Les contenus du site sont fournis à titre informatif
          et ne constituent pas, à eux seuls, un engagement contractuel. REMUS SYSTEMS ne saurait être tenue responsable d’une
          utilisation du site contraire à sa destination ou des conséquences liées à des services tiers accessibles par lien.
        </p>

        <p className="legal-note">
          <strong>À mettre à jour dès l’immatriculation :</strong> SIREN, SIRET et RCS définitifs.
        </p>
      </section>
    </main>
  );
}
