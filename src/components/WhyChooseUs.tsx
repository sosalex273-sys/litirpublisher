"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Headphones, Award } from "lucide-react";

export const WhyChooseUs = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Badan Hukum Resmi & Akuntabel",
      description:
        "Terdaftar resmi berbadan hukum CV dengan NIB sah, menjamin keamanan transaksi tanpa risiko jurnal predator.",
      accent: "from-amber-500/20 to-orange-500/5",
    },
    {
      icon: Zap,
      title: "Proses Terukur & Efisien",
      description:
        "Alur kerja editorial sistematis untuk memangkas hambatan teknis demi mengejar target wisuda atau kenaikan pangkat.",
      accent: "from-orange-500/20 to-amber-500/5",
    },
    {
      icon: Headphones,
      title: "Konsultasi Responsif & Transparan",
      description:
        "Komunikasi berkala mengenai perkembangan status naskah secara terbuka langsung bersama tim pendamping.",
      accent: "from-yellow-500/20 to-amber-500/5",
    },
    {
      icon: Award,
      title: "Standar Editorial Internasional",
      description:
        "Pemeriksaan naskah menyeluruh (proofreading, similarity check, & formatting) sesuai kriteria ketat jurnal tujuan.",
      accent: "from-amber-500/20 to-orange-500/5",
    },
  ];

  return (
    <section
      id="keunggulan"
      className="py-16 md:py-24 lg:py-32 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900"
    >
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,146,60,0.04)_0%,_transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-amber-500/25 text-amber-400 text-xs sm:text-sm font-semibold mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Standar Keunggulan Litir</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-white tracking-tight leading-tight mb-4"
          >
            Alasan Utama Akademisi Memilih{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent">
              Litir Publisher
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Kami menghadirkan integritas, kepastian proses, dan standar editorial tinggi agar setiap karya ilmiah Anda memperoleh pengakuan akademik yang layak.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/40 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10 overflow-hidden text-left"
              >
                {/* Top accent gradient bar on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-amber-400 mb-6 group-hover:bg-gradient-to-br group-hover:from-amber-400 group-hover:to-orange-500 group-hover:text-slate-950 group-hover:scale-105 group-hover:border-amber-400 transition-all duration-300 shadow-inner">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white font-jakarta mb-3 leading-snug group-hover:text-amber-300 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
