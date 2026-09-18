import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot anti-spam : les visiteurs réels ne remplissent jamais ce champ.
    if (clean(body.website, 200)) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(body.name, 120);
    const company = clean(body.company, 160);
    const email = clean(body.email, 254);
    const phone = clean(body.phone, 40);
    const message = clean(body.message, 5000);

    if (!name || !emailPattern.test(email) || !message) {
      return NextResponse.json(
        { error: "Merci de vérifier votre nom, votre e-mail et votre message." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL || "contact@remussystems.fr";
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !from) {
      console.error("Configuration Resend manquante : RESEND_API_KEY / CONTACT_FROM_EMAIL");
      return NextResponse.json(
        { error: "Le formulaire n’est pas encore configuré. Vous pouvez écrire à contact@remussystems.fr." },
        { status: 503 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Contact site REMUS — ${company || name}`,
        text: [
          `Nom : ${name}`,
          `Entreprise : ${company || "Non renseignée"}`,
          `E-mail : ${email}`,
          `Téléphone : ${phone || "Non renseigné"}`,
          "",
          "Message :",
          message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      console.error("Resend error", response.status, await response.text());
      return NextResponse.json(
        { error: "L’envoi a échoué. Vous pouvez écrire directement à contact@remussystems.fr." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Une erreur est survenue pendant l’envoi." },
      { status: 500 }
    );
  }
}
