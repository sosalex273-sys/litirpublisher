"use client";

import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

export const CTA = () => {
  const waLink = "https://wa.me/628981669927";

  return (
    <section className="py-16 md:py-24 lg:py-28 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,146,60,0.06)_0%,_transparent_70%)] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-14 lg:p-16 text-center shadow-2xl overflow-hidden"
        >
          {/* Subtle top golden light bar */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Mulai Perjalanan Publikasi Anda</span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-white mb-5 leading-tight tracking-tight">
            Wujudkan Publikasi Ilmiah Bereputasi{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent block sm:inline">
              Bersama Litir Publisher
            </span>
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            Jangan biarkan naskah berharga Anda terhambat oleh proses teknis yang rumit. Dapatkan pendampingan profesional dari reviewer dan editor berpengalaman sekarang.
          </p>

          {/* Primary Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-extrabold text-base sm:text-lg shadow-xl shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5 text-slate-950" />
              <span>Konsultasi Naskah Gratis via WhatsApp</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-6 border-t border-slate-800/80 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>100% Konsultasi Awal Bebas Biaya</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Berbadan Hukum Resmi (NIB: 0304220013798)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Perlindungan Hak Cipta & NDA</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
