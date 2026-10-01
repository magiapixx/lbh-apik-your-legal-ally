import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import { SITE } from "@/lib/site";

const NAV = [
  { label: "Beranda", href: "#" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Cara Minta Bantuan", href: "#proses" },
  { label: "Dukung Kami", href: "#dukungan" },
  { label: "Kontak", href: "#kontak" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <a
          href="#"
          className="font-display text-lg font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          LBH APIK <span className="text-taupe">Yogyakarta</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b-2 border-transparent pb-0.5 text-[15px] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phones[0].tel}`}
            className="hidden items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover sm:inline-flex"
          >
            <Phone size={16} />
            {SITE.phones[0].label}
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-6 py-4 lg:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2.5 text-[15px] text-foreground transition-colors hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={`tel:${SITE.phones[0].tel}`}
            className="mt-2 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            <Phone size={16} />
            Hotline {SITE.phones[0].label}
          </a>
        </nav>
      )}
    </header>
  );
}
