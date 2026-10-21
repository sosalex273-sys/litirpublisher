"use client";

import { motion } from "framer-motion";
import { faqs } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { MessageCircle, ArrowRight } from "lucide-react";

export const FAQ = () => {
  const waLink = "https://wa.me/628981669927";

  return (
    <section
      id="faq"
      className="py-16 md:py-24 lg:py-32 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column: Heading & Quick Help Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 flex flex-col justify-between"
          >
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-amber-500/25 text-amber-400 text-xs sm:text-sm font-semibold mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>Pusat Bantuan & Informasi</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-white tracking-tight leading-tight mb-4">
                Pertanyaan Seputar{" "}
                <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent">
                  Layanan Publikasi
                </span>
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
                Temukan jawaban transparan mengenai estimasi waktu penerbitan, garansi pendampingan naskah, alur kerja, hingga kemudahan skema pembayaran termin di Litir Publisher.
              </p>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base font-jakarta">
                    Punya Pertanyaan Lain?
                  </h4>
                  <p className="text-xs text-slate-400">
                    Tim konsultan kami siap merespons cepat.
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Diskusikan kebutuhan target indeksasi Anda bersama tim kami secara gratis tanpa komitmen awal.
              </p>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-bold text-xs shadow-lg shadow-orange-500/10 transition-all duration-200 group/btn"
              >
                <span>Tanya Konsultan via WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Card-Based Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-7/12"
          >
            <Accordion type="single" collapsible className="w-full space-y-3.5">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/40 rounded-2xl px-5 sm:px-6 py-1 transition-all duration-300 overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base font-bold text-white hover:text-amber-400 hover:no-underline font-jakarta py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 leading-relaxed text-xs sm:text-sm pb-4 pt-1 border-t border-slate-800/60">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
