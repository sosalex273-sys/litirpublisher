import React from "react";
import Link from "next/link";
import { CheckCircle2, MessageCircle, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";

export const metadata = {
  title: "Produk Publikasi | Litir Publisher",
  description:
    "Pilih paket publikasi ilmiah terbaik bersama Litir Publisher — dari jurnal nasional SINTA hingga jurnal internasional Scopus, Copernicus, dan EBSCO.",
};

export default function ProdukPage() {
  const waLink = "https://wa.me/628981669927";

  const packages = [
    {
      id: "sinta",
      badge: "SINTA",
      title: "Jurnal Nasional Terakreditasi SINTA",
      desc: "Naskah Anda kami dampingi secara penuh dari proses submit hingga diterbitkan di jurnal nasional terakreditasi SINTA 1–6 yang diakui Kemendikbud.",
      headerGradient: "from-blue-600 to-blue-800",
      borderColor: "border-blue-500/30",
      glowColor: "shadow-blue-500/10",
      badgeBg: "bg-blue-500/15 text-blue-300 border-blue-500/30",
      buttonClass: "bg-blue-600 hover:bg-blue-700",
      features: [
        "Pendampingan naskah oleh editor bersertifikat",
        "Tracking progres publikasi secara real-time",
        "Garansi revisi bahasa & substansi",
        "Pendampingan hingga artikel resmi terbit",
      ],
    },
    {
      id: "copernicus",
      badge: "COPERNICUS",
      title: "Jurnal Terindeks Index Copernicus (ICI)",
      desc: "Tingkatkan reputasi akademik Anda dengan menerbitkan artikel di jurnal internasional yang terindeks Index Copernicus — diakui secara global dan terbuka.",
      headerGradient: "from-emerald-600 to-teal-800",
      borderColor: "border-emerald-500/30",
      glowColor: "shadow-emerald-500/10",
      badgeBg: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
      buttonClass: "bg-emerald-600 hover:bg-emerald-700",
      features: [
        "Seleksi jurnal ICI yang sesuai bidang",
        "Pendampingan penyesuaian template internasional",
        "Review oleh reviewer berpengalaman",
        "Pendampingan hingga artikel resmi terbit",
      ],
    },
    {
      id: "ebsco",
      badge: "EBSCO",
      title: "Jurnal Terindeks EBSCO International",
      desc: "Perluas jangkauan karya ilmiah Anda ke komunitas riset global melalui jurnal internasional bereputasi yang terindeks EBSCO — salah satu basis data paling dipercaya di dunia.",
      headerGradient: "from-purple-600 to-purple-900",
      borderColor: "border-purple-500/30",
      glowColor: "shadow-purple-500/10",
      badgeBg: "bg-purple-500/15 text-purple-300 border-purple-500/30",
      buttonClass: "bg-purple-600 hover:bg-purple-700",
      features: [
        "Pencocokan naskah dengan jurnal EBSCO terbaik",
        "Asistensi cover letter & abstract",
        "Pendampingan proses peer-review",
        "Pendampingan hingga Letter of Acceptance",
      ],
    },
    {
      id: "scopus",
      badge: "SCOPUS",
      title: "Jurnal Scopus Q1–Q4 Bereputasi Tinggi",
      desc: "Raih pengakuan internasional tertinggi dengan menerbitkan karya di jurnal Scopus Q1 hingga Q4 — standar tertinggi dalam dunia publikasi ilmiah global.",
      headerGradient: "from-orange-600 to-amber-800",
      borderColor: "border-orange-500/30",
      glowColor: "shadow-orange-500/10",
      badgeBg: "bg-orange-500/15 text-orange-300 border-orange-500/30",
      buttonClass: "bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700",
      features: [
        "Strategi penempatan di Scopus Q1–Q4",
        "Pendampingan ekstra oleh editor senior",
        "Garansi Letter of Acceptance (LoA)",
        "Support proses hingga artikel dipublikasikan",
      ],
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Konsultasi Naskah",
      desc: "Diskusikan topik, bidang ilmu, dan target jurnal Anda bersama tim konsultan kami secara gratis.",
    },
    {
      num: "02",
      title: "Proses Publikasi",
      desc: "Editor & reviewer profesional kami bekerja — Anda bisa tracking seluruh progresnya secara real-time.",
    },
    {
      num: "03",
      title: "Artikel Resmi Terbit",
      desc: "Terima Letter of Acceptance (LoA) dan pastikan artikel Anda terindeks di database tujuan.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero Header */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(251,146,60,0.06)_0%,_transparent_60%)] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium text-sm bg-slate-900 border border-slate-800 hover:border-slate-700 px-4 py-2 rounded-full mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Kembali ke Beranda
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-orange-500/25 text-orange-400 text-xs sm:text-sm font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Produk Kami</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 font-jakarta">
              Solusi Publikasi{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                Ilmiah Terpadu
              </span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Kami berdiri di atas legalitas resmi dan rekam jejak nyata. Setiap naskah yang masuk, kami dampingi dengan serius — sampai benar-benar terbit di jurnal tujuan Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                id={pkg.id}
                className={`scroll-mt-24 rounded-2xl overflow-hidden bg-slate-900 border ${pkg.borderColor} hover:shadow-2xl ${pkg.glowColor} transition-all duration-300 hover:-translate-y-1 flex flex-col`}
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-br ${pkg.headerGradient} p-8 lg:p-10 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/15 rounded-full blur-xl pointer-events-none" />
                  <span className={`inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border mb-4 relative z-10 ${pkg.badgeBg}`}>
                    {pkg.badge}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold leading-tight font-jakarta relative z-10 text-white">
                    {pkg.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-8 lg:p-10 flex flex-col flex-grow">
                  <p className="text-slate-400 mb-8 text-sm lg:text-base leading-relaxed">
                    {pkg.desc}
                  </p>

                  <ul className="space-y-3.5 mb-10 flex-grow">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
                        <span className="text-slate-300 text-sm lg:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-3.5 rounded-xl transition-all w-max shadow-lg active:scale-95 ${pkg.buttonClass}`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Konsultasi Paket {pkg.badge}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-900/50 border-y border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-orange-400 text-sm font-bold tracking-widest uppercase mb-3">Alur Kerja</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-jakarta">
              Proses Mudah,{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Hasil Nyata
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-9 left-[20%] right-[20%] h-px bg-gradient-to-r from-orange-500/30 via-amber-400/50 to-orange-500/30" />

            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-white font-black flex items-center justify-center text-xl mb-6 shadow-lg shadow-orange-500/25 relative z-10">
                  {step.num}
                </div>
                <div className="bg-slate-900 border border-slate-800 p-6 lg:p-8 rounded-2xl w-full hover:-translate-y-1 transition-transform hover:border-slate-700">
                  <h3 className="font-bold text-white text-lg mb-3 font-jakarta">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-orange-950/20 to-slate-950 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,146,60,0.12)_0%,_transparent_65%)] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center relative z-10">
          <div className="w-16 h-16 bg-orange-500/10 rounded-2xl border border-orange-500/20 flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-orange-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight tracking-tight font-jakarta">
            Naskah Anda Menunggu untuk Terbit —{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Mulai Sekarang
            </span>
          </h2>
          <p className="text-slate-400 mb-10 text-base leading-relaxed">
            Konsultasi pertama 100% gratis. Tim kami siap membantu Anda menentukan jalur publikasi yang paling tepat dan efisien.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-xl shadow-orange-500/25 active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            Konsultasi Gratis via WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
