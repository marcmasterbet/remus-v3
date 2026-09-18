# REMUS SYSTEMS — préparation mise en ligne

## Déjà intégré
- Domaine de référence : https://remussystems.fr
- Favicon REMUS : `public/favicon.png`, `public/favicon.ico`, `public/apple-touch-icon.png`
- Mentions légales
- Politique de confidentialité
- CGU
- Page Gestion des cookies
- Bandeau de consentement Accepter / Refuser / Personnaliser
- Google Analytics 4 préparé avec consentement (G-1GSNLQ0864)
- Sitemap et robots sur remussystems.fr
- Formulaire de contact serveur préparé pour Resend
- Case d'information RGPD sur le formulaire
- Honeypot anti-spam basique

## À faire avant / au moment de la mise en ligne

### 1. Resend
Créer/configurer le domaine `remussystems.fr` dans Resend et ajouter les entrées DNS demandées.

Dans Vercel > Project > Settings > Environment Variables, ajouter :

- `RESEND_API_KEY` : clé API Resend
- `CONTACT_TO_EMAIL` : `contact@remussystems.fr`
- `CONTACT_FROM_EMAIL` : par exemple `REMUS Systems <site@remussystems.fr>` après validation du domaine dans Resend

Ne jamais mettre la clé Resend directement dans le code ou dans une variable `NEXT_PUBLIC_*`.

### 2. Immatriculation
Dès réception de l'immatriculation, remplacer dans `app/mentions-legales/page.tsx` :
- SIREN / SIRET
- RCS et ville d'immatriculation
- la mention « en cours d'immatriculation »

Mettre également à jour `app/confidentialite/page.tsx` si nécessaire.

### 3. Google Analytics et cookies
Google Analytics 4 est intégré avec l’identifiant `G-1GSNLQ0864`.

La balise Google n’est chargée qu’après consentement à la catégorie « Mesure d’audience ».
Le visiteur peut accepter, refuser, personnaliser puis modifier son choix depuis le footer ou la page `/cookies`.

Variable Vercel conseillée :
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` : `G-1GSNLQ0864`

Aucun traceur publicitaire n’est activé par cette intégration.

## Favicon REMUS
Le favicon final est basé sur le visuel REMUS noir/cuivre validé.

Fichiers installés :
- `app/icon.png`
- `app/favicon.ico`
- `public/favicon.ico`
- `public/favicon.png`
- `public/apple-touch-icon.png`

Next.js détecte automatiquement `app/icon.png` et `app/favicon.ico`.
