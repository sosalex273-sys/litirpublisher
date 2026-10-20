import React from 'react';
import Link from 'next/link';
import { CheckCircle2 as CheckCircle2Icon, MessageCircle as MessageCircleIcon, ArrowRight, ArrowLeft } from 'lucide-react';

export default function ProdukPage() {
  const waLink = "https://wa.me/628981669927";

  const packages = [
    {
      id: 'sinta',
      badge: 'SINTA',
      title: 'Jurnal Nasional Terakreditasi Sinta',
      desc: 'Publikasi di jurnal nasional terakreditasi SINTA 1-6 dengan pendampingan penuh.',
      color: 'bg-amber-700', // Sinta: Amber
      buttonColor: 'bg-amber-600 hover:bg-amber-700',
      features: [
        'Editor bersertifikat & berpengalaman',
        'Tracking progress publikasi real-time',
        'Garansi revisi naskah bahasa',
        'Pendampingan sampai jurnal terbit'
      ]
    },
    {
      id: 'copernicus',
      badge: 'COPERNICUS',
      title: 'Jurnal Internasional Copernicus',
      desc: 'Terbitkan artikel di jurnal internasional terindeks Index Copernicus.',
      color: 'bg-teal-600', // Copernicus: Teal
      buttonColor: 'bg-teal-500 hover:bg-teal-600', 
      features: [
        'Editor bersertifikat & berpengalaman',
        'Tracking progress publikasi real-time',
        'Garansi revisi naskah bahasa',
        'Pendampingan sampai jurnal terbit'
      ]
    },
    {
      id: 'ebsco',
      badge: 'EBSCO',
      title: 'Jurnal Internasional EBSCO',
      desc: 'Diterima di jurnal internasional terindeks EBSCO untuk karier global.',
      color: 'bg-cyan-700', // EBSCO: Cyan
      buttonColor: 'bg-cyan-600 hover:bg-cyan-700', 
      features: [
        'Editor bersertifikat & berpengalaman',
        'Tracking progress publikasi real-time',
        'Garansi revisi naskah bahasa',
        'Pendampingan sampai jurnal terbit'
      ]
    },
    {
      id: 'scopus',
      badge: 'SCOPUS',
      title: 'Jurnal Internasional Scopus',
      desc: 'Publikasi di jurnal Scopus Q1-Q4 dengan editor profesional.',
      color: 'bg-slate-800', // Scopus: Slate/Dark
      buttonColor: 'bg-slate-700 hover:bg-slate-800', 
      features: [
        'Editor bersertifikat & berpengalaman',
        'Tracking progress publikasi real-time',
        'Garansi revisi naskah bahasa',
        'Pendampingan sampai jurnal terbit'
      ]
    }
  ];

  return (
    <main className="min-h-screen pt-12 pb-12 bg-slate-50">
      
      {/* Header Section with Back Button */}
      <section className="container mx-auto px-4 md:px-6 max-w-6xl pt-6 pb-12">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-amber-600 transition-colors font-medium text-sm bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100 hover:shadow-md w-max">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </div>

        <div className="max-w-2xl">
          <p className="text-amber-600 font-bold text-sm tracking-widest uppercase mb-4">
            PRODUK KAMI
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight font-jakarta">
            Layanan Publikasi
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Kepercayaan Anda adalah prioritas kami. Sebagai perusahaan yang resmi dan terdaftar 
            berdasarkan Akta Notaris, kami berkomitmen untuk memberikan layanan publikasi yang 
            sesuai dengan standar hukum dan profesionalisme.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="container mx-auto px-4 md:px-6 max-w-6xl pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} id={pkg.id} className="scroll-mt-24 rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white flex flex-col hover:-translate-y-1 transition-transform duration-300 border border-slate-100">
              {/* Card Header */}
              <div className={`${pkg.color} p-8 lg:p-10 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                <p className="text-sm font-bold tracking-widest uppercase mb-4 opacity-90 relative z-10">
                  {pkg.badge}
                </p>
                <h3 className="text-2xl lg:text-3xl font-bold leading-tight font-jakarta relative z-10">
                  {pkg.title}
                </h3>
              </div>
              
              {/* Card Body */}
              <div className="p-8 lg:p-10 flex flex-col flex-grow">
                <p className="text-slate-600 mb-8 text-sm lg:text-base leading-relaxed">
                  {pkg.desc}
                </p>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2Icon className={`w-5 h-5 shrink-0 text-amber-500`} />
                      <span className="text-slate-700 text-sm lg:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={waLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className={`inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-3.5 rounded-full transition-colors w-max shadow-md shadow-amber-500/10 ${pkg.buttonColor}`}
                >
                  <MessageCircleIcon className="w-5 h-5" />
                  Konsultasi Paket {pkg.badge}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow Steps Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-20">
            Hanya 3 Langkah Sederhana
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 max-w-5xl mx-auto relative">
            {/* Steps line connector (visible on desktop) */}
            <div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-[2px] bg-amber-50 -z-10"></div>
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#C9A227] rounded-full text-white font-bold flex items-center justify-center text-xl mb-6 shadow-lg shadow-amber-500/30">
                1
              </div>
              <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] w-full border border-slate-50 hover:-translate-y-1 transition-transform">
                <h3 className="font-bold text-slate-900 text-lg mb-3">Konsultasi</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Diskusikan naskah dan target jurnal Anda dengan tim kami.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#C9A227] rounded-full text-white font-bold flex items-center justify-center text-xl mb-6 shadow-lg shadow-amber-500/30">
                2
              </div>
              <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] w-full border border-slate-50 hover:-translate-y-1 transition-transform">
                <h3 className="font-bold text-slate-900 text-lg mb-3">Proses Publikasi</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Editor & reviewer bekerja, Anda tracking progressnya.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#C9A227] rounded-full text-white font-bold flex items-center justify-center text-xl mb-6 shadow-lg shadow-amber-500/30">
                3
              </div>
              <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] w-full border border-slate-50 hover:-translate-y-1 transition-transform">
                <h3 className="font-bold text-slate-900 text-lg mb-3">Jurnal Terbit</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Dapatkan pendampingan hingga Letter of Acceptance (LoA) diterbitkan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="bg-[#C9A227] py-24 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 max-w-2xl mx-auto leading-tight tracking-tight">
          Siap Publikasi? Mulai Bersama Litir Publisher!
        </h2>
        <a 
          href={waLink} 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#111] text-white font-semibold px-8 py-4 rounded-full hover:bg-black transition-all hover:scale-105 shadow-xl shadow-black/20"
        >
          Konsultasi Sekarang <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </section>

    </main>
  );
}
