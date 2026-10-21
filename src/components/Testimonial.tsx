"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "@/data/testimonials";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export const Testimonial = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4500, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  return (
    <section className="relative py-16 md:py-28 overflow-hidden bg-slate-950 border-t border-slate-900 text-white">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/5 rounded-full blur-[130px]" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-amber-500/25 text-amber-400 text-xs sm:text-sm font-semibold mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Ulasan & Bukti Kepuasan</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-white tracking-tight leading-tight mb-4"
          >
            Pengalaman Nyata dari Para{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent">
              Dosen & Peneliti
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Ratusan akademisi telah membuktikan kemudahan, transparansi, dan kepastian proses penerbitan naskah bersama Litir Publisher.
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/50 backdrop-blur-md flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 hover:scale-105 shadow-xl"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-amber-400" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/50 backdrop-blur-md flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 hover:scale-105 shadow-xl"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-amber-400" />
          </button>

          <div className="overflow-hidden mx-5 md:mx-8" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((testi) => (
                <div
                  key={testi.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                >
                  <div className="h-full rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 p-7 flex flex-col gap-5 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 group relative overflow-hidden">
                    {/* Glow on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Quote Icon */}
                    <Quote className="absolute top-5 right-6 w-12 h-12 text-amber-500/10 group-hover:text-amber-500/20 transition-colors duration-300 pointer-events-none" />

                    {/* Stars */}
                    <div className="flex items-center gap-1 relative z-10">
                      {[...Array(testi.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-slate-300 text-sm leading-relaxed flex-1 italic relative z-10">
                      &ldquo;{testi.content}&rdquo;
                    </p>

                    {/* Divider */}
                    <div className="border-t border-slate-800 relative z-10" />

                    {/* Profile */}
                    <div className="flex items-center gap-3 relative z-10">
                      <div className="relative">
                        <img
                          src={testi.image}
                          alt={testi.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-amber-500/40 shadow-md"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                              testi.name
                            )}&background=f59e0b&color=0f172a&size=150`;
                          }}
                        />
                        <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-slate-900" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm font-jakarta">
                          {testi.name}
                        </h4>
                        <p className="text-xs text-amber-400/80 font-medium">
                          {testi.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-8 bg-gradient-to-r from-amber-400 to-orange-500"
                  : "w-2 bg-slate-800 hover:bg-slate-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
