"use client";

import { motion } from "framer-motion";
import { FileText, Search, PenTool, CheckSquare, Award } from "lucide-react";

export const PublicationFlow = () => {
  const steps = [
    { icon: <FileText className="w-7 h-7 text-orange-500" />, title: "Pengiriman Naskah", desc: "Kirim naskah mentah Anda kepada tim kami untuk tahap inisiasi." },
    { icon: <Search className="w-7 h-7 text-orange-500" />, title: "Review Awal", desc: "Pengecekan turnitin, kesesuaian template, dan kelayakan dasar." },
    { icon: <PenTool className="w-7 h-7 text-orange-500" />, title: "Editing & Formatting", desc: "Proses proofreading, translate, dan layouting sesuai standar publisher." },
    { icon: <CheckSquare className="w-7 h-7 text-orange-500" />, title: "Submit & Revisi", desc: "Pendampingan submit ke sistem jurnal dan panduan revisi dari reviewer." },
    { icon: <Award className="w-7 h-7 text-orange-500" />, title: "LoA & Publish", desc: "Menerima Letter of Acceptance dan naskah terbit secara online." }
  ];

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-jakarta text-slate-900 dark:text-white mb-4">
            Alur Publikasi Cepat & Mudah
          </h2>
          <p className="text-sm md:text-lg text-slate-600 dark:text-slate-300">
            Kami menyederhanakan proses yang rumit menjadi langkah-langkah praktis dan transparan.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 dark:bg-slate-700 -translate-y-1/2 z-0" />
          
          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col items-center text-center max-w-[200px] mx-auto"
              >
                <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 border-4 border-slate-100 dark:border-slate-700 shadow-lg shadow-orange-500/10 flex items-center justify-center mb-6 relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center border-2 border-white dark:border-slate-800 shadow">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
