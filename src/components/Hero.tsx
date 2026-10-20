"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, CheckCircle2, Star, BookOpen, GraduationCap, Award } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-24 pb-12 md:pt-40 md:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] opacity-25 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-blue-700/40 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-medium mb-6 border border-orange-500/20"
            >
              <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
              <span>Pendampingan Publikasi Ilmiah & Konsultasi Karir Dosen</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold font-jakarta text-slate-900 dark:text-white tracking-tight leading-[1.2] md:leading-[1.1] mb-4 md:mb-6"
            >
              Akselerasi <span className="text-gradient">Karir Akademik</span>{" "}
              Anda Bersama Kami.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed"
            >
              Solusi terpercaya bagi <b className="text-slate-900 dark:text-white">Dosen, Peneliti, dan Mahasiswa</b> untuk menerbitkan artikel di Jurnal Nasional (SINTA), Internasional (Scopus/WoS), dan pemenuhan Angka Kredit (JAD) dengan cepat dan aman.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4"
            >
              <Button size="lg" className="w-auto rounded-full px-6 md:px-8 h-12 md:h-14 text-sm md:text-base gap-1.5 md:gap-2 shadow-lg shadow-orange-500/25 bg-orange-500 hover:bg-orange-600 text-white" onClick={() => window.open('https://wa.me/628981669927', '_blank')}>
                Konsultasi Sekarang
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button size="lg" variant="outline" className="w-auto rounded-full px-6 md:px-8 h-12 md:h-14 text-sm md:text-base border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200" onClick={() => document.getElementById('layanan')?.scrollIntoView({ behavior: 'smooth' })}>
                Lihat Layanan Kami
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Image and Floating Badges */}
          <div className="relative w-full h-[550px] md:h-[500px] lg:h-[650px] mt-10 md:mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Decorative Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-full border-[3px] border-primary/20 border-dashed z-0" 
              />
              
              {/* Central Background Shape */}
              <div className="absolute w-[260px] h-[260px] md:w-[380px] md:h-[380px] rounded-full bg-gradient-to-tr from-blue-600/30 via-orange-500/20 to-blue-900/30 border-[6px] md:border-[8px] border-white shadow-xl z-0" />
              
              {/* Image Container */}
              <div className="absolute bottom-0 w-[240px] h-[360px] md:w-[320px] md:h-[480px] bg-slate-100 rounded-t-[120px] md:rounded-t-[160px] shadow-2xl overflow-hidden border-[6px] md:border-8 border-white z-10 flex items-center justify-center">
                  <img 
                    src="/images/hero10.png" 
                    alt="Konsultan Litir Publisher" 
                    className="w-full h-full object-cover object-top" 
                  />
              </div>

              {/* Badge 1: Garansi Acceptance */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute top-[10%] md:top-[15%] left-0 lg:left-0 z-30 bg-white dark:bg-slate-900 px-4 py-2 md:px-5 md:py-3 rounded-2xl shadow-xl border border-amber-100 dark:border-slate-800 flex flex-col items-center justify-center min-w-[140px] md:min-w-[180px] scale-[0.8] md:scale-100 origin-top-left"
              >
                <div className="absolute -top-5 md:-top-6 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white dark:border-slate-900">
                  <Award className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="mt-3 md:mt-4 text-center">
                  <p className="text-[9px] md:text-[11px] font-black text-slate-800 dark:text-slate-100 leading-tight">KONSULTASI AWAL -</p>
                  <p className="text-[9px] md:text-[11px] font-semibold text-slate-600 dark:text-slate-400">Gratis 100%</p>
                </div>
              </motion.div>
              
              {/* Badge 5: Sertifikat Editor (New) */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.8 }}
                className="absolute top-[55%] md:top-[45%] left-[-10px] md:left-[-5px] lg:-left-4 z-20 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col w-[150px] md:w-[180px] scale-[0.8] md:scale-100 origin-bottom-left"
              >
                <div className="p-2 md:p-3 bg-slate-50 dark:bg-slate-800 flex items-center justify-center h-[70px] md:h-[90px] relative">
                  <div className="absolute top-2 left-2 text-[6px] md:text-[8px] font-black text-blue-900 dark:text-blue-400 tracking-wider">SERTIFIKAT</div>
                  {/* Abstract Certificate Visual */}
                  <div className="w-[90%] h-[70%] mt-3 md:mt-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm flex relative">
                     <div className="w-1/3 bg-blue-900 dark:bg-blue-600 h-full"></div>
                     <Award className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 absolute left-2 top-2" />
                     <div className="w-4 h-4 md:w-6 md:h-6 rounded-full border-[2px] md:border-[3px] border-blue-100 dark:border-slate-700 opacity-50 absolute right-2 top-1"></div>
                     <div className="w-full h-full flex flex-col items-end justify-center pr-2 gap-1 mt-1 md:mt-2">
                        <div className="w-6 md:w-8 h-[2px] bg-slate-300 dark:bg-slate-700 rounded"></div>
                        <div className="w-8 md:w-12 h-[2px] bg-slate-300 dark:bg-slate-700 rounded"></div>
                        <div className="w-4 md:w-6 h-[2px] bg-slate-300 dark:bg-slate-700 rounded"></div>
                     </div>
                  </div>
                </div>
                <div className="bg-slate-700 dark:bg-slate-800 text-white text-center py-1.5 md:py-2 px-2 md:px-3">
                  <p className="text-[8px] md:text-[10px] font-bold leading-tight">Editor Bersertifikat -</p>
                  <p className="text-[7px] md:text-[9px] text-slate-300 dark:text-slate-400">Tim Profesional</p>
                </div>
              </motion.div>

              {/* Badge 2: Benefit Pasti */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-0 md:top-[5%] right-[-10px] md:right-0 lg:-right-10 z-20 bg-white dark:bg-slate-900 p-2 md:p-3 rounded-2xl shadow-xl border border-blue-100 dark:border-blue-950 w-[200px] md:w-[240px] scale-[0.8] md:scale-100 origin-top-right"
              >
                <div className="bg-gradient-to-r from-blue-900 to-orange-500 text-white text-[8px] md:text-[10px] font-bold px-2 py-1 md:px-3 md:py-1 rounded-md inline-block mb-1.5 md:mb-2">
                  Benefit Pasti:
                </div>
                <div className="grid grid-cols-1 gap-x-2 gap-y-1 md:gap-y-1.5">
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 md:w-3.5 md:h-3.5 text-orange-500" /><span className="text-[8px] md:text-[10px] font-medium text-slate-700 dark:text-slate-200">Asistensi Hingga Publish</span></div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 md:w-3.5 md:h-3.5 text-orange-500" /><span className="text-[8px] md:text-[10px] font-medium text-slate-700 dark:text-slate-200">Legalitas Jelas</span></div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 md:w-3.5 md:h-3.5 text-orange-500" /><span className="text-[8px] md:text-[10px] font-medium text-slate-700 dark:text-slate-200">Tracking Progress</span></div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 md:w-3.5 md:h-3.5 text-orange-500" /><span className="text-[8px] md:text-[10px] font-medium text-slate-700 dark:text-slate-200">Administrasi Lengkap</span></div>
                </div>
              </motion.div>

              {/* Badge 3: 1200+ Klien Sukses */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
                className="absolute top-[40%] md:top-[45%] right-[-10px] md:right-0 lg:-right-6 z-20 bg-white dark:bg-slate-900 p-2 md:p-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center scale-[0.85] md:scale-100 origin-right"
              >
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-xl md:text-2xl font-black text-slate-700 dark:text-slate-100 tracking-tight">1200+</span>
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-yellow-100 rounded-full flex items-center justify-center text-xs md:text-sm relative">🤩
                    <div className="absolute -top-1 -right-1 flex text-red-500 text-[8px] md:text-[10px]">❤️</div>
                  </div>
                </div>
                <p className="text-[8px] md:text-[10px] font-bold text-slate-600 text-center leading-tight">Klien Sukses - Track<br/>Record Terpercaya</p>
              </motion.div>

              {/* Badge 4: Special SINTA 20% OFF */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute bottom-[5%] md:bottom-[20%] right-[-20px] md:right-[-10px] lg:-right-12 z-30 bg-white pl-3 pr-4 py-1.5 md:pl-4 md:pr-5 md:py-2 rounded-full shadow-lg border border-slate-100 flex items-center gap-2 md:gap-3 scale-[0.8] md:scale-100 origin-bottom-right"
              >
                <div className="flex flex-col leading-none">
                  <span className="text-[#38bdf8] text-[7px] md:text-[9px] font-bold">Special</span>
                  <span className="text-[#0284c7] font-black text-[10px] md:text-xs">SINTA</span>
                </div>
                <div className="text-red-500 font-black text-xl md:text-2xl italic tracking-tighter flex items-start">
                  20<span className="text-[10px] md:text-xs flex flex-col -mt-1"><span className="text-[7px] md:text-[9px]">%</span><span className="text-[7px] md:text-[9px] leading-[0.5]">OFF</span></span>
                </div>
                <div className="h-5 md:h-6 w-px bg-slate-200 mx-0.5 md:mx-1"></div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-slate-700 text-xs md:text-sm">SINTA</span>
                  <span className="bg-teal-200 text-teal-800 font-bold px-1 py-0.5 md:px-1.5 rounded text-[10px] md:text-xs">1 - 6</span>
                </div>
              </motion.div>
              
            </motion.div>
          </div>
          
        </div>

        {/* Badge 6: Indexed By (Floating at bottom across grid) */}
        <div className="mt-12 md:mt-16 w-full max-w-5xl mx-auto block">
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="bg-white rounded-full shadow-lg border border-slate-100 px-6 py-4 flex flex-nowrap items-center justify-between gap-x-4 overflow-x-auto no-scrollbar"
           >
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest shrink-0 mr-2">Indexed by:</span>
              <span className="text-[#0284c7] font-black text-lg shrink-0">sinta</span>
              <span className="text-red-600 font-black text-lg shrink-0 italic">GARUDA</span>
              <span className="text-blue-800 font-black text-lg shrink-0">EBSCO</span>
              <span className="text-orange-500 font-black text-lg shrink-0">Scopus</span>
              <span className="text-blue-500 font-black text-lg shrink-0">Google Scholar</span>
              <span className="text-slate-800 font-black text-lg shrink-0">Dimensions</span>
              <span className="text-teal-600 font-black text-lg shrink-0">Crossref</span>
              <span className="text-red-500 font-black text-lg shrink-0">DOAJ</span>
           </motion.div>
        </div>
      </div>
    </section>
  );
};
