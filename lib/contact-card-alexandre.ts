/**
 * Coordonnées de la carte de visite d'Alexandre Flamand.
 * Modifier ici met à jour la fiche contact téléchargée depuis son QR code,
 * SANS changer le QR code (il pointe toujours vers ALEXANDRE_CARD_URL).
 * La carte de Séverine est dans lib/contact-card.ts (page /carte/severine).
 */
import { SITE_URL } from "./seo";

/** Adresse fixe encodée dans le QR code d'Alexandre : ne jamais la modifier. */
export const ALEXANDRE_CARD_PATH = "/carte/alexandre";
export const ALEXANDRE_CARD_URL = `${SITE_URL}${ALEXANDRE_CARD_PATH}`;

export const ALEXANDRE_CONTACT_CARD = {
  firstName: "Alexandre",
  lastName: "Flamand",
  jobTitle: "Associé",
  organization: "REMUS Systems",
  tagline: "Quand les systèmes se rencontrent.",
  email: "contact@remussystems.fr",
  /** Numéro au format international. Laisser vide pour ne pas l'afficher. */
  phone: "+33 6 65 19 17 24",
  /** Numéro tel qu'affiché. */
  phoneDisplay: "06 65 19 17 24",
  website: `${SITE_URL}/`,
  /** Lien de la page LinkedIn (facultatif). */
  linkedin: "",
};
