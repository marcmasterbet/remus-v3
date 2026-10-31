import { NextResponse } from "next/server";
import { MailConfigError, clean, clientIp, emailPattern, rateLimited, sendSiteMail } from "../../../lib/mailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    if (rateLimited(clientIp(request))) {
      return NextResponse.json({ error: "Trop de demandes envoyées. Merci de réessayer dans quelques minutes." }, { status: 429 });
    }

    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > 20000) {
      return NextResponse.json({ error: "Message trop long." }, { status: 413 });
    }

    const body = await request.json();
    if (clean(body.website, 200)) return NextResponse.json({ ok: true });

    const name = clean(body.name, 120);
    const company = clean(body.company, 160);
    const email = clean(body.email, 254);
    const phone = clean(body.phone, 40);
    const message = clean(body.message, 5000);
    if (!name || !emailPattern.test(email) || !message) {
      return NextResponse.json({ error: "Merci de vérifier votre nom, votre e-mail et votre message." }, { status: 400 });
    }

    await sendSiteMail({
      replyTo: email,
      subject: `Contact site REMUS — ${company || name}`,
      text: [
        `Nom : ${name}`, `Entreprise : ${company || "Non renseignée"}`,
        `E-mail : ${email}`, `Téléphone : ${phone || "Non renseigné"}`,
        "", "Message :", message,
      ].join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof MailConfigError) {
      console.error(error.message);
      return NextResponse.json({ error: "L’envoi est momentanément indisponible. Écrivez à contact@remussystems.fr." }, { status: 503 });
    }
    console.error("Erreur d'envoi SMTP", error);
    return NextResponse.json({ error: "L’envoi a échoué. Écrivez directement à contact@remussystems.fr." }, { status: 502 });
  }
}
