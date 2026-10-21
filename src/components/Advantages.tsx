"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldAlert } from "lucide-react";

export const Advantages = () => {
  const points = [
    {
      title: "Cek Plagiasi & AI Komprehensif",
      desc: "Pemeriksaan Turnitin resmi dengan similarity rendah dan verifikasi keaslian naskah.",
    },
    {
      title: "Reviewer Bergelar Doktor / Ph.D",
      desc: "Penelaahan substansi oleh pakar akademik yang relevan dengan rumpun ilmu naskah.",
    },
    {
      title: "Standardisasi Sitasi & Layout",
      desc: "Sinkronisasi referensi (Mendeley/Zotero) dan penyesuaian gaya selingkung publisher.",
    },
    {
      title: "Garansi Asistensi Revisi",
      desc: "Pendampingan tanggapan masukan reviewer hingga memperoleh keputusan penerimaan.",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column: Text & Points */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-amber-500/25 text-amber-400 text-xs sm:text-sm font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>Jaminan Kualitas Editorial</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-white tracking-tight leading-tight mb-5">
              Kualitas Standar{" "}
              <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent">
                Internasional
              </span>{" "}
              untuk Setiap Naskah Anda
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
              Didukung oleh tim editor substantif, proofreader bersertifikasi, dan akademisi berpengalaman yang memahami struktur, kaidah sitasi, serta kriteria ketat publisher global.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/40 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/5 group"
                >
                  <div className="mt-0.5 p-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 group-hover:bg-amber-500/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white font-jakarta mb-1 group-hover:text-amber-300 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Image Frame with Floating Badge */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Image Container */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-800 shadow-2xl">
              <Image
                src="/images/sedangbekerja.png"
                alt="Tim Profesional Sedang Bekerja"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Floating Trust Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -left-2 sm:-left-6 bg-slate-900/95 border border-slate-700/80 p-5 rounded-2xl shadow-2xl backdrop-blur-md max-w-[240px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold text-emerald-400 font-jakarta">
                  100% Etika Publikasi
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Bebas jurnal predator, melindungi reputasi akademik naskah Anda.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
