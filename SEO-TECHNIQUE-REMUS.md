# SEO technique REMUS Systems

Optimisations intégrées sans modification des textes visibles du site :

- métadonnées SEO uniques sur les pages principales ;
- balises canonical sur les pages principales et légales ;
- Open Graph et Twitter Cards ;
- directives robots index/follow + Googlebot ;
- URLs canoniques harmonisées sur `https://www.remussystems.fr` ;
- sitemap XML harmonisé sur le domaine final `www` ;
- robots.txt harmonisé sur le domaine final `www` ;
- données structurées Schema.org `Organization` + `WebSite` ;
- langue du document conservée en `fr` ;
- aucun paragraphe, titre visible, bouton ou slogan du site n’a été réécrit.

## Mise à jour — corrections SEO et techniques

- utilitaire commun `lib/seo.ts` : chaque page reçoit son propre canonical, Open Graph (URL exacte de la page) et Twitter Card ;
- correction critique : les articles et la page Références pointaient leur canonical vers l’accueil ;
- titres sans doublon de marque (« | REMUS SYSTEMS | REMUS Systems » supprimé) et longueurs adaptées (< 65 caractères) ;
- article en double `/references/ia-et-gouvernance-decisionnelle` supprimé et redirigé (301) vers `/references/ia-gouvernance-decisionnelle` ;
- données structurées `Article` + `BreadcrumbList` sur les 3 articles, `Organization` enrichie (logo, point de contact) ;
- sitemap complété (`/cgu`, `lastModified`), `robots.txt` excluant `/api/` ;
- page 404 en français, en `noindex` ;
- image de partage dédiée `public/og-image.jpg` (1200 × 630, ~190 Ko, avec logo et accroche) ;
- images de fond converties en WebP (jusqu’à −85 % de poids), image d’accueil via `next/image` prioritaire ;
- 27 images et 4 composants inutilisés supprimés (dossier `public` : ~31 Mo → 4 Mo) ;
- en-têtes : HSTS ajouté, en-tête `X-Powered-By` retiré ;
- titres Hn : une seule H1 par page, cartes Références en H2, cartes Audit en H2 + H3 SEO ;
- lien CGU ajouté au pied de page ;
- politique de confidentialité alignée sur l’envoi réel (IONOS, et non Resend).
