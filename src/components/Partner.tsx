"use client";

import { motion } from "framer-motion";

export const Partner = () => {
  const partners = [
    "Universitas Indonesia",
    "Institut Teknologi Bandung",
    "Universitas Gadjah Mada",
    "Universitas Airlangga",
    "Universitas Brawijaya",
  ];

  return (
    <section className="py-10 bg-slate-50 dark:bg-slate-900/80 border-y border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-xs md:text-sm font-semibold text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-wider">
          Dipercaya oleh Dosen & Peneliti dari
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-base md:text-xl font-bold font-jakarta text-slate-800 dark:text-slate-200"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
