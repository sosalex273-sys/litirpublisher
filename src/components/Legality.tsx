"use client";

import { motion } from "framer-motion";
import { Scale, ShieldCheck, CheckCircle2, BadgeCheck } from "lucide-react";

export const Legality = () => {
  const guarantees = [
    {
      title: "Nomor Induk Berusaha (NIB) Sah",
      desc: "NIB: 0304220013798 terverifikasi resmi di Kementerian Investasi / BKPM RI.",
    },
    {
      title: "NPWP Badan Usaha Terdaftar",
      desc: "Kepatuhan administratif penuh serta keabsahan invoicing dan bukti transaksi.",
    },
    {
      title: "Non-Disclosure Agreement (NDA)",
      desc: "Komitmen tertulis untuk menjamin privasi riset dan perlindungan hak cipta naskah.",
    },
    {
      title: "Proteksi dari Jurnal Predator",
      desc: "Kurasi ketat jurnal terindeks resmi demi menjaga reputasi akademik jangka panjang Anda.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(251,146,60,0.03)_0%,_transparent_65%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-900/95 border border-slate-800 rounded-3xl p-8 md:p-14 overflow-hidden shadow-2xl"
        >
          {/* Watermark Law Scale Icon */}
          <div className="absolute -top-10 -right-10 opacity-[0.03] text-amber-400 pointer-events-none">
            <Scale className="w-96 h-96" />
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-14 relative z-10">
            {/* Left Column: Legal Guarantee Info */}
            <div className="w-full lg:w-7/12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-6">
                <ShieldCheck className="h-4 w-4" />
                <span>Jaminan Kepastian Hukum</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-white tracking-tight leading-tight mb-5">
                Bermitra dengan Entitas Bisnis{" "}
                <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent">
                  Resmi & Akuntabel
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Litir Publisher beroperasi penuh di bawah payung hukum badan usaha sah Republik Indonesia. Kami menjamin transparansi transaksi, keabsahan Letter of Acceptance (LoA), dan perlindungan hak cipta karya ilmiah Anda.
              </p>

              {/* Guarantees List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {guarantees.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start gap-3 bg-slate-950/50 border border-slate-800/80 rounded-xl p-3.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white font-jakarta">
                        {item.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Digital Legal Certificate Card */}
            <div className="w-full lg:w-5/12 flex justify-center">
              <div className="w-full max-w-md bg-slate-950/80 border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-md relative overflow-hidden">
                {/* Subtle top gold line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500" />

                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Scale className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white font-jakarta">
                        Profil Legalitas Perusahaan
                      </h3>
                      <p className="text-[11px] text-slate-400">
                        Kementerian Investasi / BKPM RI
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    <span>Terverifikasi</span>
                  </div>
                </div>

                {/* Certificate Rows */}
                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400 text-xs">Nama Entitas</span>
                    <span className="font-bold text-white font-jakarta">
                      CV Litir Publisher
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400 text-xs">Bentuk Usaha</span>
                    <span className="font-semibold text-slate-200">
                      Badan Usaha Resmi (CV)
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400 text-xs">Nomor Induk Berusaha</span>
                    <span className="font-mono font-bold text-amber-400 tracking-wider">
                      0304220013798
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400 text-xs">Sektor Aktivitas</span>
                    <span className="font-semibold text-slate-200 text-right">
                      Penerbitan & Konsultasi Ilmiah
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400 text-xs">Tahun Berdiri</span>
                    <span className="font-semibold text-slate-200">
                      Sejak 2018 (Aktif)
                    </span>
                  </div>
                </div>

                {/* Footer Assurance */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500 text-center leading-relaxed">
                  Semua naskah dilindungi perjanjian kerahasiaan & etika akademik.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
