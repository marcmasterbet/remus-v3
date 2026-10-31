import nodemailer from "nodemailer";

/** Envoi d'e-mails du site via le SMTP IONOS (variables SMTP_* sur Vercel). */

export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

// Limite simple anti-abus : 5 envois par adresse IP toutes les 10 minutes (par instance serveur).
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, { count: number; start: number }>();

export function clientIp(request: Request) {
  return (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "inconnue";
}

export function rateLimited(ip: string) {
  const now = Date.now();
  for (const [key, entry] of hits) {
    if (now - entry.start > RATE_WINDOW_MS) hits.delete(key);
  }
  const entry = hits.get(ip);
  if (!entry) {
    hits.set(ip, { count: 1, start: now });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

export class MailConfigError extends Error {}

export async function sendSiteMail({ subject, text, replyTo }: { subject: string; text: string; replyTo?: string }) {
  const host = process.env.SMTP_HOST || "smtp.ionos.fr";
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  const to = process.env.CONTACT_TO_EMAIL || "contact@remussystems.fr";
  if (!user || !password || !Number.isInteger(port) || port < 1 || port > 65535) {
    throw new MailConfigError("Configuration SMTP manquante ou invalide");
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
    ...(replyTo ? { replyTo } : {}),
    subject: subject.replace(/[\r\n]/g, " "),
    text,
  });
}
