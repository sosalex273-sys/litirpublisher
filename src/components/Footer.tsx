import Link from "next/link";
import Image from "next/image";
import { MessageCircle, MapPin, Phone, ShieldCheck } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const waLink = "https://wa.me/628981669927";

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-12 border-t border-slate-900 relative overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="w-12 h-12 relative rounded-full overflow-hidden border border-amber-500/30 group-hover:border-amber-400 transition-colors shadow-md">
                <Image
                  src="/images/litirlogo.png"
                  alt="Logo Litir Publisher"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-extrabold text-xl font-jakarta text-white tracking-tight">
                Litir{" "}
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Publisher
                </span>
              </span>
            </Link>

            <p className="text-slate-400 mb-5 leading-relaxed text-xs sm:text-sm">
              Lembaga pendampingan dan publikasi ilmiah berbadan hukum resmi (CV) dengan Nomor Induk Berusaha (NIB): <span className="text-amber-400 font-mono">0304220013798</span>.
            </p>

            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Desa Tateli Tiga, Jaga III, Kec. Mandolang, Kab. Minahasa, Sulawesi Utara</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors font-mono">
                  +62 898-1669-927 (Hotline)
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Layanan */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 font-jakarta flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Paket & Layanan</span>
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <Link href="/produk" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Jurnal Terakreditasi SINTA 1–6
                </Link>
              </li>
              <li>
                <Link href="/produk" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Jurnal Scopus Q1–Q4 Bereputasi
                </Link>
              </li>
              <li>
                <Link href="/produk" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Jurnal Index Copernicus (ICI) & EBSCO
                </Link>
              </li>
              <li>
                <Link href="/#layanan" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Pendaftaran Hak Cipta (HKI Resmi)
                </Link>
              </li>
              <li>
                <Link href="/#layanan" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Penerbitan Buku Ber-ISBN
                </Link>
              </li>
              <li>
                <Link href="/#layanan" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Proofreading & Academic Translation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigasi Cepat */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 font-jakarta flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Navigasi Cepat</span>
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <Link href="/#tentang-kami" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Tentang Litir Publisher
                </Link>
              </li>
              <li>
                <Link href="/#keunggulan" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Keunggulan & Standar Kerja
                </Link>
              </li>
              <li>
                <Link href="/#portofolio" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Bukti Naskah yang Telah Terbit
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Tanya Jawab (FAQ)
                </Link>
              </li>
              <li>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Konsultasi WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legalitas & Etika */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 font-jakarta flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Legalitas & Proteksi</span>
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Badan Hukum Sah</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  CV Litir Publisher terdaftar resmi di Kementerian Investasi / BKPM RI.
                </p>
                <div className="text-[11px] font-mono font-bold text-slate-200">
                  NIB: 0304220013798
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed pt-1">
                Semua naskah dilindungi perjanjian kerahasiaan (*Non-Disclosure Agreement*) dan komitmen pencegahan jurnal predator.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} CV Litir Publisher. Seluruh Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Mitra Publikasi Ilmiah Terpercaya Akademisi Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
