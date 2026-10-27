# REMUS SYSTEMS — préparation mise en ligne

## Déjà intégré
- Domaine de référence : https://www.remussystems.fr (version www, utilisée partout : canonical, sitemap, robots, Open Graph)
- Favicon REMUS : `public/favicon.png`, `public/favicon.ico`, `public/apple-touch-icon.png`
- Mentions légales
- Politique de confidentialité
- CGU
- Page Gestion des cookies
- Bandeau de consentement Accepter / Refuser / Personnaliser
- Google Analytics 4 préparé avec consentement (G-1GSNLQ0864)
- Sitemap et robots sur remussystems.fr
- Formulaire de contact serveur via le SMTP IONOS de contact@remussystems.fr
- Limite anti-abus : 5 envois par IP toutes les 10 minutes
- Case d'information RGPD sur le formulaire
- Honeypot anti-spam basique

## À faire avant / au moment de la mise en ligne

### 1. Formulaire de contact (SMTP IONOS)
Le formulaire envoie les messages avec le compte e-mail IONOS de REMUS.

Dans Vercel > Project > Settings > Environment Variables, ajouter :

- `SMTP_USER` : `contact@remussystems.fr` (adresse IONOS qui envoie)
- `SMTP_PASSWORD` : mot de passe de cette boîte IONOS
- `CONTACT_TO_EMAIL` : `contact@remussystems.fr` (adresse qui reçoit les demandes)
- `SMTP_HOST` (facultatif) : `smtp.ionos.fr` par défaut
- `SMTP_PORT` (facultatif) : `465` par défaut

Ne jamais mettre le mot de passe dans le code ni dans une variable `NEXT_PUBLIC_*`.
Après ajout des variables, redéployer le projet puis tester un envoi depuis /contact.

### 1 bis. Domaine www
Dans Vercel > Project > Settings > Domains, définir `www.remussystems.fr` comme domaine principal
et `remussystems.fr` en redirection 308 vers `www.remussystems.fr`.

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
