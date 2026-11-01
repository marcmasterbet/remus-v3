import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "../../../lib/seo";
import { ALEXANDRE_CARD_PATH, ALEXANDRE_CONTACT_CARD } from "../../../lib/contact-card-alexandre";
import CardActions from "../../../components/CardActions";

/**
 * Page ouverte par le QR code de la carte de visite d'Alexandre Flamand.
 * L'adresse /carte/alexandre est imprimée dans le QR code : ne jamais la renommer ni la supprimer.
 */
export const metadata: Metadata = pageMetadata({
  title: "Carte de visite — Alexandre Flamand",
  description: "Enregistrez le contact d'Alexandre Flamand (REMUS Systems) ou écrivez-nous.",
  path: ALEXANDRE_CARD_PATH,
  noindex: true,
});

export default function CarteAlexandrePage() {
  return (
    <main className="carte-page">
      <Image
        className="carte-bg"
        src="/visuals/remus-v2-earth-network-hd.webp"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        quality={80}
      />

      <div className="carte-content">
        <header className="carte-intro">
          <p className="carte-kicker">REMUS SYSTEMS</p>
          <span className="carte-rule" aria-hidden="true" />
          <h1>
            Quand les systèmes
            <br />
            <strong>se rencontrent.</strong>
          </h1>
          <p className="carte-lead">
            Merci pour votre intérêt. Enregistrez nos coordonnées ou
            écrivez-nous : nous revenons vers vous rapidement.
          </p>
        </header>

        <CardActions
          vcardHref={`${ALEXANDRE_CARD_PATH}/alexandre-flamand.vcf`}
          contactName={`${ALEXANDRE_CONTACT_CARD.firstName} ${ALEXANDRE_CONTACT_CARD.lastName}`}
        />

        <footer className="carte-footer">
          <a href="/">remussystems.fr</a>
        </footer>
      </div>
    </main>
  );
}
