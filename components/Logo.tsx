import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="brand" aria-label="REMUS Systems — Accueil">
      <span className="brand-remus" aria-hidden="true">
        R<span className="brand-e">E</span>MUS
      </span>
      <span className="brand-systems">SYSTEMS</span>
    </Link>
  );
}
