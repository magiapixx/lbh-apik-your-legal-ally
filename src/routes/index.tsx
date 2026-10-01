import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import {
  Ear,
  FileText,
  HandCoins,
  HeartHandshake,
  LifeBuoy,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  Phone,
  Scale,
  Share2,
  ShieldCheck,
} from "lucide-react";

import communityImg from "@/assets/community-session.jpg";
import handsImg from "@/assets/hands-documents.jpg";
import heroImg from "@/assets/hero-consultation.jpg";
import { SiteFooter } from "@/components/lbh-apik/footer";
import { SiteHeader } from "@/components/lbh-apik/header";
import { QuickExit } from "@/components/lbh-apik/quick-exit";
import { Reveal } from "@/components/lbh-apik/reveal";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "LBH APIK Yogyakarta — Bantuan Hukum untuk Perempuan & Anak",
      },
      {
        name: "description",
        content:
          "LBH APIK Yogyakarta memberikan bantuan hukum gratis, rahasia, dan tanpa menghakimi bagi perempuan dan anak korban kekerasan dan ketidakadilan di DI Yogyakarta.",
      },
      {
        property: "og:title",
        content: "LBH APIK Yogyakarta — Kamu Tidak Sendirian",
      },
      {
        property: "og:description",
        content:
          "Bantuan hukum gratis, rahasia, dan tanpa menghakimi bagi perempuan dan anak korban kekerasan dan ketidakadilan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const btnPrimary =
  "inline-flex h-14 items-center justify-center gap-2 rounded-md bg-primary px-8 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary-hover";
const btnGhostLight =
  "inline-flex h-14 items-center justify-center gap-2 rounded-md border border-cream/70 px-8 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-cream/10";
const btnGhostDark =
  "inline-flex h-14 items-center justify-center gap-2 rounded-md border border-foreground/30 px-8 text-sm font-medium tracking-wide text-foreground transition-colors hover:bg-secondary";
const inputCls =
  "w-full rounded-md border border-taupe/50 bg-card px-4 py-3 text-sm text-foreground placeholder:text-taupe focus:border-primary focus:outline-none";
const cardCls =
  "rounded-xl bg-card p-8 shadow-card transition-shadow hover:shadow-card-lg";

function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-xs font-medium uppercase tracking-[0.08em] text-taupe ${className}`}
    >
      {children}
    </p>
  );
}

const HERO_TRUST = ["Rahasia terjaga", "Gratis", "Tanpa menghakimi"];

const TRUST_TILES = [
  {
    icon: HandCoins,
    title: "Gratis",
    desc: "Tanpa biaya bagi yang membutuhkan",
  },
  {
    icon: ShieldCheck,
    title: "Rahasia",
    desc: "Identitas dan cerita kamu aman",
  },
  {
    icon: Ear,
    title: "Tanpa menghakimi",
    desc: "Kami di sini untuk mendengar",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Hubungi kami",
    desc: "Lewat WhatsApp, telepon, email, atau datang langsung ke kantor.",
  },
  {
    n: "02",
    title: "Ceritakan situasimu",
    desc: "Kepada tim kami — semua cerita dijaga kerahasiaannya.",
  },
  {
    n: "03",
    title: "Kami bantu menilai kasusmu",
    desc: "Dan menjelaskan langkah hukum yang bisa ditempuh.",
  },
  {
    n: "04",
    title: "Kami dampingi kamu",
    desc: "Sesuai keputusan dan kenyamananmu.",
  },
];

const WHY = [
  {
    icon: HeartHandshake,
    title: "Berpihak pada Korban",
    desc: "Suara dan keputusan korban adalah yang utama. Kami bekerja sesuai keputusan dan kenyamananmu, bukan sebaliknya.",
    span: "md:col-span-7",
  },
  {
    icon: ShieldCheck,
    title: "Rahasia Terjaga",
    desc: "Identitas dan cerita kamu aman bersama kami — sebelum, selama, dan sesudah proses hukum.",
    span: "md:col-span-5",
  },
  {
    icon: Ear,
    title: "Tanpa Menghakimi",
    desc: "Tidak ada pertanyaan yang menyalahkan. Kami di sini untuk mendengar.",
    span: "md:col-span-5",
  },
  {
    icon: HandCoins,
    title: "Gratis bagi yang Membutuhkan",
    desc: "Bantuan hukum adalah hak. Bisa diakses tanpa hambatan biaya, terutama bagi mereka yang tidak mampu membayar jasa pengacara.",
    span: "md:col-span-7",
  },
];

function HeroSection() {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="Seorang pendamping hukum mendengarkan cerita perempuan di ruang konsultasi yang hangat dan aman"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/65 to-charcoal/25" />
      <div className="relative mx-auto flex min-h-[580px] max-w-6xl flex-col justify-center px-6 pt-28 pb-20 md:px-10">
        <h1 className="max-w-[520px] font-display text-4xl font-semibold leading-[1.2] text-cream md:text-[46px]">
          Kamu Tidak Sendirian. Kami Siap Mendampingi.
        </h1>
        <p className="mt-5 max-w-[440px] text-base leading-relaxed text-cream/90">
          LBH APIK Yogyakarta memberikan bantuan hukum bagi perempuan dan anak
          korban kekerasan dan ketidakadilan. Gratis, rahasia, dan tanpa
          menghakimi.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href={`tel:${SITE.phones[0].tel}`} className={btnPrimary}>
            <Phone size={16} />
            Hubungi Hotline
          </a>
          <a href="#layanan" className={btnGhostLight}>
            Pelajari Layanan
          </a>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-cream/70">
          {HERO_TRUST.map((item, i) => (
            <span key={item} className="flex items-center gap-4">
              {i > 0 && <span className="h-px w-6 bg-cream/30" aria-hidden />}
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-12 md:px-10">
        <div className="flex items-start gap-4 md:col-span-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-secondary text-taupe">
            <Phone size={18} />
          </div>
          <div>
            <h3 className="text-base font-semibold">
              Hotline & WhatsApp siap menerima cerita kamu
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Telepon atau kirim pesan kapan pun kamu siap bercerita.
            </p>
          </div>
        </div>
        {TRUST_TILES.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-start gap-4 md:col-span-2">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-secondary text-taupe">
              <Icon size={18} />
            </div>
            <div>
              <h3 className="text-sm font-semibold">{title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="tentang" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <Eyebrow>Tentang Kami</Eyebrow>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight md:text-[32px]">
            Siapa yang Bisa Kami Bantu?
          </h2>
          <p className="mt-4 max-w-[540px] leading-relaxed text-muted-foreground">
            Perempuan dan anak yang mengalami kekerasan, diskriminasi, atau
            ketidakadilan hukum — terutama yang tidak mampu membayar jasa
            pengacara. Kamu tidak perlu yakin apakah kasusmu &ldquo;cukup
            berat&rdquo;. Kalau kamu merasa ada yang tidak adil, ceritakan
            kepada kami.
          </p>
        </Reveal>

        <div className="mt-16 grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <img
              src={handsImg}
              alt="Tangan seorang pendamping menulis catatan di samping dokumen hukum"
              className="aspect-[4/3] w-full rounded-xl object-cover"
              loading="lazy"
              width={1200}
              height={900}
            />
          </Reveal>
          <Reveal delayMs={100}>
            <h3 className="font-display text-2xl font-semibold">
              Kekerasan dalam Rumah Tangga
            </h3>
            <p className="mt-3 max-w-[480px] leading-relaxed text-muted-foreground">
              Kekerasan fisik, psikis, ekonomi, maupun penelantaran di dalam
              rumah. Kami bantu memahami hak dan pilihan hukum yang kamu
              miliki, lalu mendampingi setiap langkahnya — dari pelaporan
              hingga perlindungan.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid items-center gap-10 md:grid-cols-2">
          <Reveal delayMs={100} className="order-2 md:order-1">
            <h3 className="font-display text-2xl font-semibold">
              Kekerasan Seksual & Kekerasan Berbasis Gender Online
            </h3>
            <p className="mt-3 max-w-[480px] leading-relaxed text-muted-foreground">
              Termasuk kekerasan berbasis gender online seperti penyebaran
              konten pribadi dan pelecehan digital. Kamu tidak bersalah. Kami
              bantu mengambil langkah hukum dengan aman dan terarah.
            </p>
          </Reveal>
          <Reveal className="order-1 md:order-2">
            <img
              src={communityImg}
              alt="Sesi penyuluhan hukum komunitas yang diikuti perempuan"
              className="aspect-[4/3] w-full rounded-xl object-cover"
              loading="lazy"
              width={1200}
              height={900}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section id="pendekatan" className="bg-charcoal py-20 text-cream md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-4">
          <Eyebrow>Pendekatan Kami</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-snug">
            Bantuan Hukum Struktural Berbasis Gender (BHGS)
          </h2>
        </Reveal>
        <div className="space-y-5 leading-relaxed text-cream/85 md:col-span-8">
          <Reveal>
            <p>
              Kami tidak melihat kasus yang kamu alami sebagai persoalan
              pribadi yang berdiri sendiri. Banyak ketidakadilan yang dialami
              perempuan berakar pada struktur dan budaya yang membedakan hak —
              karena itu kami menangani kasus satu per satu, sekaligus
              menyuarakan perubahannya.
            </p>
          </Reveal>
          <Reveal delayMs={80}>
            <p>
              Dengan kerangka hukum feminin dan Bantuan Hukum Struktural
              Berbasis Gender, kami mendampingi korban sesuai keputusan dan
              kenyamanan mereka, serta mengadvokasi kebijakan yang lebih adil
              bagi perempuan — dari ruang konsultasi hingga ruang perumusan
              kebijakan.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: Scale,
    title: "Pendampingan Hukum",
    desc: "Kami mendampingi korban dalam proses pelaporan, pemeriksaan, hingga persidangan.",
  },
  {
    icon: FileText,
    title: "Penanganan Kasus",
    desc: "KDRT, kekerasan seksual, kekerasan berbasis gender online, perceraian, hak asuh anak, dan nafkah.",
  },
  {
    icon: LifeBuoy,
    title: "Rujukan Layanan Lain",
    desc: "Pendampingan psikologis, layanan kesehatan, dan rumah aman melalui jejaring mitra kami.",
  },
  {
    icon: Megaphone,
    title: "Edukasi & Advokasi",
    desc: "Penyuluhan hukum, pelatihan, dan advokasi kebijakan untuk lingkungan yang lebih adil dan aman bagi perempuan.",
  },
];

function ServicesSection() {
  return (
    <section id="layanan" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <Eyebrow>Layanan Kami</Eyebrow>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight md:text-[32px]">
            Semua Layanan Gratis dan Rahasia
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <Reveal className="md:col-span-2 md:row-span-2">
            <div className={`${cardCls} flex h-full flex-col`}>
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-secondary text-taupe">
                <MessageCircle size={20} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">Konsultasi Hukum</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Ceritakan masalahmu. Kami bantu memahami hak dan pilihan hukum
                yang kamu miliki — tanpa menghakimi, dan selalu gratis.
              </p>
              <div className="mt-auto border-t border-border pt-5">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Datang langsung ke kantor, telepon, atau kirim pesan
                  WhatsApp.{" "}
                  <a
                    href="#kontak"
                    className="font-medium text-primary hover:underline"
                  >
                    Lihat cara menghubungi kami
                  </a>
                </p>
              </div>
            </div>
          </Reveal>
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delayMs={i * 80}>
              <div className={cardCls}>
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-secondary text-taupe">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="proses" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <Eyebrow>Cara Minta Bantuan</Eyebrow>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight md:text-[32px]">
            Empat Langkah untuk Mendapatkan Bantuan
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delayMs={i * 80}>
              <div className="border-t border-border pt-6">
                <span className="font-display text-5xl font-medium text-taupe/70">
                  {step.n}
                </span>
                <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section id="kenapa" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <Eyebrow>Kenapa LBH APIK?</Eyebrow>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight md:text-[32px]">
            Keadilan Bukan Hak Istimewa. Itu Hakmu.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-12">
          {WHY.map(({ icon: Icon, title, desc, span }, i) => (
            <Reveal key={title} delayMs={i * 80} className={span}>
              <div className={cardCls}>
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-secondary text-taupe">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SupportSection() {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const data = {
      title: SITE.name,
      text: "LBH APIK Yogyakarta memberikan bantuan hukum gratis, rahasia, dan tanpa menghakimi bagi perempuan dan anak.",
      url: window.location.origin,
    };
    try {
      if (navigator.share) {
        await navigator.share(data);
      } else {
        await navigator.clipboard.writeText(data.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // dibatalkan oleh pengguna
    }
  }

  return (
    <section id="dukungan" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <Reveal>
          <Eyebrow>Dukung Kami</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-[32px]">
            Keadilan Butuh Banyak Tangan
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] leading-relaxed text-muted-foreground">
            Setiap dukungan — waktu, tenaga, maupun donasi — membantu lebih
            banyak perempuan dan anak mendapatkan pendampingan hukum.
            Bergabunglah bersama kami.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${SITE.email}?subject=${encodeURIComponent("Ingin menjadi relawan")}`}
              className={btnPrimary}
            >
              Jadi Relawan
            </a>
            <a
              href={`mailto:${SITE.email}?subject=${encodeURIComponent("Donasi untuk LBH APIK Yogyakarta")}`}
              className={btnGhostDark}
            >
              Donasi
            </a>
            <button type="button" onClick={handleShare} className={btnGhostDark}>
              <Share2 size={16} />
              {copied ? "Tautan disalin" : "Sebarkan Informasi"}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) {
      errs.name = "Tulis nama kamu di kolom ini — boleh nama panggilan.";
    }
    if (form.phone.replace(/\D/g, "").length < 9) {
      errs.phone = "Nomor telepon belum lengkap. Gunakan format 0812-3456-7890.";
    }
    if (form.message.trim().length < 20) {
      errs.message =
        "Ceritakan situasimu sedikit lebih detail (minimal 20 huruf) supaya kami bisa membantu.";
    }
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  }

  const firstName = form.name.trim().split(" ")[0] || "Sahabat";
  const waText = encodeURIComponent(
    `Halo LBH APIK Yogyakarta, saya ${form.name}. ${form.message}`,
  );
  const mailBody = encodeURIComponent(
    `Halo LBH APIK Yogyakarta,\n\nNama: ${form.name}\nTelepon: ${form.phone}\n\n${form.message}`,
  );

  return (
    <section id="kontak" className="bg-charcoal py-20 text-cream md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <Eyebrow>Kontak</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-[32px]">
              Kamu Aman di Sini. Ceritakan Kapan Saja Kamu Siap.
            </h2>
            <p className="mt-4 max-w-[420px] leading-relaxed text-cream/80">
              Telepon, WhatsApp, email, atau datang langsung — semua jalur
              dijaga kerahasiaannya.
            </p>
            <div className="mt-8 space-y-3">
              {SITE.phones.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className="flex items-center gap-3 text-cream/90 transition-colors hover:text-primary"
                >
                  <Phone size={18} className="text-taupe" />
                  <span className="font-display text-2xl">{phone.label}</span>
                </a>
              ))}
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-sm text-cream/80 transition-colors hover:text-primary"
              >
                <Mail size={18} className="text-taupe" />
                {SITE.email}
              </a>
            </div>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className={`${btnPrimary} mt-8`}
            >
              <MessageCircle size={16} />
              Chat WhatsApp
            </a>
          </Reveal>

          <Reveal delayMs={100}>
            {sent ? (
              <div className="rounded-xl border border-cream/15 bg-cream/5 p-8">
                <h3 className="font-display text-xl font-semibold text-cream">
                  Pesanmu sudah disiapkan, {firstName}.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/80">
                  Kirim lewat WhatsApp atau email supaya tim kami bisa segera
                  membalas. Semua cerita dijaga kerahasiaannya.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/6285183252216?text=${waText}`}
                    target="_blank"
                    rel="noreferrer"
                    className={btnPrimary}
                  >
                    <MessageCircle size={16} />
                    Kirim lewat WhatsApp
                  </a>
                  <a
                    href={`mailto:${SITE.email}?subject=${encodeURIComponent("Permintaan konsultasi")}&body=${mailBody}`}
                    className={btnGhostLight}
                  >
                    <Mail size={16} />
                    Kirim lewat Email
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-cream"
                  >
                    Nama
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    placeholder="Nama panggilan juga boleh"
                    className={inputCls}
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-danger-soft">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-sm font-medium text-cream"
                  >
                    Nomor Telepon / WhatsApp
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="0812-3456-7890"
                    className={inputCls}
                  />
                  {errors.phone && (
                    <p className="mt-2 text-sm text-danger-soft">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-medium text-cream"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Ceritakan situasimu dengan bahasamu sendiri"
                    className={`${inputCls} resize-y`}
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-danger-soft">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button type="submit" className={btnPrimary}>
                  Kirim Pesan
                </button>
              </form>
            )}
          </Reveal>
        </div>

        <div className="mt-14 border-t border-cream/10 pt-6">
          <p className="flex items-start gap-2 text-sm text-cream/70">
            <MapPin size={16} className="mt-0.5 shrink-0 text-taupe" />
            {SITE.address}
          </p>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustStrip />
        <AboutSection />
        <ApproachSection />
        <ServicesSection />
        <ProcessSection />
        <WhySection />
        <SupportSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <QuickExit />
    </div>
  );
}
