"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const scrollPages = ["/", "/audit-remus", "/technologies", "/solutions", "/r-d", "/a-propos"];

export default function V3LegalNav() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const enabled = scrollPages.includes(pathname);

  useEffect(() => {
    if (!enabled) {
      setHidden(false);
      return;
    }
    const handleScroll = () => setHidden(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enabled, pathname]);

  return (
    <nav className={`v3-legal-nav ${enabled && hidden ? "is-scroll-hidden" : ""}`} aria-label="Informations légales">
      <Link href="/mentions-legales">Mentions légales</Link>
      <Link href="/confidentialite">Confidentialité</Link>
      <Link href="/cgu">CGU</Link>
      <Link href="/cookies">Cookies</Link>
    </nav>
  );
}
