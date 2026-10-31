/**
 * Coordonnées de la carte de visite REMUS Systems.
 * Modifier ici met à jour la fiche contact téléchargée depuis le QR code,
 * SANS changer le QR code (il pointe toujours vers CARD_URL).
 */
import { SITE_URL } from "./seo";

/** Adresse fixe encodée dans le QR code des cartes de visite : ne jamais la modifier. */
export const CARD_PATH = "/carte";
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
