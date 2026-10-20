"use client";

import { motion } from "framer-motion";
import { Scale, FileSignature, CheckCircle } from "lucide-react";

export const Legality = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden"
        >
          {/* Decor */}
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Scale className="w-64 h-64" />
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
                <FileSignature className="h-4 w-4" />
                <span>Legalitas Perusahaan Terjamin</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-jakarta mb-6">
                Bermitra dengan Entitas Bisnis yang Jelas & Legal
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Kami beroperasi di bawah payung hukum badan usaha resmi. Segala bentuk transaksi, kerahasiaan naskah (NDA), dan Letter of Acceptance dijamin keabsahannya.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <span className="font-medium">NIB Resmi dari Kementerian Investasi / BKPM</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <span className="font-medium">NPWP Badan Usaha yang Valid</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <span className="font-medium">Non-Disclosure Agreement (NDA) untuk setiap Klien</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
               <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl w-full max-w-sm">
                  <h3 className="text-xl font-bold mb-6 text-center border-b border-white/10 pb-4">Profil Perusahaan</h3>
                  <div className="space-y-4 text-sm text-slate-300">
                    <div className="flex justify-between">
                      <span className="opacity-70">Nama Entitas</span>
                      <span className="font-medium text-white">Litir Publisher</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-70">Sektor Bisnis</span>
                      <span className="font-medium text-white">Penerbitan & Konsultan</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-70">Domisili</span>
                      <span className="font-medium text-white">Minahasa, Sulawesi Utara</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
