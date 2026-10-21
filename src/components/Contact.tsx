"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Building2, Clock, MessageCircle, ArrowRight } from "lucide-react";

export const Contact = () => {
  const waLink = "https://wa.me/628981669927";

  return (
    <section id="kontak" className="py-16 md:py-24 lg:py-32 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,146,60,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-amber-500/25 text-amber-400 text-xs sm:text-sm font-semibold mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Layanan Komunikasi & Konsultasi</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-white tracking-tight leading-tight mb-4"
          >
            Terhubung Langsung Bersama{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent">
              Tim Litir Publisher
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
          >
            Konsultasikan rencana naskah jurnal, target kenaikan jabatan fungsional (JAD), atau pengurusan HKI Anda bersama tim konsultan kami.
          </motion.p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Kantor Operasional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-jakarta mb-2">
                Kantor Operasional
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                Desa Tateli Tiga, Jaga III, Kecamatan Mandolang, Kabupaten Minahasa, Sulawesi Utara
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-amber-400/80 font-medium pt-3 border-t border-slate-800">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Senin – Sabtu (08.00 – 22.00)</span>
            </div>
          </motion.div>

          {/* Card 2: Hotline & WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-5">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-jakarta mb-2">
                Hotline & WhatsApp
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                Layanan komunikasi langsung bersama tim customer care dan konsultan pendamping naskah.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-emerald-400 hover:text-emerald-300 font-mono tracking-wide flex items-center gap-1.5"
              >
                +62 898-1669-927
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Card 3: Legalitas & Entitas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-5">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-jakarta mb-2">
                Entitas Perusahaan
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                Badan usaha resmi CV Litir Publisher untuk administrasi, perpajakan, dan penerbitan bukti legalitas.
              </p>
            </div>
            <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-800">
              <span className="text-slate-500">NIB Resmi:</span>
              <span className="font-mono font-bold text-amber-400">0304220013798</span>
            </div>
          </motion.div>
        </div>

        {/* Big Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div className="text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-white font-jakarta mb-2">
              Siap Menerbitkan Naskah Anda Sekarang?
            </h4>
            <p className="text-sm text-slate-400 max-w-xl">
              Konsultasikan draft naskah Anda tanpa dipungut biaya pendaftaran awal.
            </p>
          </div>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-bold text-sm shadow-xl shadow-orange-500/15 transition-all duration-200 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Konsultasi Sekarang via WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
