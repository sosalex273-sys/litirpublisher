"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const AboutUs = () => {
  return (
    <section id="tentang-kami" className="py-12 md:py-24 lg:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200 dark:bg-slate-800 shadow-lg">
              <img
                src="/images/about.png"
                alt="Tim Litir Publisher"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay" />
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl max-w-[200px] border border-slate-100 dark:border-slate-800 hidden md:block">
              <div className="text-4xl font-bold text-orange-500 font-jakarta mb-2">10+</div>
              <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">Tahun Pengalaman di Dunia Publikasi</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-jakarta text-slate-900 dark:text-white mb-4 md:mb-6 leading-tight">
              Mitra Terpercaya untuk Kesuksesan Akademik Anda
            </h2>
            <p className="text-sm md:text-lg text-slate-600 dark:text-slate-300 mb-6 md:mb-8 leading-relaxed">
              <strong className="text-slate-900 dark:text-white">LITIR PUBLISHER</strong> adalah Lembaga Publikasi Ilmiah yang sudah berdiri sejak 2018 dan resmi berbadan hukum dengan Nomor Induk Berusaha (NIB): 0304220013798 serta sudah berbentuk CV. Sejak didirikan, LITIR PUBLISHER telah membantu ribuan akademisi dalam menerbitkan jurnal dan buku, baik yang terakreditasi nasional maupun bereputasi internasional.
            </p>
            <ul className="space-y-4">
              {[
                "Tim Ahli & Reviewer Bersertifikasi Internasional",
                "Fokus pada Target Angka Kredit Dosen (JAD)",
                "Jaminan Keamanan & Kerahasiaan Naskah (NDA)",
                "Konsultasi Personal Hingga Artikel Terbit"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-primary/10 p-1 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
