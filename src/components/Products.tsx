"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Jurnal Nasional Terakreditasi SINTA",
    description: "Naskah Anda kami dampingi penuh dari submit hingga terbit di SINTA 1–6 yang diakui Kemendikbud — proses transparan dan terukur.",
    logoSrc: "/images/logosinta.png",
    logoAlt: "Logo SINTA",
    badgeIcon: "sinta",
    accentColor: "from-blue-500/10 to-blue-600/5",
    borderHover: "hover:border-blue-500/30",
    glowColor: "group-hover:shadow-blue-500/10",
  },
  {
    id: 2,
    title: "Jurnal Terindeks Index Copernicus (ICI)",
    description: "Tingkatkan reputasi akademik Anda dengan publikasi di jurnal internasional yang terindeks Index Copernicus dan diakui secara global.",
    logoSrc: "/images/logocopernicus.png",
    logoAlt: "Logo Copernicus",
    badgeIcon: "copernicus",
    accentColor: "from-emerald-500/10 to-emerald-600/5",
    borderHover: "hover:border-emerald-500/30",
    glowColor: "group-hover:shadow-emerald-500/10",
  },
  {
    id: 3,
    title: "Jurnal Terindeks EBSCO International",
    description: "Perluas jangkauan karya ilmiah Anda ke komunitas riset global melalui jurnal internasional bereputasi yang terindeks EBSCO.",
    logoSrc: "/images/logoebsco.png",
    logoAlt: "Logo EBSCO",
    badgeIcon: "ebsco",
    accentColor: "from-purple-500/10 to-purple-600/5",
    borderHover: "hover:border-purple-500/30",
    glowColor: "group-hover:shadow-purple-500/10",
  },
  {
    id: 4,
    title: "Jurnal Scopus Q1–Q4 Bereputasi Tinggi",
    description: "Raih pengakuan internasional tertinggi dengan publikasi di jurnal Scopus Q1 hingga Q4 bersama editor profesional berpengalaman.",
    logoSrc: "/images/logoscopus.png",
    logoAlt: "Logo Scopus",
    badgeIcon: "scopus",
    accentColor: "from-orange-500/10 to-amber-600/5",
    borderHover: "hover:border-orange-500/30",
    glowColor: "group-hover:shadow-orange-500/10",
  },
];

export const Products = () => {
  return (
    <section id="produk" className="py-16 md:py-24 lg:py-28 bg-slate-950 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,146,60,0.04)_0%,_transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-amber-500/25 text-amber-400 text-xs sm:text-sm font-semibold mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Paket Produk Publikasi Kami</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-white tracking-tight leading-tight mb-4"
          >
            Pilih Paket{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent">
              Publikasi Sesuai Target Anda
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Setiap paket dirancang untuk membantu Anda menembus indeksasi yang tepat — dari nasional hingga jurnal internasional bereputasi global.
          </motion.p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`group relative bg-slate-900 border border-slate-800 ${product.borderHover} rounded-2xl p-6 md:p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${product.glowColor} cursor-default overflow-hidden`}
            >
              {/* Gradient Background Accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`} />

              {/* Logo Badge */}
              <div className="flex justify-center mb-6 relative z-10">
                <div className="w-28 h-28 relative drop-shadow-xl hover:scale-105 transition-transform duration-300">
                  <Image
                    src={product.logoSrc}
                    alt={product.logoAlt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title & Description */}
              <div className="mb-5 relative z-10 flex-1">
                <h3 className="text-base md:text-lg font-bold text-white font-jakarta leading-snug mb-3">
                  {product.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {product.description}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-auto relative z-10">
                <a
                  href={`/produk#${product.badgeIcon}`}
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 text-sm font-semibold transition-colors group/link"
                >
                  Selengkapnya
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-slate-600 text-xs mt-10"
        >
          Semua paket sudah termasuk pendampingan naskah, review internal, dan asistensi submit.
        </motion.p>
      </div>
    </section>
  );
};
