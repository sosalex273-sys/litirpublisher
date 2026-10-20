"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Highly detailed SVG Component for the Gold Badge
const GoldBadge = ({ topText, bottomText, iconType }: { topText: string, bottomText: string, iconType: string }) => {
  return (
    <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-xl hover:scale-105 transition-transform duration-300">
      <defs>
        {/* Gradients to simulate 3D gold rim */}
        <linearGradient id="goldOuter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4af37" />
          <stop offset="30%" stopColor="#fff7a1" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="80%" stopColor="#8a631c" />
          <stop offset="100%" stopColor="#d4af37" />
        </linearGradient>
        
        {/* Subtle dark gradient for the large center area */}
        <radialGradient id="blackCenter" cx="50%" cy="50%" r="50%" fx="40%" fy="40%">
          <stop offset="0%" stopColor="#333" />
          <stop offset="60%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>

        {/* Text Paths inside the black circle */}
        <path id="topPath" d="M 17 50 A 33 33 0 0 1 83 50" fill="transparent" />
        <path id="bottomPath" d="M 23 50 A 27 27 0 0 0 77 50" fill="transparent" />
      </defs>

      {/* Main Base (Outer Coin Rim) */}
      <circle cx="50" cy="50" r="48" fill="url(#goldOuter)" stroke="#fff4a3" strokeWidth="0.5" />
      
      {/* Large Inner Black Circle */}
      <circle cx="50" cy="50" r="44" fill="url(#blackCenter)" stroke="#6b4c10" strokeWidth="1" />

      {/* Delicate Gold Laurels inside the black circle */}
      <g fill="none" stroke="url(#goldOuter)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Left Laurel */}
        <path d="M 14 60 C 8 45 16 30 25 21" />
        {/* Left Leaves (Outer) */}
        <path d="M 13 52 L 10 50 M 11.5 45 L 8.5 43 M 12 38 L 9 36 M 14 31 L 11 29 M 17 25 L 14 23" />
        {/* Left Leaves (Inner) */}
        <path d="M 14.5 53 L 17.5 52 M 13.5 46 L 16.5 45 M 14.5 39 L 17.5 38 M 16 32 L 19 31 M 19 26 L 22 25" />

        {/* Right Laurel */}
        <path d="M 86 60 C 92 45 84 30 75 21" />
        {/* Right Leaves (Outer) */}
        <path d="M 87 52 L 90 50 M 88.5 45 L 91.5 43 M 88 38 L 91 36 M 86 31 L 89 29 M 83 25 L 86 23" />
        {/* Right Leaves (Inner) */}
        <path d="M 85.5 53 L 82.5 52 M 86.5 46 L 83.5 45 M 85.5 39 L 82.5 38 M 84 32 L 81 31 M 81 26 L 78 25" />
      </g>

      {/* Circular Texts (Gold text on black background) */}
      <text fill="url(#goldOuter)" fontSize="7" fontWeight="800" letterSpacing="1.2" fontFamily="Montserrat, system-ui, sans-serif">
        <textPath href="#topPath" startOffset="50%" textAnchor="middle">
          {topText}
        </textPath>
      </text>
      <text fill="url(#goldOuter)" fontSize="5.5" fontWeight="700" letterSpacing="1.5" fontFamily="Montserrat, system-ui, sans-serif">
        <textPath href="#bottomPath" startOffset="50%" textAnchor="middle">
          {bottomText}
        </textPath>
      </text>

      {/* Center Icons (Gold on Black) */}
      <g transform="translate(50, 50)">
        {iconType === 'sinta' && (
          // Sinta Wayang Head
          <g transform="scale(0.85) translate(0, 0)">
            {/* The main solid gold head profile */}
            <path 
              d="
                M 12,-15 
                C -5,-20 -20,-5 -22,8 
                C -23,12 -18,14 -15,11 
                C -20,16 -18,20 -13,18 
                C -15,22 -12,24 -8,21 
                C -10,25 -5,27 -2,25
                C 5,20 12,10 12,0
                C 12,-6 5,-12 0,-8
                C -2,-6 0,2 6,2
                C 18,2 25,-15 12,-15
                Z
              " 
              fill="url(#goldOuter)" 
            />
            {/* Eye (cutout/dark line over the gold face) */}
            <path d="M -14,1 Q -9,6 -4,0" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" />
            
            {/* Lower Neck Swoop 1 */}
            <path d="M -10,29 C 0,33 15,33 22,25" fill="none" stroke="url(#goldOuter)" strokeWidth="3" strokeLinecap="round" />
            
            {/* Lower Neck Swoop 2 */}
            <path d="M -5,35 C 5,37 15,35 20,30" fill="none" stroke="url(#goldOuter)" strokeWidth="2" strokeLinecap="round" />
          </g>
        )}
        {iconType === 'copernicus' && (
          // Globe
          <g stroke="url(#goldOuter)" strokeWidth="2.5" fill="none" transform="scale(0.85) translate(0, 0)">
            <circle cx="0" cy="0" r="16" />
            <ellipse cx="0" cy="0" rx="6" ry="16" />
            <ellipse cx="0" cy="0" rx="16" ry="5" />
            <path d="M -16 0 L 16 0 M 0 -16 L 0 16" />
          </g>
        )}
        {iconType === 'ebsco' && (
          // EBSCO Oval logo
          <g transform="scale(1) translate(0, 0)">
            <ellipse cx="0" cy="0" rx="22" ry="10" fill="url(#goldOuter)" />
            <text x="0" y="3" fill="#111" fontSize="10" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" letterSpacing="0">
              EBSCO
            </text>
          </g>
        )}
        {iconType === 'scopus' && (
          <g transform="scale(1) translate(0, -2)">
            <text x="-1" y="6" fill="url(#goldOuter)" fontSize="16" fontWeight="800" fontFamily="'Times New Roman', Times, serif" textAnchor="middle" letterSpacing="-0.5">
              Scopus
            </text>
            <text x="21" y="-3" fill="url(#goldOuter)" fontSize="5" fontWeight="bold" fontFamily="system-ui, sans-serif">
              ®
            </text>
          </g>
        )}
      </g>
    </svg>
  );
};

const products = [
  {
    id: 1,
    title: "Jurnal Nasional Terakreditasi Sinta",
    description: "Publikasi di jurnal nasional terakreditasi SINTA 1-6 dengan pendampingan penuh.",
    badgeTop: "SINTA",
    badgeBottom: "ACCREDITED",
    badgeIcon: "sinta"
  },
  {
    id: 2,
    title: "Jurnal Internasional Copernicus",
    description: "Terbitkan artikel di jurnal internasional terindeks Index Copernicus.",
    badgeTop: "COPERNICUS",
    badgeBottom: "INDEXED",
    badgeIcon: "copernicus"
  },
  {
    id: 3,
    title: "Jurnal Internasional EBSCO",
    description: "Tingkatkan peluang diterima di jurnal internasional terindeks EBSCO untuk karier global.",
    badgeTop: "EBSCO",
    badgeBottom: "INDEXED",
    badgeIcon: "ebsco"
  },
  {
    id: 4,
    title: "Jurnal Internasional Scopus",
    description: "Publikasi di jurnal Scopus Q1-Q4 dengan editor profesional.",
    badgeTop: "SCOPUS",
    badgeBottom: "INDEXED",
    badgeIcon: "scopus"
  }
];

export const Products = () => {
  const waLink = "https://wa.me/628981669927";

  return (
    <section id="produk" className="py-12 md:py-20 lg:py-28 bg-slate-50/80 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200/80 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
            >
              {/* SVG Badge */}
              <div className="flex justify-center mb-8">
                <GoldBadge 
                  topText={product.badgeTop} 
                  bottomText={product.badgeBottom} 
                  iconType={product.badgeIcon} 
                />
              </div>

              {/* Title & Description */}
              <div className="mb-4">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white font-jakarta leading-tight mb-3">
                  {product.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                  {product.description}
                </p>
              </div>

              {/* Link */}
              <div className="mt-auto pt-6">
                <a
                  href={`/produk#${product.badgeIcon}`}
                  className="inline-flex items-center gap-1.5 text-orange-500 text-sm font-bold hover:text-orange-600 transition-colors"
                >
                  Selengkapnya <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
