"use client";

import { useState, type KeyboardEvent } from "react";

type AuditFlipCardProps = {
  title: string;
  seoTitle: string;
  hook: string;
  details: string;
};

export default function AuditFlipCard({ title, seoTitle, hook, details }: AuditFlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => setFlipped((value) => !value);
  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  };

  return (
    <article
      className={`audit-step audit-flip${flipped ? " is-flipped" : ""}`}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${title} — ${flipped ? "revenir au résumé" : "afficher le détail"}`}
      onClick={toggle}
      onKeyDown={onKeyDown}
    >
      <div className="audit-flip-inner">
        <div className="audit-flip-face audit-flip-front" aria-hidden={flipped}>
          <h2 className="audit-step-label">{title}</h2>
          <h3 className="audit-step-seo">{seoTitle}</h3>
          <p className="audit-step-hook">{hook}</p>
          <span className="audit-flip-cue">
            En savoir plus <span aria-hidden="true">↻</span>
          </span>
        </div>

        <div className="audit-flip-face audit-flip-back" aria-hidden={!flipped}>
          <span className="audit-flip-back-label">{title}</span>
          <p className="audit-flip-details">{details}</p>
          <span className="audit-flip-cue">
            <span aria-hidden="true">↺</span> Retour
          </span>
        </div>
      </div>
    </article>
  );
}
