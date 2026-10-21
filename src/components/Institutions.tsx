"use client";

import { motion } from "framer-motion";

const institutions = [
  { name: "BRIN", url: "https://goacademica.com/wp-content/uploads/2023/11/brin.png" },
  { name: "DPR RI", url: "https://goacademica.com/wp-content/uploads/2023/11/dprri.png" },
  { name: "BUMN", url: "https://goacademica.com/wp-content/uploads/2023/11/kemenbumn.png" },
  { name: "KPPU", url: "https://goacademica.com/wp-content/uploads/2023/11/kppu.png" },
  { name: "LPSK", url: "https://goacademica.com/wp-content/uploads/2023/11/lpsk.png" },
  { name: "USK", url: "https://goacademica.com/wp-content/uploads/2023/11/USK-Universitas-Syiah-Kuala-ganti-sebutan-Unsyiah-743062296.png" },
  { name: "Atma Jaya", url: "https://goacademica.com/wp-content/uploads/2023/11/Logo-Unika-Atma-Jaya-3062972639.png" },
  { name: "UII", url: "https://goacademica.com/wp-content/uploads/2023/11/UII-Web-Logo-3531387880.png" },
  { name: "Binus", url: "https://goacademica.com/wp-content/uploads/2023/11/LogoBinusUniversity-1178849172.png" },
  { name: "UPI", url: "https://goacademica.com/wp-content/uploads/2023/11/UPI-Logo-white.png" },
  { name: "UI", url: "https://goacademica.com/wp-content/uploads/2023/11/logo-ui-_horizontal_no_frame_lightbackground-1619480755.png" },
  { name: "ITB", url: "https://goacademica.com/wp-content/uploads/2023/11/logo-itb-1920-new.png" },
  { name: "IPB", url: "https://goacademica.com/wp-content/uploads/2023/11/Logo-IPB-University-Horizontal-69826082.png" },
  { name: "Undip", url: "https://goacademica.com/wp-content/uploads/2023/11/web-undip-logo.png" },
  { name: "Unpad", url: "https://goacademica.com/wp-content/uploads/2023/11/logo-unpad.png" },
  { name: "UIN", url: "https://goacademica.com/wp-content/uploads/2023/11/uinlogolc.png" },
];

export const Institutions = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      {/* Background radial gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(251,146,60,0.03)_0%,_transparent_65%)] pointer-events-none" />

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
            <span>Jejaring & Kepercayaan Akademik</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-white tracking-tight leading-tight mb-4"
          >
            Dipercaya oleh Rekan Akademisi & Peneliti dari{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent">
              Institusi Terkemuka
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed"
          >
            Kami bangga telah menjadi mitra publikasi ilmiah pilihan bagi dosen, peneliti, dan praktisi dari berbagai universitas serta lembaga riset di seluruh Indonesia.
          </motion.p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {institutions.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 8) * 0.05 }}
              className="group relative bg-slate-900/80 hover:bg-slate-900 border border-slate-800/80 hover:border-amber-500/35 rounded-2xl p-3 h-20 sm:h-24 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/5 overflow-hidden"
            >
              <img
                src={item.url}
                alt={`Logo ${item.name}`}
                className="max-h-10 sm:max-h-12 max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="font-bold text-xs sm:text-sm text-slate-300 text-center font-jakarta tracking-wide">${item.name}</span>`;
                  }
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
