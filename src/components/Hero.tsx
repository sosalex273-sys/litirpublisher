"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  FileCheck2, 
  Award,
  Users
} from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 md:pt-44 md:pb-24 overflow-hidden bg-slate-950 text-slate-100 transition-colors duration-300">
      {/* Ambient Radial Mesh in Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-600/15 via-orange-500/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Tier 1: Top Hero Headline, Copywriting & CTAs (Spacious & Centered) */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold mb-6 shadow-inner shadow-orange-500/10"
          >
            <Sparkles className="h-3.5 w-3.5 text-orange-400 shrink-0" />
            <span>Mitra Riset & Publikasi Ilmiah Terakreditasi Nasional & Global</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold font-jakarta text-white tracking-tight leading-[1.2] sm:leading-[1.15] mb-5"
          >
            Publikasi{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              Jurnal Bereputasi
            </span>{" "}
            Lebih Terarah, Cepat & Terjamin Legal.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 max-w-3xl mb-8 leading-relaxed font-normal"
          >
            Pendampingan intensif dari penyelarasan naskah, review substansi, hingga terbit resmi di jurnal nasional terakreditasi <strong className="text-white font-semibold">(SINTA 1–6)</strong> maupun internasional bereputasi <strong className="text-white font-semibold">(Scopus & Web of Science)</strong>. Solusi terpercaya Dosen & Peneliti untuk akselerasi Jabatan Akademik (JAD) serta pemenuhan BKD.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full"
          >
            <Button
              className="rounded-full px-6 min-h-[58px] sm:min-h-[62px] text-base sm:text-lg font-bold gap-2.5 shadow-2xl shadow-orange-500/30 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white border border-orange-400/40 transition-all duration-200 active:scale-95 hover:scale-105"
              onClick={() => window.open("https://wa.me/628981669927", "_blank")}
            >
              <span>Konsultasi Naskah</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-6 min-h-[58px] sm:min-h-[62px] text-base sm:text-lg font-semibold border-slate-700 hover:border-slate-500 bg-slate-900/80 hover:bg-slate-800 text-slate-200 transition-all duration-200"
              onClick={() => document.getElementById("layanan")?.scrollIntoView({ behavior: "smooth" })}
            >
              Lihat Skema Pendampingan
            </Button>
          </motion.div>

          {/* Micro Stats Highlight */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 pt-6 border-t border-slate-800/80 w-full max-w-2xl"
          >
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center">
                1.200<span className="text-orange-400">+</span>
              </span>
              <span className="text-xs text-slate-400 mt-0.5">Naskah Terbit</span>
            </div>
            <div className="h-8 w-px bg-slate-800 hidden sm:block" />
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center">
                99,2<span className="text-amber-400">%</span>
              </span>
              <span className="text-xs text-slate-400 mt-0.5">Lolos LoA</span>
            </div>
            <div className="h-8 w-px bg-slate-800 hidden sm:block" />
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl font-bold text-emerald-400 tracking-tight flex items-center">
                100<span className="text-xs font-semibold uppercase ml-0.5">%</span>
              </span>
              <span className="text-xs text-slate-400 mt-0.5">MoU & Legalitas Resmi</span>
            </div>
          </motion.div>
        </div>

        {/* Tier 2: Grand Team Showcase (Full Opacity, 100% Uncovered & Authentic) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 sm:mt-16 w-full max-w-5xl mx-auto relative"
        >
          {/* Subtle Ambient Halo behind frame */}
          <div className="absolute -inset-1.5 rounded-[28px] sm:rounded-[36px] bg-gradient-to-r from-orange-500/20 via-blue-600/25 to-amber-500/20 blur-xl opacity-75 -z-10" />

          {/* Floating Pill: Mitra 50+ Kampus */}
          <div className="absolute -top-4 sm:-top-5 right-4 sm:right-8 z-20 bg-slate-900/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-xl flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-semibold text-slate-100">Mitra Riset 50+ Kampus se-Indonesia</span>
          </div>

          {/* Floating Pill: Tim Ahli */}
          <div className="absolute -top-4 sm:-top-5 left-4 sm:left-8 z-20 bg-slate-900/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-xl flex items-center gap-2">
            <Users className="w-4 h-4 text-orange-400" />
            <span className="text-xs font-semibold text-slate-100">Tim Ahli & Reviewer Internal</span>
          </div>

          {/* Main Photo Showcase Container */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-black/80 bg-slate-900 relative group">
            <img
              src="/images/orangkantor1.png"
              alt="Tim Kantor Litir Publisher"
              className="w-full h-auto object-cover object-center transition-transform duration-700 group-hover:scale-[1.01]"
            />

            {/* Bottom Caption Overlay (Sits at the bottom of the photo) */}
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <p className="text-sm sm:text-base font-bold text-white tracking-tight">
                  Tim Konsultan, Editor, & Peer-Reviewer Litir Publisher
                </p>
                <p className="text-xs text-slate-300">
                  Siap mendampingi naskah Anda dari penyelarasan scope hingga terbit di jurnal bereputasi.
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-2">
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Konsultasi Langsung Aktif
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tier 3: Indexed By Brand Ribbon (Original Logos Restored) */}
        <div className="mt-12 sm:mt-16 w-full max-w-5xl mx-auto block px-1 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-full shadow-xl sm:shadow-2xl shadow-black/40 border border-slate-200/80 px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 flex flex-nowrap items-center gap-x-5 sm:gap-x-7 md:gap-x-8 overflow-x-auto no-scrollbar touch-pan-x justify-start md:justify-between w-full"
          >
            <span className="text-[9px] sm:text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest shrink-0 mr-1">
              INDEXED BY:
            </span>
            <span className="text-[#0284c7] font-black text-sm sm:text-base md:text-xl shrink-0 tracking-tight">
              sinta
            </span>
            <span className="text-red-600 font-black text-sm sm:text-base md:text-xl shrink-0 italic tracking-wide">
              GARUDA
            </span>
            <span className="text-blue-900 font-black text-sm sm:text-base md:text-xl shrink-0 tracking-wider">
              EBSCO
            </span>
            <span className="text-orange-500 font-black text-sm sm:text-base md:text-xl shrink-0 tracking-tight">
              Scopus
            </span>
            <span className="text-[#4285F4] font-black text-sm sm:text-base md:text-xl shrink-0">
              Google Scholar
            </span>
            <span className="text-slate-900 font-black text-sm sm:text-base md:text-xl shrink-0">
              Dimensions
            </span>
            <span className="text-teal-600 font-black text-sm sm:text-base md:text-xl shrink-0">
              Crossref
            </span>
            <span className="text-red-500 font-black text-sm sm:text-base md:text-xl shrink-0 font-sans">
              DOAJ
            </span>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
