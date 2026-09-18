import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "../../components/ContactForm";


export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez REMUS Systems pour échanger autour de vos enjeux, de votre projet ou d’un besoin d’accompagnement.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | REMUS Systems",
    description: "Contactez REMUS Systems pour échanger autour de vos enjeux, de votre projet ou d’un besoin d’accompagnement.",
    url: "https://www.remussystems.fr/contact",
    type: "website",
    locale: "fr_FR",
    siteName: "REMUS Systems",
    images: [
      {
        url: "/visuals/hero-remus.png",
        alt: "REMUS Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | REMUS Systems",
    description: "Contactez REMUS Systems pour échanger autour de vos enjeux, de votre projet ou d’un besoin d’accompagnement.",
    images: ["/visuals/hero-remus.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero contact-hero--visual">
        <div className="contact-hero-top">
          <div className="contact-intro">
            <p className="contact-eyebrow">CONTACT</p>
            <span className="contact-rule" aria-hidden="true" />

            <h1>
              Échangeons autour
              <br />
              de vos <span>enjeux.</span>
            </h1>

            <p className="contact-lead">
              Une question, un projet ou un besoin d’accompagnement&nbsp;?
              Écrivez-nous. Nous reviendrons vers vous pour comprendre votre
              contexte et identifier la meilleure manière d’avancer.
            </p>
          </div>

          <div className="contact-mail-hero" aria-hidden="true">
            <Image
              src="/visuals/remus-mail-transparent.png"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
              priority
            />
          </div>
        </div>

        <div className="contact-form-column contact-form-column--below">
          <div className="contact-form-heading">
            <span>PRENDRE CONTACT</span>
            <h2>Parlez-nous de votre projet.</h2>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
