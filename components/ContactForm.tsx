"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setSending(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus(result.error || "Impossible d’envoyer votre demande pour le moment.");
        return;
      }

      form.reset();
      setStatus("Votre demande a bien été envoyée. Merci, nous vous répondrons dès que possible.");
    } catch {
      setStatus("Impossible d’envoyer votre demande pour le moment. Vous pouvez écrire à contact@remussystems.fr.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>
        Nom
        <input name="name" autoComplete="name" required />
      </label>
      <label>
        Entreprise
        <input name="company" autoComplete="organization" />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        Numéro de téléphone
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder="+33 6 00 00 00 00"
        />
      </label>
      <label>
        Votre besoin
        <textarea name="message" rows={7} required />
      </label>

      <div className="contact-honeypot" aria-hidden="true">
        <label>
          Site internet
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="contact-privacy-check">
        <input name="privacy" type="checkbox" required />
        <span>
          J’ai pris connaissance des modalités de traitement de mes données dans la{" "}
          <Link href="/confidentialite">politique de confidentialité</Link>.
        </span>
      </label>

      <button className="button button-copper" type="submit" disabled={sending}>
        {sending ? "ENVOI EN COURS…" : "ENVOYER LA DEMANDE →"}
      </button>
      {status ? <p className="form-status" aria-live="polite">{status}</p> : null}
    </form>
  );
}
