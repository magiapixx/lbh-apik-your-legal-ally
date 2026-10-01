import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { SITE } from "@/lib/site";

const LINKS = [
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Cara Minta Bantuan", href: "#proses" },
  { label: "Dukung Kami", href: "#dukungan" },
  { label: "Kontak", href: "#kontak" },
];

export function SiteFooter() {
  return (
    <footer className="bg-charcoal-surface text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-12 md:px-10">
        <div className="md:col-span-4">
          <p className="font-display text-lg font-bold">
            LBH APIK Yogyakarta
          </p>
          <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-cream/75">
            {SITE.missionLine} Bersama perempuan, menuju keadilan.
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-cream/60">
            Tautan Cepat
          </p>
          <ul className="mt-4 space-y-2.5">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-cream/85 transition-colors hover:text-cream"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-cream/60">
            Kontak
          </p>
          <ul className="mt-4 space-y-3 text-sm text-cream/85">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-taupe" />
              <span>{SITE.address}</span>
            </li>
            {SITE.phones.map((phone) => (
              <li key={phone.tel} className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-taupe" />
                <a
                  href={`tel:${phone.tel}`}
                  className="transition-colors hover:text-cream"
                >
                  {phone.label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0 text-taupe" />
              <a
                href={`mailto:${SITE.email}`}
                className="transition-colors hover:text-cream"
              >
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-cream/60">
            Ikuti Kami
          </p>
          <ul className="mt-4 space-y-3 text-sm text-cream/85">
            <li>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 transition-colors hover:text-cream"
              >
                <Instagram size={16} className="text-taupe" />
                Instagram @lbhapikyogyakarta
              </a>
            </li>
            <li>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 transition-colors hover:text-cream"
              >
                <MessageCircle size={16} className="text-taupe" />
                WhatsApp Hotline
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-cream/60 md:flex-row md:items-center md:justify-between md:px-10">
          <p>© 2026 LBH APIK Yogyakarta. Bersama perempuan, menuju keadilan.</p>
          <p>Gratis • Rahasia • Tanpa menghakimi</p>
        </div>
      </div>
    </footer>
  );
}
