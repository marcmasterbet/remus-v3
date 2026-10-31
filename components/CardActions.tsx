"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";

export default function CardActions({ vcardHref, contactName }: { vcardHref: string; contactName: string }) {
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Ouverture directe via un lien : /carte#message
  useEffect(() => {
    if (window.location.hash === "#message") setOpen(true);
  }, []);

  useEffect(() => {
    if (open && panelRef.current) {
      panelRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [open]);

  return (
    <>
      <div className="carte-actions">
        <a className="carte-action" href={vcardHref} download="REMUS-Systems.vcf" onClick={() => setSaved(true)}>
          <span className="carte-action-title">Enregistrer le contact</span>
          <span className="carte-action-text">
            {saved
              ? "Fiche téléchargée : ouvrez-la pour l’ajouter à vos contacts."
              : `Ajouter ${contactName} — REMUS Systems au répertoire de votre téléphone.`}
          </span>
          <span className="carte-action-cue" aria-hidden="true">↓</span>
        </a>

        <button
          type="button"
          className={`carte-action${open ? " is-open" : ""}`}
          aria-expanded={open}
          aria-controls="carte-panel"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="carte-action-title">Nous écrire</span>
          <span className="carte-action-text">Envoyer un message via notre formulaire de contact.</span>
          <span className="carte-action-cue" aria-hidden="true">{open ? "−" : "+"}</span>
        </button>

        <Link className="carte-action" href="/">
          <span className="carte-action-title">Découvrir REMUS Systems</span>
          <span className="carte-action-text">Accéder au site : audit, technologies, solutions et recherche.</span>
          <span className="carte-action-cue" aria-hidden="true">→</span>
        </Link>
      </div>

      <div id="carte-panel" ref={panelRef} className="carte-panel" hidden={!open}>
        {open && (
          <section aria-labelledby="carte-contact-title">
            <span className="carte-panel-kicker">FORMULAIRE DE CONTACT</span>
            <h2 id="carte-contact-title">Parlez-nous de votre projet.</h2>
            <ContactForm />
          </section>
        )}
      </div>
    </>
  );
}
