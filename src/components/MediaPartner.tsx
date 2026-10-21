"use client";

import { motion } from "framer-motion";

export const MediaPartner = () => {
  const mediaLogos = [
    {
      name: "Kompas",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Kompas_logo.svg/512px-Kompas_logo.svg.png",
    },
    {
      name: "Detik",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Logo_detikcom.svg/512px-Logo_detikcom.svg.png",
    },
    {
      name: "Republika",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Republika_logo.svg/512px-Republika_logo.svg.png",
    },
    {
      name: "Liputan6",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Liputan6_logo_2021.svg/512px-Liputan6_logo_2021.svg.png",
    },
    {
      name: "Tribunnews",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Tribun_Network_logo.svg/512px-Tribun_Network_logo.svg.png",
    },
    {
      name: "Sindonews",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Sindo_Media_logo.svg/512px-Sindo_Media_logo.svg.png",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-950 border-t border-slate-900 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/25 text-amber-400 text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Publikasi & Liputan Nasional</span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-jakarta text-white tracking-tight mb-2">
            Jejaring Publikasi &{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent">
              Media Partner Terkemuka
            </span>
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
            Litir Publisher telah dipercaya dan diliput dalam penyebarluasan informasi literasi serta publikasi ilmiah di media nasional.
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative w-full max-w-5xl mx-auto flex overflow-x-hidden group">
          {/* Left/Right Fade Gradients for smooth edges */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Content */}
          <div className="flex items-center space-x-6 sm:space-x-8 px-6 animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
            {[...mediaLogos, ...mediaLogos].map((media, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-36 sm:w-40 h-16 sm:h-20 bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-3.5 transition-all duration-300 hover:scale-105 shadow-sm"
              >
                <img
                  src={media.url}
                  alt={media.name}
                  className="max-w-full max-h-full object-contain filter brightness-105"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="font-bold text-xs text-slate-300 font-jakarta">${media.name}</span>`;
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
