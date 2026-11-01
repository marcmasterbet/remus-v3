/**
 * Coordonnées de la carte de visite de Séverine Kayser.
 * Modifier ici met à jour la fiche contact téléchargée depuis son QR code,
 * SANS changer le QR code (il pointe toujours vers CARD_URL).
 * La carte d'Alexandre Flamand est dans lib/contact-card-alexandre.ts.
 */
import { SITE_URL } from "./seo";

/** Adresse fixe encodée dans le QR code de Séverine : ne jamais la modifier. */
export const CARD_PATH = "/carte/severine";
export const CARD_URL = `${SITE_URL}${CARD_PATH}`;

export const CONTACT_CARD = {
  firstName: "Séverine",
  lastName: "Kayser",
  jobTitle: "Présidente",
  organization: "REMUS Systems",
  tagline: "Quand les systèmes se rencontrent.",
  email: "contact@remussystems.fr",
  /** Numéro au format international, ex. "+33 6 12 34 56 78". Laisser vide pour ne pas l'afficher. */
  phone: "+33 6 33 79 32 12",
  /** Numéro tel qu'affiché sur la page. */
  phoneDisplay: "06 33 79 32 12",
  website: `${SITE_URL}/`,
  /** Lien de la page LinkedIn (facultatif). */
  linkedin: "",
};
