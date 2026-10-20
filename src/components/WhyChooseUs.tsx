"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Clock, Trophy } from "lucide-react";

export const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-orange-500" />,
      title: "Legal & Terpercaya",
      description: "Perusahaan berbadan hukum resmi dengan rekam jejak ribuan publikasi sukses."
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: "Proses Cepat",
      description: "Alur kerja efisien yang memangkas waktu tunggu publikasi tanpa mengorbankan kualitas."
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "Layanan 24/7",
      description: "Tim support kami siap membantu dan memberikan update status naskah Anda kapan saja."
    },
    {
      icon: <Trophy className="h-8 w-8 text-orange-500" />,
      title: "Kualitas Premium",
      description: "Standar editing dan formatting tingkat internasional untuk meningkatkan peluang naskah lolos seleksi."
    }
  ];

  return (
    <section id="keunggulan" className="py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-jakarta text-slate-900 dark:text-white mb-4">
            Mengapa Memilih Litir Publisher?
          </h2>
          <p className="text-sm md:text-lg text-slate-600 dark:text-slate-300">
            Kami menawarkan lebih dari sekadar jasa publikasi. Kami memberikan ketenangan pikiran dan jaminan profesionalisme.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5 group text-left"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-orange-500/10 dark:bg-slate-800 shadow-sm border border-orange-500/20 dark:border-slate-700 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
