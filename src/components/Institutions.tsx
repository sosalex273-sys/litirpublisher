"use client";

import { motion } from "framer-motion";

export const Institutions = () => {
  const logos = [
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
    { name: "UIN", url: "https://goacademica.com/wp-content/uploads/2023/11/uinlogolc.png" }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 font-jakarta mb-3 tracking-tight">
            Litir Publisher
          </h2>
          <p className="text-xl md:text-2xl font-bold text-slate-600">
            Telah Melayani Kolega dari Berbagai Institusi
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-7xl mx-auto">
          {logos.map((logo, idx) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 5) * 0.1 }}
              className="w-32 h-16 md:w-40 md:h-20 relative flex items-center justify-center transition-transform hover:scale-110 duration-300 opacity-90 hover:opacity-100"
            >
              <img 
                src={logo.url} 
                alt={`Logo ${logo.name}`}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `<span class="font-bold text-slate-400">${logo.name}</span>`;
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
