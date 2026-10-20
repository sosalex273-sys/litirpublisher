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
  Sparkles
} from "lucide-react";
import { portfoliosData, PortfolioItem } from "@/data/portfolio";

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

  // Tampilkan 8 item pertama secara default, klik 'Lihat Selengkapnya' untuk melihat semua
  const displayedItems = showAll ? filteredData : filteredData.slice(0, 8);

  const getScopeBadgeColor = (scope: string) => {
    if (scope.includes("SINTA 2")) return "bg-emerald-500 text-white";
    if (scope.includes("SINTA 3")) return "bg-blue-600 text-white";
    if (scope.includes("SINTA 4")) return "bg-amber-500 text-white";
    if (scope.includes("SINTA 5")) return "bg-orange-500 text-white";
    if (scope.includes("Internasional")) return "bg-purple-600 text-white";
    return "bg-sky-500 text-white";
  };

  return (
    <section id="portofolio" className="py-16 md:py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs md:text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span>Portofolio & Bukti Publikasi Resmi</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-jakarta text-white tracking-tight mb-4">
            Karya yang Telah <span className="text-orange-500">Terbit</span>
          </h2>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Jejak rekam keberhasilan para akademisi, dosen, dan peneliti yang telah berhasil mempublikasikan karya ilmiah mereka bersama <strong className="text-white">Litir Publisher</strong>.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setSelectedCategory(cat.key);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat.key
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700"
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
                  className="group relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-orange-500/50 shadow-lg hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Scope Badge Top-Left */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className={`inline-block px-3 py-1 text-[11px] font-extrabold rounded-full shadow-md backdrop-blur-md ${getScopeBadgeColor(item.scope)}`}>
                      {item.scope}
                    </span>
                  </div>

                  {/* Top: Image or Auto Academic Cover */}
                  <div className="aspect-[3/4] w-full relative overflow-hidden bg-gradient-to-b from-slate-800 to-slate-950 flex flex-col justify-between p-5">
                    {hasCustomImage ? (
                      <>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                      </>
                    ) : (
                      /* Auto Academic Digital Cover Card */
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1536] via-[#0E1E4C] to-[#070D24] p-6 flex flex-col justify-between border-b border-blue-900/40">
                        {/* Decorative background grid pattern */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

                        {/* Top Branding inside Card */}
                        <div className="relative z-10 flex items-center justify-end">
                          <span className="text-[10px] tracking-wider uppercase font-bold text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                            Litir Publisher
                          </span>
                        </div>

                        {/* Center Visual: Academic Emblem */}
                        <div className="relative z-10 my-auto text-center flex flex-col items-center">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-orange-500/20 border border-blue-400/30 flex items-center justify-center mb-3 shadow-inner group-hover:scale-110 transition-transform">
                            {item.scope.includes("Internasional") ? (
                              <Globe className="w-8 h-8 text-purple-400" />
                            ) : item.scope.includes("SINTA") ? (
                              <Award className="w-8 h-8 text-amber-400" />
                            ) : (
                              <BookOpen className="w-8 h-8 text-sky-400" />
                            )}
                          </div>
                          <span className="text-[11px] font-bold text-slate-300 uppercase tracking-widest">
                            Terbit & Terindeks
                          </span>
                          <span className="text-xs text-orange-400 font-semibold mt-0.5">
                            Official Verified Publication
                          </span>
                        </div>

                        {/* Bottom Metadata Icon Bar */}
                        <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-700/60 pt-2">
                          <span className="flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Peer-Reviewed
                          </span>
                          <span className="flex items-center gap-1">
                            <FileText className="w-3.5 h-3.5 text-blue-400" /> Online
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom: Title & Action Button */}
                  <div className="p-4 md:p-5 flex flex-col flex-1 justify-between bg-slate-950">
                    <h3 className="text-white font-bold font-jakarta text-sm md:text-base leading-snug line-clamp-2 mb-4 group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>

                    {/* External Link Button */}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-semibold text-xs shadow-md shadow-orange-500/20 transition-all duration-200 group/btn"
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 shadow-lg hover:shadow-orange-500/10 transition-all duration-200"
            >
              <span>{showAll ? "Tampilkan Lebih Sedikit" : `Lihat Semua Karya (${filteredData.length})`}</span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
