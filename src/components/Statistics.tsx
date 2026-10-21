"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, BookOpenCheck, Building2, Globe2 } from "lucide-react";

const Counter = ({ to, suffix = "", start }: { to: number; suffix?: string; start: boolean }) => {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState<string>("0" + suffix);

  useEffect(() => {
    if (start) {
      const controls = animate(count, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest).toLocaleString("id-ID") + suffix);
        },
      });
      return () => controls.stop();
    }
  }, [count, start, to, suffix]);

  return <span>{displayValue}</span>;
};

export const Statistics = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px" });

  const stats = [
    {
      value: 1350,
      suffix: "+",
      label: "Peneliti Terbantu",
      sublabel: "Akademisi & Praktisi",
      icon: Users,
      glow: "group-hover:shadow-amber-500/10",
      accent: "from-amber-500/20 to-orange-500/5",
    },
    {
      value: 600,
      suffix: "+",
      label: "Naskah Ilmiah Terbit",
      sublabel: "Nasional & Internasional",
      icon: BookOpenCheck,
      glow: "group-hover:shadow-orange-500/10",
      accent: "from-orange-500/20 to-amber-500/5",
    },
    {
      value: 60,
      suffix: "+",
      label: "Afiliasi Institusi Kampus",
      sublabel: "Universitas & Badan Riset",
      icon: Building2,
      glow: "group-hover:shadow-yellow-500/10",
      accent: "from-yellow-500/20 to-amber-500/5",
    },
    {
      value: 15,
      suffix: "+",
      label: "Jangkauan Negara",
      sublabel: "Kolaborasi Riset Global",
      icon: Globe2,
      glow: "group-hover:shadow-amber-500/10",
      accent: "from-amber-500/20 to-orange-500/5",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-slate-950 text-white overflow-hidden relative border-y border-slate-900"
    >
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,146,60,0.04)_0%,_transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-amber-500/25 text-amber-400 text-xs sm:text-sm font-semibold mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Rekam Jejak & Pencapaian</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-white tracking-tight leading-tight mb-4"
          >
            Dedikasi Nyata dalam Mendorong{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent">
              Publikasi Ilmiah Berkualitas
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Angka yang membuktikan komitmen dan konsistensi kami dalam mendampingi para akademisi menuju keberhasilan publikasi bereputasi.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/40 rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${stat.glow} overflow-hidden`}
              >
                {/* Subtle top accent gradient */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.accent}`}
                />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 group-hover:border-amber-500/40 transition-all duration-300 shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Counter */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-white tracking-tight mb-2">
                  <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent">
                    <Counter to={stat.value} suffix={stat.suffix} start={isInView} />
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="font-bold text-sm sm:text-base text-slate-200 font-jakarta mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {stat.sublabel}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
