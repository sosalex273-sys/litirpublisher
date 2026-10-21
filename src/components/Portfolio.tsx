"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Award,
  Globe,
  CheckCircle2,
  FileText,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { portfoliosData } from "@/data/portfolio";

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showAll, setShowAll] = useState<boolean>(false);

  const categories = [
    { key: "all", label: "Semua Karya" },
    { key: "sinta", label: "Jurnal SINTA" },
    { key: "internasional", label: "Internasional Global" },
    { key: "nasional", label: "Nasional ISSN" },
  ];

  const filteredData = portfoliosData.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  const displayedItems = showAll ? filteredData : filteredData.slice(0, 8);

  const getScopeBadgeColor = (scope: string) => {
    if (scope.includes("SINTA 2")) return "bg-emerald-500 text-white";
    if (scope.includes("SINTA 3")) return "bg-blue-500 text-white";
    if (scope.includes("SINTA 4")) return "bg-amber-400 text-slate-950";
    if (scope.includes("SINTA 5")) return "bg-orange-500 text-slate-950";
    if (scope.includes("Internasional")) return "bg-purple-500 text-white";
    return "bg-sky-500 text-white";
  };

  return (
    <section id="portofolio" className="py-16 md:py-24 lg:py-32 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-amber-500/25 text-amber-400 text-xs sm:text-sm font-semibold mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Bukti & Jejak Rekam Publikasi</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-white tracking-tight leading-tight mb-4">
            Karya Ilmiah yang Telah{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent">
              Berhasil Terbit & Terindeks
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Bukti nyata dedikasi kami dalam mengantarkan karya para dosen, peneliti, dan akademisi menembus jurnal nasional terakreditasi SINTA hingga jurnal internasional bereputasi tinggi.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setSelectedCategory(cat.key);
                setShowAll(false);
              }}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat.key
                  ? "bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold shadow-lg shadow-orange-500/20 scale-105"
                  : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat.label}
              {cat.key === "all" ? ` (${portfoliosData.length})` : ""}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {displayedItems.map((item, index) => {
              const hasCustomImage = Boolean(item.image && item.image.trim() !== "");

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: (index % 4) * 0.08 }}
                  className="group relative rounded-2xl overflow-hidden bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Scope Badge Top-Left */}
                  <div className="absolute top-3 left-3 z-20">
                    <span
                      className={`inline-block px-3 py-1 text-[11px] font-extrabold rounded-full shadow-md backdrop-blur-md ${getScopeBadgeColor(
                        item.scope
                      )}`}
                    >
                      {item.scope}
                    </span>
                  </div>

                  {/* Top: Image or Auto Academic Cover */}
                  <div className="aspect-[3/4] w-full relative overflow-hidden bg-slate-950 flex flex-col justify-between p-5">
                    {hasCustomImage ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      /* Auto Academic Digital Cover Card */
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 p-6 flex flex-col justify-between border-b border-slate-800">
                        {/* Decorative pattern */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />

                        {/* Top Branding inside Card */}
                        <div className="relative z-10 flex items-center justify-end">
                          <span className="text-[10px] tracking-wider uppercase font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                            Litir Publisher
                          </span>
                        </div>

                        {/* Center Visual: Academic Emblem */}
                        <div className="relative z-10 my-auto text-center flex flex-col items-center">
                          <div className="w-16 h-16 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center mb-3 shadow-inner group-hover:scale-110 group-hover:border-amber-500/40 transition-transform">
                            {item.scope.includes("Internasional") ? (
                              <Globe className="w-8 h-8 text-purple-400" />
                            ) : item.scope.includes("SINTA") ? (
                              <Award className="w-8 h-8 text-amber-400" />
                            ) : (
                              <BookOpen className="w-8 h-8 text-sky-400" />
                            )}
                          </div>
                          <span className="text-[11px] font-bold text-slate-300 uppercase tracking-widest font-jakarta">
                            Terbit & Terindeks
                          </span>
                          <span className="text-xs text-amber-400 font-semibold mt-0.5">
                            Official Verified Publication
                          </span>
                        </div>

                        {/* Bottom Metadata Icon Bar */}
                        <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-2.5">
                          <span className="flex items-center gap-1 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Peer-Reviewed
                          </span>
                          <span className="flex items-center gap-1 font-medium">
                            <FileText className="w-3.5 h-3.5 text-amber-400" /> Online
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom: Title & Action Button */}
                  <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-slate-900/90 border-t border-slate-800">
                    <h3 className="text-white font-bold font-jakarta text-sm leading-snug line-clamp-2 mb-4 group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>

                    {/* External Link Button */}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 active:scale-95 text-slate-950 font-bold text-xs shadow-md shadow-orange-500/10 transition-all duration-200 group/btn"
                    >
                      <span>{item.buttonText || "Lihat Artikel Jurnal"}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {filteredData.length > 8 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-800 hover:border-amber-500/40 shadow-lg transition-all duration-200"
            >
              <span>
                {showAll ? "Tampilkan Lebih Sedikit" : `Lihat Semua Karya (${filteredData.length})`}
              </span>
              {showAll ? <ChevronUp className="w-4 h-4 text-amber-400" /> : <ChevronDown className="w-4 h-4 text-amber-400" />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
