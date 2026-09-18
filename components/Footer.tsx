import Link from "next/link";
import CookieSettingsButton from "./CookieSettingsButton";

export default function Footer() {
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL;

  return (
    <footer className="footer">
      <div className="footer-brand">
        <strong>REMUS SYSTEMS</strong>
        <p>Quand les systèmes se rencontrent.</p>

        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-linkedin"
          >
            <span>in</span>
            LinkedIn
          </a>
        )}
      </div>

      <div className="footer-column">
        <span className="footer-column-title">NAVIGATION</span>

        <nav className="footer-nav">
          <Link href="/audit-remus">Audit REMUS</Link>
          <Link href="/technologies">Technologies</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/r-d">Recherche & Développement</Link>
          <Link href="/a-propos">Qui sommes-nous ?</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>

      <div className="footer-column footer-legal-column">
        <span className="footer-column-title">INFORMATIONS LÉGALES</span>

        <nav className="footer-legal-links">
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/confidentialite">Politique de confidentialité</Link>
          <Link href="/cgu">Conditions générales d’utilisation</Link>
          <Link href="/cookies">Gestion des cookies</Link>
          <CookieSettingsButton />
        </nav>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} REMUS Systems</span>
        <span>Tous droits réservés.</span>
      </div>
    </footer>
  );
}
