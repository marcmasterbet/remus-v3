import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "../../lib/seo";
import { CARD_PATH, CONTACT_CARD } from "../../lib/contact-card";
import CardActions from "../../components/CardActions";

/**
 * Page ouverte par le QR code des cartes de visite.
 * L'adresse /carte est imprimée dans le QR code : ne jamais la renommer ni la supprimer.
 */
export const metadata: Metadata = pageMetadata({
  title: "Carte de visite",
  description: "Enregistrez le contact REMUS Systems ou écrivez-nous.",
  path: CARD_PATH,
  noindex: true,
});

export default function CartePage() {
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
          vcardHref={`${CARD_PATH}/remus-systems.vcf`}
          contactName={`${CONTACT_CARD.firstName} ${CONTACT_CARD.lastName}`}
        />

        <footer className="carte-footer">
          <span className="carte-footer-name">
            {CONTACT_CARD.firstName} {CONTACT_CARD.lastName} — {CONTACT_CARD.jobTitle}
          </span>
          {CONTACT_CARD.phone ? (
            <a href={`tel:${CONTACT_CARD.phone.replace(/\s/g, "")}`}>{CONTACT_CARD.phoneDisplay}</a>
          ) : null}
          <a href={`mailto:${CONTACT_CARD.email}`}>{CONTACT_CARD.email}</a>
          <a href="/">remussystems.fr</a>
        </footer>
      </div>
    </main>
  );
}
