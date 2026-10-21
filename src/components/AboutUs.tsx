"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Award } from "lucide-react";

export const AboutUs = () => {
  const highlights = [
    {
      title: "Tim Reviewer & Editor Berpengalaman",
      desc: "Pendampingan substansi naskah komprehensif lintas disiplin ilmu.",
    },
    {
      title: "Dukungan Kenaikan JAD & Syarat Kelulusan",
      desc: "Dirancang terarah memenuhi target Angka Kredit Dosen dan pascasarjana.",
    },
    {
      title: "Keamanan & Kerahasiaan Naskah (NDA)",
      desc: "Menjaga integritas hak cipta, etika akademik, dan orisinalitas riset Anda.",
    },
    {
      title: "Asistensi Intensif Hingga Terbit",
      desc: "Panduan transparan dari review, proofreading, hingga terbit resmi.",
    },
  ];

  return (
    <section
      id="tentang-kami"
      className="py-16 md:py-24 lg:py-32 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column: Image with Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Main Image Frame */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-800 shadow-2xl">
              <Image
                src="/images/gambardiskusi.png"
                alt="Tim Litir Publisher Berdiskusi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Floating Glassmorphic Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-2 sm:-right-6 bg-slate-900/95 border border-slate-700/80 p-5 sm:p-6 rounded-2xl shadow-2xl backdrop-blur-md max-w-[220px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-jakarta leading-none">
                  7+
                </div>
              </div>
              <div className="text-xs sm:text-sm text-slate-200 font-semibold font-jakarta leading-snug">
                Tahun Dedikasi Publikasi Ilmiah
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                Berdiri sejak 2018
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-amber-500/25 text-amber-400 text-xs sm:text-sm font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>Mengenal Litir Publisher</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-white tracking-tight leading-tight mb-6">
              Mitra Strategis & Terpercaya Menuju{" "}
              <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent">
                Keberhasilan Publikasi Akademik
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
              <strong className="text-white font-semibold">LITIR PUBLISHER</strong> adalah lembaga pendampingan dan publikasi ilmiah berbadan hukum resmi (CV) dengan Nomor Induk Berusaha (NIB): <span className="text-amber-400 font-mono font-medium">0304220013798</span> yang telah berdiri sejak tahun 2018. Kami hadir untuk mendampingi para akademisi, dosen, dan peneliti di seluruh Indonesia dalam menembus jurnal nasional terakreditasi (SINTA) hingga jurnal internasional bereputasi tinggi (Scopus, Copernicus, & EBSCO) secara transparan, profesional, dan akuntabel.
            </p>

            {/* Highlights List */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start gap-3.5 group"
                >
                  <div className="mt-0.5 p-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 group-hover:bg-amber-500/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-slate-100 font-jakarta leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
