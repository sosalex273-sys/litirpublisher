"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export const Partner = () => {
  const partners = [
    { name: "Universitas Indonesia", short: "UI" },
    { name: "Institut Teknologi Bandung", short: "ITB" },
    { name: "Universitas Gadjah Mada", short: "UGM" },
    { name: "Universitas Airlangga", short: "UNAIR" },
    { name: "Universitas Brawijaya", short: "UB" },
    { name: "Universitas Diponegoro", short: "UNDIP" },
    { name: "IPB University", short: "IPB" },
  ];

  return (
    <section className="py-10 md:py-14 bg-slate-950 border-y border-slate-900/90 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <GraduationCap className="w-4 h-4 text-amber-400" />
          <p className="text-center text-xs md:text-sm font-semibold text-slate-400 uppercase tracking-widest font-jakarta">
            Kolaborasi Doktor, Dosen & Peneliti dari Kampus Unggulan
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900 transition-all duration-300 hover:-translate-y-0.5 cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 group-hover:bg-amber-400 transition-colors" />
              <span className="text-xs sm:text-sm font-semibold font-jakarta text-slate-300 group-hover:text-white transition-colors">
                {partner.name}
              </span>
              <span className="text-[10px] font-bold text-amber-400/70 bg-amber-500/10 px-1.5 py-0.5 rounded">
                {partner.short}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
