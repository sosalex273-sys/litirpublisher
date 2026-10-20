"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const baseFlyerImages = [
  // === MASSIVE SINTA 2 & 3 AT THE BEGINNING ===
  
  // Sinta 2
  "https://goacademica.com/wp-content/uploads/2023/12/CFP-Sinta-2-scaled.jpg",
  "https://goacademica.com/wp-content/uploads/2023/12/CFP-Sinta-2-1-scaled.jpg",
  "https://goacademica.com/wp-content/uploads/2023/12/CFP-Sinta-2-2-scaled.jpg",
  
  // Sinta 3
  "https://goacademica.com/wp-content/uploads/2023/12/CFP-Sinta-3-1-scaled.jpg",
  "https://goacademica.com/wp-content/uploads/2023/12/CFP-Sinta-3-2-scaled.jpg",
  "https://goacademica.com/wp-content/uploads/2023/12/CFP-Sinta-3-3-scaled.jpg",
  


  // Sinta 4
  "https://goacademica.com/wp-content/uploads/2023/12/CFP-Sinta-4-scaled.jpg",
  "https://goacademica.com/wp-content/uploads/2024/01/CFP-Sinta-4-scaled.jpg",
  "https://goacademica.com/wp-content/uploads/2024/02/CFP-Sinta-4-scaled.jpg",
  "https://goacademica.com/wp-content/uploads/2023/12/CFP-Sinta-4-1-scaled.jpg",
  "https://goacademica.com/wp-content/uploads/2023/12/CFP-Sinta-4-2-scaled.jpg",

  // Sinta 5
  "https://goacademica.com/wp-content/uploads/2023/12/CFP-Sinta-5-1-scaled.jpg",
  "https://goacademica.com/wp-content/uploads/2023/12/CFP-Sinta-5-2-scaled.jpg",
  "https://goacademica.com/wp-content/uploads/2023/12/CFP-Sinta-5-3-scaled.jpg",
  "https://goacademica.com/wp-content/uploads/2023/12/CFP-Sinta-5-4-scaled.jpg",
  "https://goacademica.com/wp-content/uploads/2023/12/CFP-Sinta-5-scaled.jpg",
  "https://goacademica.com/wp-content/uploads/2024/01/CFP-Sinta-5-scaled.jpg",

  // Sinta 6
  "https://goacademica.com/wp-content/uploads/2023/12/CFP-Sinta-6-scaled.jpg",
  "https://goacademica.com/wp-content/uploads/2023/12/CFP-Sinta-6-1-scaled.jpg",
  "https://goacademica.com/wp-content/uploads/2023/12/CFP-Sinta-6-2-scaled.jpg",
  "https://goacademica.com/wp-content/uploads/2024/01/CFP-Sinta-6-scaled.jpg",

  // Jurnal Internasional
  "https://goacademica.com/wp-content/uploads/2023/12/CFP-Jurnal-Internasional-1-scaled.jpg",
  "https://goacademica.com/wp-content/uploads/2023/12/CFP-Jurnal-Internasional-2-scaled.jpg",
  "https://goacademica.com/wp-content/uploads/2023/12/CFP-Jurnal-Internasional-scaled.jpg",
  "https://goacademica.com/wp-content/uploads/2024/01/CFP-Jurnal-Internasional-scaled.jpg",
];

// Menggunakan list original tanpa digandakan 3x lipat untuk menghemat RAM dan mempercepat loading
const initialFlyerImages = [
  ...baseFlyerImages,
];
const FlyerCard = ({ imgUrl, onError, onClick }: { imgUrl: string, onError: () => void, onClick: () => void }) => (
  <div 
    onClick={onClick}
    className="bg-white rounded-xl flex flex-col w-[260px] h-auto shrink-0 shadow-lg relative overflow-hidden group cursor-pointer border border-slate-100"
  >
    {/* Rebranding Header (Dipindah ke atas gambar agar tidak menutupi teks pada flyer) */}
    <div className="w-full bg-white px-3 py-2 flex items-center justify-between border-b border-slate-100">
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-full overflow-hidden shrink-0">
          <img src="/images/litirlogo.png" alt="Litir Logo" className="w-full h-full object-cover" />
        </div>
        <span className="text-slate-800 text-[10px] font-black font-jakarta tracking-tighter">Litir Publisher</span>
      </div>
      <span className="text-[9px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">SINTA</span>
    </div>

    {/* Image Container */}
    <div className="relative w-full h-[260px] overflow-hidden">
      <img src={imgUrl} alt="Call for Paper Flyer" className="w-full h-full object-contain bg-slate-50 transition-all duration-300 blur-md group-hover:blur-none group-hover:scale-105" loading="lazy" onError={onError} />
      
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
        <ZoomIn className="text-white w-10 h-10" />
      </div>
    </div>

    {/* Address/Contact Footer */}
    <div className="w-full bg-[#0A1333] text-white py-2 px-3 flex flex-col justify-center items-center text-center border-t border-blue-950">
      <span className="text-[8px] font-bold uppercase tracking-widest text-orange-400 mb-1">Layanan Publikasi Jurnal</span>
      <span className="text-[9px] font-medium opacity-90 mb-0.5">WhatsApp: 08981669927</span>
      <span className="text-[8px] font-light text-slate-300 leading-tight">Desa Tateli Tiga, Jaga III<br/>Mandolang, Minahasa, Sulut</span>
    </div>
  </div>
);

export const CallForPaper = () => {
  const [validImages, setValidImages] = useState(initialFlyerImages);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Fitur Autoplay / Berpindah Sendiri dengan Native Scroll
  useEffect(() => {
    if (validImages.length === 0 || selectedImage !== null) return;
    
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        // Jika sudah mentok di kanan, kembali ke awal
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: 284, behavior: 'smooth' });
        }
      }
    }, 3000); // Bergeser otomatis setiap 3 detik

    return () => clearInterval(interval);
  }, [validImages.length, selectedImage]);

  const handleImageError = (urlToRemove: string) => {
    setValidImages(prev => prev.filter(url => url !== urlToRemove));
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -284, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 284, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-[#0B1536] overflow-hidden border-t border-blue-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-bold text-white mb-12 font-jakarta"
        >
          Call for Paper
        </motion.h2>

        <div className="relative max-w-6xl mx-auto group">
          {/* Left Arrow */}
          <button 
            onClick={handlePrev}
            className={`hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 -ml-12 w-10 h-10 rounded-full items-center justify-center text-white/30 hover:text-white transition-colors z-20`}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth pb-4 pt-4" 
            style={{ scrollSnapType: 'x mandatory' }}
          >
            <div className="flex gap-4 md:gap-6">
              {validImages.map((url, idx) => (
                <div key={`${url}-${idx}`} className="shrink-0" style={{ scrollSnapAlign: 'start' }}>
                  <FlyerCard imgUrl={url} onError={() => handleImageError(url)} onClick={() => setSelectedImage(url)} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={handleNext}
            className={`hidden md:flex absolute top-1/2 -translate-y-1/2 right-0 -mr-12 w-10 h-10 rounded-full items-center justify-center text-white/30 hover:text-white transition-colors z-20`}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
        
        {/* Helper text for mobile scrolling */}
        <p className="text-center text-white/40 text-xs mt-6 md:hidden">
          Geser untuk melihat jurnal lainnya
        </p>
      </div>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white p-2"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative max-w-full max-h-[90vh]">
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={selectedImage}
                alt="Zoomed Flyer"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute top-0 left-0 bg-white px-4 py-3 rounded-br-3xl z-10 flex flex-col items-center justify-center shadow-lg w-[120px] h-[90px] border-b-2 border-r-2 border-slate-100">
                <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 mb-1">
                  <img src="/images/litirlogo.png" alt="Litir Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-slate-800 text-[12px] font-black font-jakarta tracking-tighter leading-tight text-center">Litir<br/>Publisher</span>
              </div>

              {/* Address Overlay on Zoomed Image */}
              <div className="absolute bottom-0 left-0 w-full bg-[#0A1333] text-white py-4 px-6 z-10 flex flex-col justify-center items-center text-center rounded-b-lg border-t border-blue-900/60">
                <span className="text-sm font-bold uppercase tracking-widest text-orange-400 mb-2">Layanan Publikasi Jurnal</span>
                <span className="text-base font-medium opacity-90 mb-1">WhatsApp: 08981669927</span>
                <span className="text-xs font-light text-slate-300">Desa Tateli Tiga, Jaga III, Kecamatan Mandolang, Kabupaten Minahasa, Sulawesi Utara</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
