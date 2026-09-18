"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "ACCUEIL" },
  { href: "/audit-remus", label: "AUDIT REMUS" },
  { href: "/technologies", label: "TECHNOLOGIES" },
  { href: "/solutions", label: "SOLUTIONS" },
  { href: "/r-d", label: "RECHERCHE & DÉVELOPPEMENT" },
  { href: "/a-propos", label: "QUI SOMMES-NOUS ?" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="site-header">
      <Link
        href="/"
        className="remus-header-logo"
        aria-label="REMUS Systems — Accueil"
      >
        <Image
          src="/visuals/remus-logo-final.png"
          alt="REMUS Systems"
          width={1536}
          height={1024}
          priority
          className="remus-header-logo-img"
        />
      </Link>

      <nav className="main-nav" aria-label="Navigation principale">
        {navItems.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={active ? "is-active" : ""}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <button
        type="button"
        className={`mobile-menu-toggle ${mobileOpen ? "is-open" : ""}`}
        aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <div className={`mobile-menu ${mobileOpen ? "is-open" : ""}`}>
        <nav className="mobile-menu-nav" aria-label="Navigation mobile">
          {navItems.map((item, index) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "is-active" : ""}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mobile-menu-signature">
          <span>REMUS SYSTEMS</span>
          <small>QUAND LES SYSTÈMES SE RENCONTRENT.</small>
        </div>
      </div>
    </header>
  );
}
