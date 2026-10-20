"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration: 2.5, ease: "easeOut" });
    }
  }, [count, isInView, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export const Statistics = () => {
  const stats = [
    { value: 1358, suffix: "+", label: "Happy Client" },
    { value: 598, suffix: "", label: "Article Published" },
    { value: 57, suffix: "", label: "Affiliation" },
    { value: 15, suffix: "", label: "Country Served" },
  ];

  return (
    <section className="py-12 md:py-20 bg-[#0B1536] text-white overflow-hidden relative border-y border-blue-950">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold font-jakarta leading-tight"
          >
            Jumlah Pendampingan dan Konsultasi <br />
            Litir Publisher
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col items-center justify-center space-y-3"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-black font-jakarta text-orange-500 tracking-tighter">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-sm font-medium text-white/70 tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
