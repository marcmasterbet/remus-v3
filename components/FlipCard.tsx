"use client";

import { useState, type KeyboardEvent } from "react";

export type FlipCardContent = {
  /** Nom court affiché en haut de la carte (H2). */
  title: string;
  /** Titre SEO affiché sous le nom (H3). Facultatif. */
  seoTitle?: string;
  /** Phrase d'accroche visible avant le clic. */
  hook: string;
  /** Texte complet affiché au dos. Sans texte, la carte reste fixe. */
  details?: string;
};

type FlipCardProps = FlipCardContent & {
  /** Classe de la page (ex. "audit-step", "limes-capability", "solution-card"). */
  className?: string;
  /** Niveau du titre de la carte : 2 (H2 + H3 SEO, défaut) ou 3 (H3 + H4 SEO). */
  headingLevel?: 2 | 3;
};

/**
 * Carte qui se retourne au clic (ou Entrée / Espace) :
 * recto = nom + titre SEO + accroche, verso = texte détaillé.
 * Le texte du verso est présent dans le HTML dès le départ (lisible par Google).
 */
export default function FlipCard({ title, seoTitle, hook, details, className = "", headingLevel = 2 }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const Label = headingLevel === 3 ? "h3" : "h2";
  const Seo = headingLevel === 3 ? "h4" : "h3";

  if (!details) {
    return (
      <article className={`flip-card is-static ${className}`}>
        <span className="flip-card-frame" aria-hidden="true" />
        <div className="flip-card-inner">
          <div className="flip-card-face flip-card-front">
            <Label className="flip-card-label">{title}</Label>
            {seoTitle && <Seo className="flip-card-seo">{seoTitle}</Seo>}
            <p className="flip-card-hook">{hook}</p>
          </div>
        </div>
      </article>
    );
  }

  const toggle = () => setFlipped((value) => !value);
  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  };

  return (
    <article
      className={`flip-card ${className}${flipped ? " is-flipped" : ""}`}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${title} — ${flipped ? "revenir au résumé" : "afficher le détail"}`}
      onClick={toggle}
      onKeyDown={onKeyDown}
    >
      <span className="flip-card-frame" aria-hidden="true" />
      <div className="flip-card-inner">
        <div className="flip-card-face flip-card-front" aria-hidden={flipped}>
          <Label className="flip-card-label">{title}</Label>
          {seoTitle && <Seo className="flip-card-seo">{seoTitle}</Seo>}
          <p className="flip-card-hook">{hook}</p>
          <span className="flip-card-cue">
            En savoir plus <span aria-hidden="true">↻</span>
          </span>
        </div>

        <div className="flip-card-face flip-card-back" aria-hidden={!flipped}>
          <span className="flip-card-back-label">{title}</span>
          <p className="flip-card-details">{details}</p>
          <span className="flip-card-cue">
            <span aria-hidden="true">↺</span> Retour
          </span>
        </div>
      </div>
    </article>
  );
}
