"use client";

import { motion } from "framer-motion";

export const MediaPartner = () => {
  const mediaLogos = [
    { name: "Kompas", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Kompas_logo.svg/512px-Kompas_logo.svg.png" },
    { name: "Detik", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Logo_detikcom.svg/512px-Logo_detikcom.svg.png" },
    { name: "Republika", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Republika_logo.svg/512px-Republika_logo.svg.png" },
    { name: "Liputan6", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Liputan6_logo_2021.svg/512px-Liputan6_logo_2021.svg.png" },
    { name: "Tribunnews", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Tribun_Network_logo.svg/512px-Tribun_Network_logo.svg.png" },
    { name: "Sindonews", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Sindo_Media_logo.svg/512px-Sindo_Media_logo.svg.png" },
  ];

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-xl md:text-2xl font-bold font-jakarta text-slate-900 dark:text-white mb-2">Media Partnership</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">Telah diliput dan dipercaya oleh berbagai media nasional terkemuka.</p>
        </motion.div>

        {/* Marquee / Auto scrolling container */}
        <div className="relative w-full max-w-5xl mx-auto flex overflow-x-hidden group">
          {/* Left/Right Fade Gradients for smooth edges */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Content - we duplicate the array to make it infinite */}
          <div className="flex items-center space-x-12 px-12 animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
            {[...mediaLogos, ...mediaLogos].map((media, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 flex items-center justify-center w-32 h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 bg-white/10 dark:bg-white/5 rounded-lg p-2"
              >
                <img 
                  src={media.url} 
                  alt={media.name} 
                  className="max-w-full max-h-full object-contain filter brightness-95 contrast-125" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
