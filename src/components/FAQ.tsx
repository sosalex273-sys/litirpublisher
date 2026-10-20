"use client";

import { motion } from "framer-motion";
import { faqs } from "@/data/faq";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export const FAQ = () => {
  return (
    <section id="faq" className="py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-jakarta text-slate-900 dark:text-white mb-4 leading-tight">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-sm md:text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Temukan jawaban cepat untuk pertanyaan umum seputar layanan publikasi dan HKI di Litir Publisher.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200 dark:border-slate-800 py-2">
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-slate-800 dark:text-slate-100 hover:text-orange-500 dark:hover:text-orange-400 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
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
