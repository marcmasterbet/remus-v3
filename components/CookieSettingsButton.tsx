"use client";

import { COOKIE_SETTINGS_EVENT } from "./CookieConsent";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="footer-cookie-settings"
      onClick={() => window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))}
    >
      Paramétrer mes cookies
    </button>
  );
}
