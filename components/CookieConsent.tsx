"use client";

import { useEffect, useState } from "react";

export const COOKIE_CONSENT_KEY = "remus_cookie_consent_v1";
export const COOKIE_CONSENT_EVENT = "remus:consent-changed";
export const COOKIE_SETTINGS_EVENT = "remus:open-cookie-settings";

type ConsentState = {
  necessary: true;
  analytics: boolean;
  version: 1;
  updatedAt: string;
};

function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    if (parsed.version !== 1 || typeof parsed.analytics !== "boolean") return null;

    return {
      necessary: true,
      analytics: parsed.analytics,
      version: 1,
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

function saveConsent(analytics: boolean) {
  const value: ConsentState = {
    necessary: true,
    analytics,
    version: 1,
    updatedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: value }));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [customize, setCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) {
      setVisible(true);
    } else {
      setAnalytics(existing.analytics);
    }

    const openSettings = () => {
      const current = readConsent();
      setAnalytics(current?.analytics ?? false);
      setCustomize(true);
      setVisible(true);
    };

    window.addEventListener(COOKIE_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, openSettings);
  }, []);

  const apply = (allowAnalytics: boolean) => {
    setAnalytics(allowAnalytics);
    saveConsent(allowAnalytics);
    setVisible(false);
    setCustomize(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent-layer" role="presentation">
      <section
        className="cookie-consent"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-consent-title"
        aria-describedby="cookie-consent-description"
      >
        <div className="cookie-consent-copy">
          <span className="cookie-consent-kicker">VOTRE CONFIDENTIALITÉ</span>
          <h2 id="cookie-consent-title">Cookies & mesure d’audience</h2>
          <p id="cookie-consent-description">
            REMUS SYSTEMS utilise Google Analytics uniquement avec votre accord afin de comprendre la fréquentation du site.
            Les traceurs de mesure d’audience restent bloqués tant que vous ne les avez pas acceptés.
          </p>
          <a href="/cookies" className="cookie-consent-link">En savoir plus sur les cookies</a>
        </div>

        {customize && (
          <div className="cookie-preferences" aria-label="Préférences de cookies">
            <div className="cookie-preference-row">
              <div>
                <strong>Strictement nécessaires</strong>
                <span>Préférences de confidentialité et fonctionnement essentiel.</span>
              </div>
              <span className="cookie-preference-required">TOUJOURS ACTIFS</span>
            </div>

            <label className="cookie-preference-row cookie-preference-toggle">
              <div>
                <strong>Mesure d’audience</strong>
                <span>Google Analytics (GA4) — statistiques de fréquentation et navigation.</span>
              </div>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(event) => setAnalytics(event.target.checked)}
                aria-label="Autoriser Google Analytics"
              />
            </label>
          </div>
        )}

        <div className="cookie-consent-actions">
          <button type="button" className="cookie-btn cookie-btn-outline" onClick={() => apply(false)}>
            TOUT REFUSER
          </button>

          {customize ? (
            <button type="button" className="cookie-btn cookie-btn-secondary" onClick={() => apply(analytics)}>
              ENREGISTRER MES CHOIX
            </button>
          ) : (
            <button type="button" className="cookie-btn cookie-btn-secondary" onClick={() => setCustomize(true)}>
              PERSONNALISER
            </button>
          )}

          <button type="button" className="cookie-btn cookie-btn-solid" onClick={() => apply(true)}>
            TOUT ACCEPTER
          </button>
        </div>
      </section>
    </div>
  );
}
