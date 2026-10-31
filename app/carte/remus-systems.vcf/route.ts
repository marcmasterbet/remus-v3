import { CONTACT_CARD } from "../../../lib/contact-card";
import { CONTACT_PHOTO_JPEG_BASE64 } from "../../../lib/contact-photo";

/** Fiche contact (vCard 3.0, compatible iPhone et Android) : /carte/remus-systems.vcf */

export const dynamic = "force-static";

function esc(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\;");
}

/** Découpe les lignes à 75 caractères (norme vCard). */
function fold(line: string) {
  if (line.length <= 75) return line;
  const parts = [line.slice(0, 75)];
  for (let i = 75; i < line.length; i += 74) parts.push(" " + line.slice(i, i + 74));
  return parts.join("\r\n");
}

export function GET() {
  const c = CONTACT_CARD;
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${esc(c.lastName)};${esc(c.firstName)};;;`,
    `FN:${esc(`${c.firstName} ${c.lastName}`)}`,
    `ORG:${esc(c.organization)}`,
    `TITLE:${esc(c.jobTitle)}`,
    `NOTE:${esc(c.tagline)}`,
    `EMAIL;TYPE=INTERNET,WORK:${c.email}`,
    ...(c.phone ? [`TEL;TYPE=CELL,VOICE:${c.phone.replace(/\s/g, "")}`] : []),
    `URL;TYPE=WORK:${c.website}`,
    ...(c.linkedin ? [`X-SOCIALPROFILE;TYPE=linkedin:${c.linkedin}`, `URL;TYPE=LinkedIn:${c.linkedin}`] : []),
    `ADR;TYPE=WORK:;;${esc(c.street)};${esc(c.city)};${esc(c.region)};${esc(c.postalCode)};${esc(c.country)}`,
    `PHOTO;ENCODING=b;TYPE=JPEG:${CONTACT_PHOTO_JPEG_BASE64}`,
    `REV:${new Date().toISOString()}`,
    "END:VCARD",
  ];
  const body = lines.map(fold).join("\r\n") + "\r\n";
  return new Response(body, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="REMUS-Systems.vcf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
