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
  { href: "/references", label: "RÉFÉRENCES" },
  { href: "/a-propos", label: "QUI SOMMES-NOUS ?" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [legalLogoHidden, setLegalLogoHidden] = useState(false);

  const scrollNavPages = ["/", "/audit-remus", "/technologies", "/solutions", "/r-d", "/references", "/a-propos", "/contact"];
  const scrollNavEnabled = scrollNavPages.some((page) => page === "/" ? pathname === "/" : pathname.startsWith(page));
  const articlePage = pathname.startsWith("/references/");
  const topOnlyHeaderPage = articlePage || pathname === "/audit-remus";
  const legalPage = ["/mentions-legales", "/confidentialite", "/cookies"].includes(pathname);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!legalPage) {
      setLegalLogoHidden(false);
      return;
    }

    const handleLegalScroll = () => setLegalLogoHidden(window.scrollY > 12);
    handleLegalScroll();
    window.addEventListener("scroll", handleLegalScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleLegalScroll);
  }, [legalPage]);

  useEffect(() => {
    if (!scrollNavEnabled) {
      setNavHidden(false);
      return;
    }

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (topOnlyHeaderPage) {
        // Articles et Audit REMUS : le header complet n’est visible qu’au sommet.
        // Une remontée au milieu de la page ne le fait pas réapparaître.
        setNavHidden(currentScrollY > 12);
      } else {
        if (currentScrollY <= 12) {
          setNavHidden(false);
        } else if (currentScrollY > lastScrollY) {
          setNavHidden(true);
        } else if (currentScrollY < lastScrollY) {
          setNavHidden(false);
        }
      }

      lastScrollY = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollNavEnabled, pathname, topOnlyHeaderPage]);

  return (
    <header className={`site-header ${(topOnlyHeaderPage && navHidden) || (legalPage && legalLogoHidden) ? "is-article-scroll-hidden" : ""}`}>
      <Link
        href="/"
        className={`remus-header-logo ${(scrollNavEnabled && navHidden) || legalLogoHidden ? "is-scroll-hidden" : ""}`}
        aria-label="REMUS Systems — Accueil"
      >
        <Image
          src="/visuals/remus-logo-final.png"
          alt="REMUS Systems"
          width={1374}
          height={1145}
          priority
          className="remus-header-logo-img"
        />
      </Link>

      <nav className={`main-nav ${scrollNavEnabled && navHidden ? "is-scroll-hidden" : ""}`} aria-label="Navigation principale">
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
