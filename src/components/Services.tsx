"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, Globe, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";

export const Services = () => {
  const waLink = "https://wa.me/628981669927";

  return (
    <section id="layanan" className="py-16 md:py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-orange-500/25 text-orange-400 text-xs sm:text-sm font-semibold mb-5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pilih Jalur Publikasi yang Tepat untuk Anda</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-white tracking-tight leading-tight mb-4"
          >
            Tiga Skema Pendampingan yang{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              Terbukti Menghasilkan
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Dari jurnal nasional terakreditasi hingga jurnal internasional bereputasi, kami mendampingi setiap langkah perjalanan akademik Anda sampai tuntas.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">

          {/* Card 1: Jurnal Nasional */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="group relative bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 md:p-7 flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-black/40"
          >
            <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/5 rounded-bl-[80px] pointer-events-none transition-transform group-hover:scale-110" />

            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
              <BookOpen className="w-6 h-6" />
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white leading-snug font-jakarta mb-3">
              Publikasi Jurnal Nasional Terakreditasi
            </h3>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Pendampingan penuh untuk menerbitkan naskah di jurnal nasional terakreditasi Kemendikbud — mulai dari SINTA 1 hingga SINTA 6, Garuda, Moraref, dan Google Scholar.
            </p>

            {/* Indexing Logos */}
            <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl mb-6 flex flex-col gap-3">
              <div className="flex items-center justify-between px-1">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-[#113d52] flex items-center justify-center text-white text-[9px] font-bold shrink-0">S</div>
                    <span className="font-bold text-[#4fa8c7] text-xl tracking-tighter leading-none font-serif">sinta</span>
                  </div>
                  <span className="text-amber-500 text-[5px] font-bold tracking-widest pl-6 mt-0.5 uppercase">Science and Technology Index</span>
                </div>
                <div className="flex flex-col items-center">
                  <BookOpen className="w-5 h-5 text-[#16a085]" />
                  <span className="text-[#16a085] text-[9px] font-bold tracking-wider mt-0.5">MORAREF</span>
                </div>
              </div>
              <div className="border-t border-slate-800" />
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-white italic font-serif font-bold text-[10px]">G</div>
                  <div className="flex flex-col leading-none">
                    <span className="font-black text-slate-200 text-sm tracking-tighter leading-none">GARUDA</span>
                    <span className="text-slate-500 text-[5px] font-bold tracking-widest uppercase">Garba Rujukan Digital</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center text-white font-bold font-serif text-sm">g</div>
                  <div className="flex flex-col leading-none">
                    <span className="font-bold text-blue-400 text-xs tracking-tight leading-none">Google</span>
                    <span className="text-blue-400 text-[8px] font-medium tracking-wide">Scholar</span>
                  </div>
                </div>
              </div>
            </div>

            <ul className="flex flex-col gap-2 mb-6">
              {["Asistensi naskah menyeluruh", "Gratis revisi hingga diterima", "Tracking progres real-time"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-sm border border-slate-700 hover:border-slate-600 transition-all"
              >
                Mulai Konsultasi
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Jurnal Internasional — FEATURED */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative rounded-2xl flex flex-col overflow-hidden md:-translate-y-3 shadow-2xl shadow-orange-500/15"
          >
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-orange-500/60 via-amber-400/30 to-orange-600/50 -z-10" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 z-0" />

            <div className="relative z-10 p-6 md:p-7 flex flex-col h-full">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-lg">
                TERPOPULER
              </div>
              <div className="absolute top-0 right-0 w-36 h-36 bg-orange-500/10 rounded-bl-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-amber-500/5 rounded-tr-[80px] pointer-events-none" />

              <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-5">
                <Globe className="w-6 h-6" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug font-jakarta mb-3">
                Tembus Jurnal Internasional Bereputasi
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Kami mendampingi naskah Anda masuk ke jurnal internasional kelas dunia yang terindeks Scopus, Web of Science (WoS), EBSCO, Crossref, DOAJ, dan lainnya — dengan garansi LoA.
              </p>

              <div className="bg-white/[0.04] border border-white/10 p-4 rounded-xl mb-6 flex flex-col gap-2.5">
                <div className="flex justify-center">
                  <span className="font-sans text-[#e67e22] text-3xl tracking-tighter font-semibold">
                    Scopus<sup className="text-sm font-normal">®</sup>
                  </span>
                </div>
                <div className="border-t border-white/10" />
                <div className="flex justify-between items-center px-1">
                  <div className="flex items-center gap-1">
                    <Globe className="w-3 h-3 text-emerald-400" />
                    <span className="text-slate-200 text-[10px] font-bold">WorldCat<sup className="text-[6px]">®</sup></span>
                  </div>
                  <span className="text-amber-400 text-[10px] font-bold tracking-widest">DOAJ</span>
                  <div className="bg-[#0e4b85] text-white px-1.5 py-0.5 rounded-sm">
                    <span className="font-serif font-bold text-[10px] tracking-widest">EBSCO</span>
                  </div>
                </div>
                <div className="flex justify-between items-center px-1">
                  <div className="flex items-center gap-1.5">
                    <div className="flex">
                      <div className="w-2 h-2 bg-blue-500 rounded-sm" />
                      <div className="w-2 h-2 bg-yellow-400 rounded-sm -ml-1 mt-1" />
                    </div>
                    <span className="text-slate-200 text-[10px] font-bold">Crossref</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2.5 h-2.5 rounded-tr-full rounded-bl-full bg-gradient-to-br from-teal-400 to-purple-500" />
                    <span className="text-slate-200 text-[10px] font-bold">Clarivate</span>
                  </div>
                  <span className="text-slate-300 text-[10px] font-bold">Dimensions</span>
                </div>
              </div>

              <ul className="flex flex-col gap-2 mb-6">
                {["Garansi Letter of Acceptance (LoA)", "Pendampingan ekstra hingga publish", "Tersedia paket Q1 – Q4 Scopus"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition-all active:scale-95"
                >
                  Konsultasikan Naskah
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Konsultasi Karir Dosen */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 md:p-7 flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-black/40"
          >
            <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/5 rounded-bl-[80px] pointer-events-none transition-transform group-hover:scale-110" />

            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
              <TrendingUp className="w-6 h-6" />
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white leading-snug font-jakarta mb-3">
              Akselerasi Jabatan Akademik &amp; Pemenuhan BKD
            </h3>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Konsultasi karir akademik terstruktur untuk Dosen dan Tenaga Pengajar — mulai dari pemenuhan Angka Kredit, perencanaan BKD, hingga strategi kenaikan JAD yang terukur dan tepat waktu.
            </p>

            <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl mb-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-white text-sm">Target Kenaikan JAD</span>
                  <span className="block text-xs text-slate-400">Asisten Ahli → Lektor → Lektor Kepala → Guru Besar</span>
                </div>
              </div>
              <div className="border-t border-slate-800" />
              <div className="grid grid-cols-2 gap-2">
                {["BKD & LKD Terstruktur", "Angka Kredit (KUM)", "Portofolio Publikasi", "Roadmap Karir Jelas"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <ul className="flex flex-col gap-2 mb-6">
              {["Konsultasi awal 100% gratis", "Analisis posisi karir Anda saat ini", "Strategi publikasi jangka panjang"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-sm border border-slate-700 hover:border-slate-600 transition-all"
              >
                Konsultasi Karir Gratis
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm mb-3">Tidak yakin harus pilih skema yang mana?</p>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold text-sm transition-colors"
          >
            Diskusikan kebutuhan Anda bersama tim kami
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
