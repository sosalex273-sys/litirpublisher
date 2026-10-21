"use client";

import { motion } from "framer-motion";
import { FileText, Search, PenTool, CheckSquare, Award } from "lucide-react";

export const PublicationFlow = () => {
  const steps = [
    {
      icon: FileText,
      title: "Konsultasi & Penyerahan Naskah",
      desc: "Diskusi awal target indeksasi (SINTA/Scopus) dan penyerahan draf naskah mentah.",
    },
    {
      icon: Search,
      title: "Screening Awal & Similarity",
      desc: "Pengecekan plagiasi (Turnitin), kesesuaian fokus scope, dan author guidelines jurnal.",
    },
    {
      icon: PenTool,
      title: "Editing & Proofreading",
      desc: "Penyempurnaan tata bahasa akademik, reference check, dan penyesuaian layouting.",
    },
    {
      icon: CheckSquare,
      title: "Submit & Asistensi Review",
      desc: "Pendampingan submit ke sistem OJS jurnal serta asistensi perbaikan masukan reviewer.",
    },
    {
      icon: Award,
      title: "LoA & Terbit Online",
      desc: "Penerimaan Letter of Acceptance resmi hingga artikel ilmiah terbit dan terindeks penuh.",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,146,60,0.04)_0%,_transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-amber-500/25 text-amber-400 text-xs sm:text-sm font-semibold mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Alur Kerja Terstruktur</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-white tracking-tight leading-tight mb-4"
          >
            Tahapan Pendampingan Naskah yang{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent">
              Jelas & Transparan
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Setiap langkah dirancang sistematis demi memastikan kepastian proses, menjaga kualitas karya, dan mempercepat penerbitan naskah Anda.
          </motion.p>
        </div>

        {/* Steps Flow */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line (Desktop Only - perfectly aligned with the center of the step icon) */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-amber-500/10 via-amber-500/30 to-amber-500/10 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col items-center text-center max-w-[220px] mx-auto"
                >
                  {/* Step Icon Container */}
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 group-hover:border-amber-500/50 flex items-center justify-center mb-6 relative transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-amber-500/10">
                    <Icon className="w-7 h-7 text-amber-400 group-hover:text-amber-300 transition-colors" />

                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 text-xs font-black flex items-center justify-center shadow-md">
                      {index + 1}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-white font-jakarta text-base mb-2 group-hover:text-amber-300 transition-colors leading-snug">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
