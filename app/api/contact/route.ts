import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
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

    const host = process.env.SMTP_HOST || "smtp.ionos.fr";
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER;
    const password = process.env.SMTP_PASSWORD;
    const to = process.env.CONTACT_TO_EMAIL || "contact@remussystems.fr";
    if (!user || !password || !Number.isInteger(port) || port < 1 || port > 65535) {
      console.error("Configuration SMTP manquante ou invalide");
      return NextResponse.json({ error: "L’envoi est momentanément indisponible. Écrivez à contact@remussystems.fr." }, { status: 503 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass: password },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });
    await transporter.sendMail({
      from: user,
      to,
      replyTo: email,
      subject: `Contact site REMUS — ${company || name}`.replace(/[\r\n]/g, " "),
      text: [
        `Nom : ${name}`, `Entreprise : ${company || "Non renseignée"}`,
        `E-mail : ${email}`, `Téléphone : ${phone || "Non renseigné"}`,
        "", "Message :", message,
      ].join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erreur d'envoi SMTP", error);
    return NextResponse.json({ error: "L’envoi a échoué. Écrivez directement à contact@remussystems.fr." }, { status: 502 });
  }
}
