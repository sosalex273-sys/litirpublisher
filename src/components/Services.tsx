"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, Globe } from "lucide-react";

export const Services = () => {
  const waLink = "https://wa.me/628981669927";

  return (
    <section id="layanan" className="py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 dark:text-slate-400 font-medium text-sm md:text-base mb-2"
          >
            Manfaatkan Segera Layanan Litir Publisher
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold font-jakarta text-slate-900 dark:text-white"
          >
            Cepat, Mudah & Terpercaya
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1: Jurnal Nasional */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/80 rounded-2xl p-6 md:p-8 flex flex-col shadow-xl shadow-slate-200/40 dark:shadow-none relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110" />
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-4 leading-tight font-jakarta">
              Terbitkan Artikel<br />Ilmiah di Tingkat<br />Nasional
            </h3>
            <p className="text-sm text-slate-600 text-center mb-8 leading-relaxed">
              Litir Publisher menyediakan layanan bimbingan publikasi artikel jurnal di tingkat Nasional (Garuda, Moraref dan Sinta 1-6) dengan kualitas unggul.
            </p>
            
            <div className="bg-white p-4 rounded-lg mb-8 flex flex-col justify-center gap-4 shadow-sm min-h-[120px] w-full border border-slate-200">
              {/* Row 1: Sinta & Moraref */}
              <div className="flex justify-between items-center px-2">
                {/* Sinta Replica */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-full bg-[#113d52] flex items-center justify-center text-white text-[10px] font-bold shrink-0">S</div>
                    <span className="font-bold text-[#113d52] text-2xl tracking-tighter leading-none font-serif">sinta</span>
                  </div>
                  <span className="text-[#f39c12] text-[6px] font-bold tracking-widest pl-7 mt-0.5 uppercase">Science and Technology Index</span>
                </div>
                {/* Moraref Replica */}
                <div className="flex flex-col items-center">
                  <BookOpen className="w-6 h-6 text-[#16a085]" />
                  <span className="text-[#16a085] text-[10px] font-bold tracking-wider mt-0.5">MORAREF</span>
                </div>
              </div>
              
              {/* Row 2: Garuda & Google Scholar */}
              <div className="flex justify-between items-center px-2 mt-2">
                {/* Garuda Replica */}
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white italic font-serif font-bold text-xs">G</div>
                  <div className="flex flex-col">
                    <span className="font-black text-black text-lg tracking-tighter leading-none">GARUDA</span>
                    <span className="text-gray-400 text-[5px] font-bold tracking-widest mt-0.5 uppercase">Garba Rujukan Digital</span>
                  </div>
                </div>
                {/* Google Scholar Replica */}
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white font-bold font-serif text-lg">g</div>
                  <div className="flex flex-col">
                    <span className="font-bold text-blue-500 text-sm tracking-tight leading-none">Google</span>
                    <span className="text-blue-500 text-[8px] font-medium tracking-wide mt-0.5">Scholar</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <a 
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center py-3.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-md"
              >
                Publikasikan Sekarang
              </a>
            </div>
          </motion.div>

          {/* Card 2: Jurnal Internasional (Highlighted) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-primary rounded-2xl p-6 md:p-8 flex flex-col shadow-2xl shadow-primary/30 transform md:-translate-y-4 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-bl-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-tr-[100px] pointer-events-none" />
            
            <h3 className="text-2xl font-bold text-white text-center mb-4 leading-tight font-jakarta relative z-10">
              Terbitkan Artikel<br />Ilmiah di Tingkat<br />Internasional
            </h3>
            <p className="text-sm text-white/90 text-center mb-8 leading-relaxed relative z-10">
              Litir Publisher memberikan layanan publikasi artikel jurnal di tingkat Internasional Bereputasi tinggi (Scopus, WOS, dll) dengan pendampingan ekstra.
            </p>
            
            <div className="bg-white p-4 rounded-lg mb-8 flex flex-col justify-center gap-4 shadow-sm min-h-[160px] w-full relative z-10 border border-slate-200">
              {/* Row 1: Scopus */}
              <div className="flex justify-center w-full mb-2">
                <span className="font-sans text-[#e67e22] text-4xl tracking-tighter font-semibold">
                  Scopus<sup className="text-sm font-normal">®</sup>
                </span>
              </div>
              
              {/* Row 2: WorldCat, ICI, Harvard */}
              <div className="flex justify-between items-center w-full px-1">
                <div className="flex items-center gap-1">
                  <Globe className="w-3 h-3 text-[#27ae60]" />
                  <span className="text-[#34495e] text-[10px] font-bold">WorldCat<sup className="text-[6px]">®</sup></span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#c0392b] font-serif font-bold text-xs italic">ICI</span>
                  <div className="flex flex-col leading-none">
                    <span className="text-black text-[6px] font-bold">JOURNALS</span>
                    <span className="text-black text-[6px] font-bold">MASTER LIST</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-4 bg-[#c0392b] text-white text-[5px] flex items-center justify-center font-serif">VE</div>
                  <div className="flex flex-col leading-none">
                    <span className="text-black text-[7px] font-bold">HARVARD</span>
                    <span className="text-gray-500 text-[6px]">LIBRARY</span>
                  </div>
                </div>
              </div>

              {/* Row 3: EUDL, DOAJ, EBSCO */}
              <div className="flex justify-between items-center w-full px-1">
                <div className="flex flex-col">
                  <span className="text-[#2980b9] font-black text-xs tracking-tighter">EUDL</span>
                  <span className="text-gray-400 text-[4px] uppercase">European Union Digital Library</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#f39c12] font-light text-sm tracking-widest">DOAJ</span>
                  <div className="flex flex-col leading-none">
                    <span className="text-black text-[4px] uppercase">Directory of</span>
                    <span className="text-black text-[4px] uppercase font-bold">Open Access</span>
                    <span className="text-black text-[4px] uppercase font-bold">Journals</span>
                  </div>
                </div>
                <div className="bg-[#0e4b85] text-white px-1.5 py-0.5 rounded-sm">
                  <span className="font-serif font-bold text-[10px] tracking-widest">EBSCO</span>
                </div>
              </div>

              {/* Row 4: Clarivate, Dimensions, Crossref */}
              <div className="flex justify-between items-center w-full px-1 mt-1">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-tr-full rounded-bl-full bg-gradient-to-br from-[#1abc9c] to-[#9b59b6]"></div>
                  <div className="flex flex-col leading-none">
                    <span className="text-black text-[9px] font-black tracking-tight">Clarivate</span>
                    <span className="text-black text-[7px]">Analytics</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-gradient-to-tr from-yellow-400 via-pink-500 to-blue-500 clip-hexagon"></div>
                  <span className="text-gray-600 text-[10px] font-medium">Dimensions</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-sm -ml-1 mt-1"></div>
                  </div>
                  <span className="text-black text-[10px] font-bold">Crossref</span>
                </div>
              </div>
            </div>

            <div className="mt-auto relative z-10">
              <a 
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center py-3.5 rounded-xl bg-white text-primary font-bold hover:bg-slate-50 transition-colors shadow-lg"
              >
                Publikasikan Sekarang
              </a>
            </div>
          </motion.div>

          {/* Card 3: Konsultasi Karir */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col shadow-xl shadow-slate-200/40 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110" />
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-4 leading-tight font-jakarta">
              Konsultasi Karir<br />untuk Dosen /<br />Tenaga Pengajar
            </h3>
            <p className="text-sm text-slate-600 text-center mb-8 leading-relaxed">
              Litir Publisher menawarkan layanan pendampingan karir bagi Dosen terkait dengan pemenuhan angka kredit dan proyeksi kenaikan JAD.
            </p>
            
            <div className="mb-8 flex items-center justify-center p-4 rounded-xl bg-slate-50 border border-slate-100 mt-auto">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="block font-bold text-slate-900 text-sm">Raih Puncak Karir</span>
                  <span className="block text-xs text-slate-500">Bersama Tim Ahli Kami!</span>
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <a 
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center py-3.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-md"
              >
                Konsultasi Sekarang
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a href="#layanan-lainnya" className="inline-flex items-center text-primary font-medium hover:underline">
            Lihat Semua Layanan Kami <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
